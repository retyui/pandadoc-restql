import { schemaComposer } from "graphql-compose";
import { UserTC } from "./UserTD";
import { HistoryActionDocumentTC } from "./DocumentTC";

export const DocumentActionTypeTC = schemaComposer.createEnumTC({
  name: "DocumentActionType",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/annotations/constants.py`,
  values: {
    CREATED: { value: 0 },
    EDITED: { value: 1 },
    SENT: { value: 2 },
    DELETED: { value: 3 },
    VIEWED: { value: 4 },
    COMPLETED: { value: 5 },
    COMMENTED: { value: 6 },
    RECEIVED: { value: 7 },
    REVISION: { value: 8 },
    ALL_COMPLETED: { value: 9 },
    SIGNED_AND_COMPLETED: {
      value: 10,
      description: "embedded template",
    },
    DUPLICATED: { value: 11 },
    INVOICE_SENT: { value: 12 },
    FORWARDED: { value: 13 },
    PAYMENT_WAITING: { value: 14 },
    PAID: { value: 15 },
    PAYMENT_FAILED: { value: 16 },
    UPDATED_EXPIRATION_AFTER_SENT: { value: 17 },
    EXPIRATION_NOTIFICATIONS_SENT: { value: 18 },
    MANUAL_REMINDER_FOR_COMPLETE_SENT: { value: 19 },
    AUTO_REMINDERS_FOR_COMPLETE_SENT: { value: 20 },
    MANUAL_REMINDER_FOR_PAY_SENT: { value: 21 },
    PAYMENT_BANK_ACCOUNT_SUBMITTED: { value: 22 },
    PAYMENT_BANK_ACCOUNT_VERIFICATION_FAILED: { value: 23 },
    PAYMENT_BANK_ACCOUNT_VERIFIED: { value: 24 },
    PAYMENT_SUBMITTED: { value: 25 },
    RENEWAL_REMINDER_SENT: { value: 26 },

    EMAIL_DELIVERY_FAILED: { value: 26 },
    EMAIL_DELIVERED: { value: 27 },
    EMAIL_OPENED: { value: 28 },

    APPROVAL_APPROVAL_REQUESTED: { value: 29 },
    APPROVAL_APPROVE_RECEIVED: { value: 30 },
    APPROVAL_REJECTION_RECEIVED: { value: 31 },

    COMPLETED_MANUALLY: { value: 32 },
    EXPIRED_MANUALLY: { value: 33 },
    PAID_MANUALLY: { value: 34 },

    APPROVAL_APPROVAL_DELETED: { value: 35 },
    APPROVAL_APPROVAL_FORCED: { value: 36 },

    REASSIGNED: { value: 37 },
    RECIPIENT_EDITED: { value: 38 },
    RECIPIENT_ADDED: { value: 39 },
    RECIPIENT_DELETED: { value: 40 },

    DECLINED_MANUALLY: { value: 41 },

    APPROVAL_STEP_SKIPPED: { value: 42 },
    DECLINED: { value: 43 },
  },
});

export const DocumentHistoryOrderTC = schemaComposer.createEnumTC({
  name: "DocumentHistoryOrder",
  values: {
    DATE_CREATED: { value: "date_created" },
    DATE_CREATED_DESC: { value: "-date_created" },
  },
});

const DocumentHistoryDataJSON = schemaComposer.createScalarTC({
  name: "DocumentHistoryDataJSON",
  description: `
  Can include meta information for example:   
 1) SENT {"delivery_type": "email"}; 
 2) RECIPIENT_DELETED {recipient: {type: 2, email: "...", first_name: "...", last_name: "...",}}
  `,
});

export const DocumentHistoryActionTS = schemaComposer.createObjectTC({
  name: "DocumentHistoryAction",
  fields: {
    id: "Int!",
    actor: UserTC.NonNull,
    data: DocumentHistoryDataJSON,
    date_created: "Date!",
    document: HistoryActionDocumentTC.NonNull,
    type: DocumentActionTypeTC.NonNull,
  },
});
