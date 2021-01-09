import { schemaComposer } from "graphql-compose";
import {
  DocumentID,
  FIXME,
  OrganizationID,
  UserID,
  WorkspaceID,
} from "../types/Scalars";
import { UserTC } from "./UserTD";
import { FolderTC } from "./FolderTC";
import { pick } from "../../utils/pick";
import { FullDocRecipientTC, RecipientTC } from "./RecipientTC";

export const DocumentStatusTC = schemaComposer.createEnumTC({
  name: "DocumentStatus",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/enums.py#L7`,
  values: {
    DRAFT: { value: 0 },
    SENT: { value: 1 },
    COMPLETED: { value: 2 },
    // See `gwpy-core/public_api/constants.py` for `3` and `4` statuses
    UPLOADED: {
      value: 3,
      description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/public_api/constants.py#L3`,
    },
    ERROR: {
      value: 4,
      description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/public_api/constants.py#L4`,
    },
    VIEWED: { value: 5 },
    WAITING_APPROVAL: { value: 6 },
    APPROVAL_APPROVED: { value: 7 },
    APPROVAL_REJECTED: { value: 8 },
    WAITING_FOR_PAYMENT: { value: 9 },
    PAID: { value: 10 },
    EXPIRED: { value: 11 },
    DECLINED: { value: 12 },
  },
});

export const DocumentTypeTC = schemaComposer.createEnumTC({
  name: "DocumentType",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/constants.py#L85`,
  values: {
    DOCUMENT: { value: 0, description: "Regular Doc" },
    TEMPLATE: { value: 1, description: "Template" },
    EDITABLE_DOCUMENT: { value: 2, description: "Editor Regular Doc" },
    EDITABLE_TEMPLATE: { value: 3, description: "Editor Template" },
    LIBRARY_ITEM: { value: 4, description: "Content Template" },
  },
});

export const DocumentInfoOwnerTC = schemaComposer.createObjectTC({
  name: "DocumentInfoOwner",
  fields: {
    id: UserID,
  },
});

export const DocumentTotalValueJSON = schemaComposer.createScalarTC({
  name: "DocumentTotalValueJSON",
  description: 'Record<Currencies, string>  (example  { USD: "0" })',
});

export const DocumentTotalTC = schemaComposer.createObjectTC({
  name: "DocumentTotal",
  fields: {
    type: "Int!", // FIXME: Add description or use Enum
    value: DocumentTotalValueJSON,
  },
});

export const DocumentRenewalTC = schemaComposer.createObjectTC({
  name: "DocumentRenewal",
  fields: {
    enabled: "Boolean!",
    renewal_date: "Date",
  },
});

const COMMON_FIELDS = {
  // YOU WILL BE FIRED IF CHANGE NEXT PROPERTIES
  id: DocumentID.NonNull,
  status: DocumentStatusTC.NonNull,
  type: DocumentTypeTC.NonNull,
  version: "Int!", // FIXME
  name: "String!",
  removed: "Boolean!",
  owner: UserTC.NonNull,
  has_ordering: "Boolean!",
  has_payment: "Boolean!",
  date_completed: "Date",
  date_created: "Date!",
  date_declined: "Date",
  date_expiration: "Date",
  date_modified: "Date!",
  date_sent: "Date",
  date_status_changed: "Date!",
  renewal: DocumentRenewalTC,
  total: DocumentTotalTC.NonNull,
};

export const HistoryActionDocumentTC = schemaComposer.createObjectTC({
  name: "HistoryActionDocument",
  fields: {
    ...pick(COMMON_FIELDS, [
      //
      "id",
      "name",
      "type",
    ]),
    autonumbering_sequence_name: FIXME,
  },
});

export const DocumentInfoTC = schemaComposer.createObjectTC({
  name: "DocumentInfo",
  fields: {
    ...pick(COMMON_FIELDS, [
      //
      "id",
      "status",
      "type",
      "version",
    ]),
    owner: DocumentInfoOwnerTC.NonNull,
    redlining: FIXME, // FIXME
  },
});

export const DocumentTC = schemaComposer.createObjectTC({
  name: "Document",
  fields: {
    ...pick(COMMON_FIELDS, [
      "id",
      "date_completed",
      "date_created",
      "date_declined",
      "date_expiration",
      "date_modified",
      "date_sent",
      "date_status_changed",
      "has_ordering",
      "name",
      "owner",
      "removed",
      "renewal",
      "status",
      "total",
      "type",
      "version",
    ]),
    organization: OrganizationID.NonNull,
    workspace: WorkspaceID.NonNull,
    folder: FolderTC.NonNull,
    revision_number: "Int!",
    sample: "Boolean!",
    silent: "Boolean!",
    recipients: FullDocRecipientTC.NonNull.List.NonNull,
  },
});

export const ContactDocumentTC = schemaComposer.createObjectTC({
  name: "ContactDocument",
  fields: {
    ...pick(COMMON_FIELDS, [
      "id",
      "date_completed",
      "date_created",
      "date_declined",
      "date_expiration",
      "date_modified",
      "date_sent",
      "date_status_changed",
      "has_ordering",
      "has_payment",
      "name",
      "owner",
      "removed",
      "renewal",
      "status",
      "total",
      "type",
      "version",
    ]),
    // FIXME: Add strong types
    approval_execution: FIXME,
    autonumbering_sequence_name: FIXME,
    recipients: RecipientTC.NonNull.List.NonNull,
    tags: FIXME,
  },
});
