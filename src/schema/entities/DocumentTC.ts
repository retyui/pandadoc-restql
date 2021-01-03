import { schemaComposer } from "graphql-compose";
import {
  DocumentID,
  OrganizationID,
  UserID,
  WorkspaceID,
} from "../types/Scalars";
import { UserTC } from "./UserTD";
import { FolderTC } from "./FolderTC";

export const DocumentStatusTC = schemaComposer.createEnumTC({
  name: "DocumentStatus",
  values: {
    DRAFT: { value: 0 },
    SENT: { value: 1 },
    COMPLETED: { value: 2 },
    VIEWED: { value: 5 },
    WAITING_APPROVAL: { value: 6 },
    APPROVED: { value: 7 },
    REJECTED: { value: 8 },
    WAITING_FOR_PAYMENT: { value: 9 },
    PAID: { value: 10 },
    EXPIRED: { value: 11 },
    DECLINED: { value: 12 },
    UNDEFINED: { value: -1 },
  },
});

export const DocumentTypeTC = schemaComposer.createEnumTC({
  name: "DocumentType",
  values: {
    DOCUMENT: { value: 0 },
    TEMPLATE: { value: 1 },
    EDITABLE_DOCUMENT: { value: 2 },
    EDITABLE_TEMPLATE: { value: 3 },
    LIBRARY_ITEM: { value: 4 },
  },
});

export const DocumentInfoOwnerTC = schemaComposer.createObjectTC({
  name: "DocumentInfoOwner",
  fields: {
    id: UserID,
  },
});

export const DocumentInfoTC = schemaComposer.createObjectTC({
  name: "DocumentInfo",
  fields: {
    id: DocumentID.NonNull,
    status: DocumentStatusTC.NonNull,
    type: DocumentTypeTC.NonNull,
    version: "Int!", // FIXME
    owner: DocumentInfoOwnerTC.NonNull,
    // FIXME
    // redlining: null,
  },
});

export const DocumentTC = schemaComposer.createObjectTC({
  name: "Document",
  fields: {
    id: DocumentID.NonNull,
    name: "String!",
    status: DocumentStatusTC.NonNull,
    type: DocumentTypeTC.NonNull,
    version: "Int!", // FIXME
    organization: OrganizationID.NonNull,
    workspace: WorkspaceID.NonNull,
    owner: UserTC.NonNull,
    folder: FolderTC.NonNull,
    removed: "Boolean!",
    revision_number: "Int!",
    sample: "Boolean!",
    silent: "Boolean!",
  },
});
