import { FieldConfig } from "../../definitions";
import { ProfileTC } from "../../entities/ProfileTC";
import { getProfile } from "../../../verdor/profile";
import { GraphQLResolveInfo } from "graphql";

const getRequestedFields = (
  info: GraphQLResolveInfo
): Array<string> | undefined =>
  info.fieldNodes[0].selectionSet?.selections
    // @ts-ignore
    .map((e): string => e?.name?.value || "")
    .filter(Boolean);

export default {
  type: ProfileTC,
  description: `
Request URL: https://api.pandadoc.com/profile
`,
  resolve: (_, __, { axios }, info) =>
    getProfile(axios, { includeFields: getRequestedFields(info) }),
} as FieldConfig;
