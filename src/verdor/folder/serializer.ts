import { castDateFields } from "../../utils/castDateFields";

export const parseFolder = (folder: any) =>
  castDateFields(folder, ["date_created", "date_modified"]);
