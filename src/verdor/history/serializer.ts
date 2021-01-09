import { castDateFields } from "../../utils/castDateFields";

export const parseHistoryAction = (comment: any) =>
  castDateFields(comment, ["date_created"]);
