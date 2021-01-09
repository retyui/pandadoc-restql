import { schemaComposer } from "graphql-compose";
import { AuditTrailID, FIXME, RevisionID, WorkspaceID } from "../types/Scalars";
import { UserTC } from "./UserTD";

export const AuditTrailActionTypeTC = schemaComposer.createEnumTC({
  name: "AuditTrailActionType",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/audit/constants.py`,
  values: {
    ACTION_DOCUMENT: { value: 1 },
    ACTION_REVISION: { value: 2 },
    ACTION_APPROVE_REQUEST: { value: 3 },
    ACTION_APPROVED: { value: 4 },
    ACTION_REJECTED: { value: 5 },
    ACTION_SENT: { value: 6 },
    ACTION_ALL_COMPLETED: { value: 7 },
    ACTION_VIEWED: { value: 8 },
    ACTION_COMPLETED: { value: 9 },
    ACTION_WAITING_PAY: { value: 10 },
    ACTION_PAID: { value: 11 },
    ACTION_FORWARDED: { value: 12 },
    ACTION_EXPIRED: { value: 13 },
    ACTION_PAYMENT_BANK_ACCOUNT_SUBMITTED: { value: 14 },
    ACTION_PAYMENT_BANK_ACCOUNT_VERIFIED: { value: 15 },
    ACTION_PAYMENT_SUBMITTED: { value: 16 },
    ACTION_PAYMENT_FAILED: { value: 17 },
    ACTION_COMPLETED_MANUALLY: { value: 18 },
    ACTION_EXPIRED_MANUALLY: { value: 19 },
    ACTION_PAID_MANUALLY: { value: 20 },
    ACTION_APPROVAL_DELETED: { value: 21 },
    ACTION_APPROVAL_FORCED: { value: 22 },
    ACTION_REASSIGNED: { value: 23 },
    ACTION_RECIPIENT_EDITED: { value: 24 },
    ACTION_RECIPIENT_ADDED: { value: 25 },
    ACTION_RECIPIENT_DELETED: { value: 26 },
    ACTION_DECLINED_MANUALLY: { value: 27 },

    ACTION_APPROVAL_STEP_SKIPPED: { value: 28 },

    ACTION_DECLINED: {
      value: 43,
      description:
        "# BECAUSE FRONT END HAS ONE LIST CONSTANTS FOR AUDIT TRAIL AND DOCUMENT ACTIONS",
    },
  },
});

const DocumentAuditTrailDataJSON = schemaComposer.createScalarTC({
  name: "DocumentAuditTrailDataJSON",
  description: "Can include meta information",
});

export const DocumentAuditTrailTC = schemaComposer.createObjectTC({
  name: "DocumentAuditTrail",
  fields: {
    id: AuditTrailID.NonNull,
    action: AuditTrailActionTypeTC.NonNull,
    data: DocumentAuditTrailDataJSON.NonNull,
    date_created: "Date!",
    ip_address: "String",
    reason: "String",
    revision: RevisionID.NonNull,
    user: UserTC.NonNull,
    workspace: WorkspaceID,
  },
});
