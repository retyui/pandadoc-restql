import { castDateFields } from "../../utils/castDateFields";

export const parseAuditTrail = (auditTrail: any) =>
  castDateFields(auditTrail, ["date_created"]);
