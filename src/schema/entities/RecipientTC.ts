import { schemaComposer } from "graphql-compose";
import { pick } from "../../utils/pick";
import { COMMON_CONTACT_FIELDS, ContactTC } from "./ContactTC";
import { DocumentID, FieldID, FIXME } from "../types/Scalars";
import { LanguagesTC } from "./i18nTC";

export const RecipientTypeTC = schemaComposer.createEnumTC({
  name: "RecipientType",
  values: {
    SIGNER: { value: 1 },
    CC: { value: 2 },
  },
});

export const RecipientTC = schemaComposer.createObjectTC({
  name: "Recipient",
  fields: {
    ...pick(COMMON_CONTACT_FIELDS, [
      "id",
      "avatar",
      "email",
      "first_name",
      "last_name",
    ]),
    type: RecipientTypeTC.NonNull,
    is_done: "Boolean!",
  },
});

export const FullDocRecipientTC = schemaComposer.createObjectTC({
  name: "FullDocumentRecipient",
  fields: {
    ...pick(COMMON_CONTACT_FIELDS, [
      "id",
      "avatar",
      "email",
      "first_name",
      "last_name",
    ]),
    type: RecipientTypeTC.NonNull,
    is_done: "Boolean!",
    document: DocumentID.NonNull,
    date_created: "Date!",
    can_pay: "Boolean!",
    contact: ContactTC.NonNull,
    fields: FieldID.NonNull.List.NonNull,
    language: LanguagesTC.NonNull,
    // FIXME
    authentication: FIXME,
    features: FIXME,
    ordering: FIXME,
  },
});
