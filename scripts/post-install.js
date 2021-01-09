const { readFileSync, writeFileSync } = require("fs");
const PATH = require.resolve("yup/lib/mixed.d.ts");

const text = readFileSync(PATH).toString();

if (!text.includes("export declare class MixedSchema")) {
  writeFileSync(
    PATH,
    text.replace(
      "declare class MixedSchema",
      "export declare class MixedSchema"
    )
  );
}
