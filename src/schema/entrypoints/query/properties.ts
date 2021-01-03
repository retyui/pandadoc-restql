import { FieldConfig } from "../../definitions";
import { PropertiesTC } from "../../entities/PropertiesTC";
import { getProperties } from "../../../verdor/properties";

export default {
  type: PropertiesTC,
  description: `
Request URL: https://api.pandadoc.com/properties
`,
  resolve: (_, __, { axios }) => getProperties(axios),
} as FieldConfig;
