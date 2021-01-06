import {
  AnyObjectSchema,
  ArraySchema,
  BooleanSchema,
  InferType,
  NumberSchema,
  ObjectSchema,
  StringSchema,
} from "yup";
import { RequiredStringSchema } from "yup/lib/string";
import { RequiredNumberSchema } from "yup/lib/number";
import { RequiredBooleanSchema } from "yup/lib/boolean";
import { AnyObject } from "yup/lib/types";
import { OptionalArraySchema } from "yup/lib/array";

export type InferParamsType<T extends (...args: any) => any> = Parameters<T>[0];

type Equal<Left, Right> = (<X>() => X extends Left ? 1 : 2) extends <
  X
>() => X extends Right ? 1 : 2
  ? unknown
  : never;

type InferArrayType<T> = T extends ArraySchema<infer Result> ? Result : never;

type GetLiteralTypeOfSchema<T> =
  | (Equal<T, RequiredStringSchema<string | undefined, AnyObject>> & string)
  | (Equal<T, RequiredBooleanSchema<boolean | undefined, AnyObject>> & boolean)
  | (Equal<T, RequiredNumberSchema<number | undefined, AnyObject>> & number)
  | (Equal<T, BooleanSchema<boolean, AnyObject, boolean>> &
      (boolean | undefined))
  | (Equal<T, StringSchema<string, AnyObject, string>> & (string | undefined))
  | (Equal<T, NumberSchema<number, AnyObject, number>> & (number | undefined));

type GetArrayTypeOfSchema<
  T extends ArraySchema<any>
> = OptionalArraySchema<any> extends T
  ? Array<GetLiteralTypeOfSchema<InferArrayType<T>>> | undefined
  : Array<GetLiteralTypeOfSchema<InferArrayType<T>>>;

type GetTypeOfObjectSchema<T> = T extends ObjectSchema<infer TShape>
  ? {
      [Key in keyof TShape]: GetLiteralTypeOfSchema<TShape[Key]> extends never
        ? TShape[Key] extends ArraySchema<any>
          ? GetArrayTypeOfSchema<
              // @ts-ignore sorry))
              TShape[Key]
            >
          : unknown
        : GetLiteralTypeOfSchema<TShape[Key]>;
    }
  : never;

export const createParamsValidator = <T extends AnyObjectSchema>(
  schema: T
) => async (params: GetTypeOfObjectSchema<T>): Promise<InferType<T>> => {
  const validParams = await schema.validate(params);

  return validParams;
};
