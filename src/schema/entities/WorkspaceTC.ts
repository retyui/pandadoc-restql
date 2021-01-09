import { schemaComposer } from "graphql-compose";
import {
  CssColor,
  Currencies,
  FIXME,
  FolderID,
  ImageUrl,
  OrganizationID,
  ThemeID,
  UserID,
  WorkspaceID,
} from "../types/Scalars";
import { UserTC } from "./UserTD";
import { LanguagesTC } from "./i18nTC";

export const CurrencyFormatsJSON = schemaComposer.createScalarTC({
  name: "CurrencyFormatsJSON",
  description: `interface CurrencyFormatsJSON {
  [code: Currencies]: {
    code: Currencies;
    decimal: string;
    format: string;
    name: string;
    negativeFormat: string;
    pluralName: string;
    precision: number;
    symbol: string;
    thousand: string;
  };
};`,
});

export const DateFormatsJSON = schemaComposer.createScalarTC(`
  scalar DateFormatsJSON
`);

export const EditorModeTC = schemaComposer.createEnumTC({
  name: "EditorMode",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/events/constants.py#L64`,
  values: {
    EV1: { value: "EV1" },
    EV2: { value: "EV2" },
    EV1_EV2: { value: "EV1_EV2" },
  },
});

export const WorkspaceRemindersTC = schemaComposer.createObjectTC({
  name: "WorkspaceReminders",
  fields: {
    first_enabled: "Int!",
    first_interval: "Int",
    repeat_enabled: "Int!",
    repeat_interval: "Int",
  },
});

export const WorkspaceExpirationTC = schemaComposer.createObjectTC({
  name: "WorkspaceExpiration",
  fields: {
    expires_at: "Int!",
    notification_enabled: "Boolean!",
    notification_interval: "Int!",
  },
});

export const DateFormatsTC = schemaComposer.createEnumTC({
  name: "DateFormats",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/workspaces/enums.py`,
  values: {
    YYYY_MM_DD: { value: "YYYY-MM-DD" },
    MM_DD_YYYY: { value: "MM-DD-YYYY" },
    DD_MM_YYYY: { value: "DD-MM-YYYY" },

    YYYYMMDD: { value: "YYYY / MM / DD" },
    MMDDYYYY: { value: "MM / DD / YYYY" },
    DDMMYYYY: { value: "DD / MM / YYYY" },

    YYYY__MM__DD: { value: "YYYY.MM.DD" },
    MM__DD__YYYY: { value: "MM.DD.YYYY" },
    DD__MM__YYYY: { value: "DD.MM.YYYY" },

    MMM_DD_YYYY: { value: "MMM DD, YYYY" },
    DD_MMM_YYYY: { value: "DD MMM YYYY" },
  },
});

export const WorkspaceSettingsTC = schemaComposer.createObjectTC({
  name: "WorkspaceSettings",
  fields: {
    allow_join_by_domain: "Boolean!",
    allowed_clickable_links: "Boolean!",
    allowed_initials_draw: "Boolean!",
    allowed_initials_type: "Boolean!",
    allowed_signature_draw: "Boolean!",
    allowed_signature_type: "Boolean!",
    allowed_signature_upload: "Boolean!",
    currency_formats: CurrencyFormatsJSON,
    date_created: "Date!",
    date_formats: DateFormatsJSON.NonNull,
    date_updated: "Date!",
    default_currency: Currencies.NonNull,
    default_date_format: DateFormatsTC.NonNull,
    default_theme: ThemeID.NonNull,
    enable_signer_completion_dialog: "Boolean!",
    expiration: WorkspaceExpirationTC.NonNull,
    language_ev1: LanguagesTC.NonNull,
    language_ev2: LanguagesTC.NonNull,
    reminders: WorkspaceRemindersTC,
    send_signed_pdf: "Boolean!",
  },
});

export const WorkspaceFoldersTC = schemaComposer.createObjectTC({
  name: "WorkspaceFolders",
  fields: {
    documents: FolderID.NonNull,
    library: FolderID.NonNull,
    templates: FolderID.NonNull,
    trash: FolderID.NonNull,
  },
});

export const WorkspaceBrandingTC = schemaComposer.createObjectTC({
  name: "WorkspaceBranding",
  fields: {
    button_background_color: CssColor.NonNull,
    button_text_color: CssColor.NonNull,
    custom_branding: "Boolean!",
    email_footer_text: "String!",
    email_subject_whitelabeled: "Boolean!",
    icon: ImageUrl,
    icon_src: ImageUrl.NonNull,
    main_logo: ImageUrl.NonNull,
  },
});

export const WorkspaceTC = schemaComposer.createObjectTC({
  name: "Workspace",
  fields: {
    id: WorkspaceID.NonNull,
    active_members_count: "Int!",
    branding: WorkspaceBrandingTC.NonNull,
    date_created: "Date!",
    date_updated: "Date",
    editor_mode: EditorModeTC.NonNull,
    folders: WorkspaceFoldersTC.NonNull,
    invited_members_count: "Int!",
    members: UserID.NonNull.List.NonNull,
    name: "String!",
    new_editor_available: "Boolean!",
    organization: OrganizationID.NonNull,
    owner: UserTC.NonNull,
    settings: WorkspaceSettingsTC.NonNull,

    // FIXME
    features: FIXME,
    subscription: FIXME,
  },
});
