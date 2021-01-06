export const castDateFields = (
  obj: Record<string, unknown>,
  dateKeys: Array<string>
) =>
  dateKeys.reduce((acc, filedName) => {
    if (typeof acc[filedName] === "string") {
      acc[filedName] = new Date(
        // @ts-ignore
        acc[filedName]
      );
    }

    return acc;
  }, obj);
