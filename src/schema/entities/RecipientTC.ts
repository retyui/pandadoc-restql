import { schemaComposer } from "graphql-compose";
import { ContactTC } from "./ContactTC";
import {
  DocumentID,
  Email,
  FieldID,
  FIXME,
  ImageUrl,
  RecipientID,
} from "../types/Scalars";
import { LanguagesTC } from "./i18nTC";

export const RecipientTypeTC = schemaComposer.createEnumTC({
  name: "RecipientType",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/contacts/enums.py#L17`,
  values: {
    SIGNER: { value: 1 },
    CC: { value: 2 },
  },
});

export const RecipientTC = schemaComposer.createObjectTC({
  name: "Recipient",
  fields: {
    id: RecipientID.NonNull,
    avatar: ImageUrl,
    email: Email,
    first_name: "String",
    is_done: "Boolean!",
    last_name: "String",
    type: RecipientTypeTC.NonNull,
  },
});

export const FullDocRecipientTC = schemaComposer.createObjectTC({
  name: "FullDocumentRecipient",
  fields: {
    id: RecipientID.NonNull,
    avatar: ImageUrl,
    can_pay: "Boolean!",
    contact: ContactTC.NonNull,
    date_created: "Date!",
    document: DocumentID.NonNull,
    email: Email,
    fields: FieldID.NonNull.List.NonNull,
    first_name: "String",
    is_done: "Boolean!",
    language: LanguagesTC.NonNull,
    last_name: "String",
    type: RecipientTypeTC.NonNull,
    // FIXME
    authentication: FIXME,
    features: FIXME,
    ordering: FIXME,
  },
});
