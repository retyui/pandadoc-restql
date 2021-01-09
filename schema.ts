export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  AuditTrailID: string;
  /** Can include meta information */
  DocumentAuditTrailDataJSON: any;
  Date: any;
  RevisionID: string;
  UserID: string;
  /** Url to image (example: 'https://s3.amazonaws.com/test.jpg') */
  ImageUrl: string;
  /** e-mail address (exmaple: 'test@example.com') */
  Email: string;
  WorkspaceID: string;
  DocumentID: string;
  UUID: string;
  /** I DO NOT KNOW WHAT TYPE HERE SHOULD BE (( */
  FixMe: never;
  OrganizationID: string;
  ContactID: string;
  /** Any phone number no restrictions (example: "0", "14845101364") */
  PhoneNumber: string;
  /** Record<Currencies, string>  (example  { USD: "0" }) */
  DocumentTotalValueJSON: Record<Scalars["Currencies"], string>;
  FolderID: string;
  RecipientID: string;
  FieldID: string;
  /**
   * 
   *   Can include meta information for example:   
   *  1) SENT {"delivery_type": "email"}; 
   *  2) RECIPIENT_DELETED {recipient: {type: 2, email: "...", first_name: "...", last_name: "...",}}
   *   
   */
  DocumentHistoryDataJSON: any;
  /** URL (example: 'https://app.pandadoc.com/document/1cd272892f87dc644') */
  Url: any;
  TreatmentsJSON: { [featureName: string]: "control" | "on" | "off" };
  /** Color value (#ffffff) */
  CssColor: string;
  /**
   * interface CurrencyFormatsJSON {
   *   [code: Currencies]: {
   *     code: Currencies;
   *     decimal: string;
   *     format: string;
   *     name: string;
   *     negativeFormat: string;
   *     pluralName: string;
   *     precision: number;
   *     symbol: string;
   *     thousand: string;
   *   };
   * };
   */
  CurrencyFormatsJSON: Record<Scalars["Currencies"], {
    code: Scalars["Currencies"];
    decimal: string;
    format: string;
    name: string;
    negativeFormat: string;
    pluralName: string;
    precision: number;
    symbol: string;
    thousand: string;
  }>;
  DateFormatsJSON: Record<DateFormats, string>;
  /** https://en.wikipedia.org/wiki/ISO_4217 (USD" | "BYN"| "EUR" | ...) */
  Currencies: 'AED' |  'AFN' |  'ALL' |  'AMD' |  'AOA' |  'ARS' |  'AUD' |  'AWG' |  'AZN' |  'BAM' |  'BBD' |  'BDT' |  'BGN' |  'BHD' |  'BIF' |  'BMD' |  'BND' |  'BOB' |  'BRL' |  'BWP' |  'BYN' |  'BYR' |  'BZD' |  'CAD' |  'CDF' |  'CHF' |  'CLP' |  'CNY' |  'COP' |  'CRC' |  'CUC' |  'CVE' |  'CZK' |  'DJF' |  'DKK' |  'DOP' |  'DZD' |  'EGP' |  'ERN' |  'ETB' |  'EUR' |  'FJD' |  'GBP' |  'GEL' |  'GHS' |  'GNF' |  'GTQ' |  'GYD' |  'HKD' |  'HNL' |  'HRK' |  'HUF' |  'IDR' |  'ILS' |  'INR' |  'IQD' |  'IRR' |  'ISK' |  'JMD' |  'JOD' |  'JPY' |  'KES' |  'KHR' |  'KMF' |  'KRW' |  'KWD' |  'KZT' |  'LBP' |  'LKR' |  'LRD' |  'LTL' |  'LVL' |  'LYD' |  'MAD' |  'MDL' |  'MGA' |  'MKD' |  'MMK' |  'MOP' |  'MUR' |  'MXN' |  'MYR' |  'MZN' |  'NAD' |  'NGN' |  'NIO' |  'NOK' |  'NPR' |  'NZD' |  'OMR' |  'PAB' |  'PEN' |  'PGK' |  'PHP' |  'PKR' |  'PLN' |  'PYG' |  'QAR' |  'RON' |  'RSD' |  'RUB' |  'RWF' |  'SAR' |  'SDG' |  'SEK' |  'SGD' |  'SOS' |  'STD' |  'SYP' |  'THB' |  'TND' |  'TOP' |  'TRY' |  'TTD' |  'TWD' |  'TZS' |  'UAH' |  'UF' |  'UGX' |  'USD' |  'UYU' |  'UZS' |  'VEF' |  'VND' |  'XAF' |  'XOF' |  'YER' |  'ZAR' |  'ZMK';
  ThemeID: any;
}

/** for PandaDoc with ❤️ */
export interface Query {
  /** Request URL: https://api.pandadoc.com/documents/<documentId>/audit_trail */
  auditTrail?: Maybe<Array<DocumentAuditTrail>>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/comments/list */
  comments?: Maybe<Array<Comment>>;
  /** Request URL: https://api.pandadoc.com/contacts/<contactId> */
  contact?: Maybe<Contact>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/ */
  document?: Maybe<Document>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/info */
  documentInfo?: Maybe<DocumentInfo>;
  /** Request URL: https://api.pandadoc.com/contacts/<ContactId>/documents */
  documentsByContactsId?: Maybe<Array<ContactDocument>>;
  /** Request URL: https://api.pandadoc.com/folders/<folderId>/ */
  folder?: Maybe<Folder>;
  /**
   * Request URL: https://api.pandadoc.com/folders/<folderId>/tree
   *   
   * List of folders from the root folder to this folder
   * 
   * If you try get 'folder3' you will get:
   * 
   * [{id:'root_id'}, {id:'folder2_id'}, {id:'folder3_id'}]
   * 
   * 
   * root
   * ├── folder1
   * ├── folder2
   * │   ├── folder3
   */
  folderTree?: Maybe<Array<Folder>>;
  /** Request URL: https://api.pandadoc.com/documents/<documentId>/actions */
  history?: Maybe<Array<DocumentHistoryAction>>;
  /** Request URL: https://api.pandadoc.com/profile */
  profile?: Maybe<Profile>;
  /** Request URL: https://api.pandadoc.com/properties */
  properties?: Maybe<Properties>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/recipients/sharing-links */
  sharingLinks?: Maybe<Array<SharingLink>>;
  /** Request URL: https://api.pandadoc.com/users/treatments */
  treatments?: Maybe<Scalars['TreatmentsJSON']>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/ */
  workspace?: Maybe<Workspace>;
}


/** for PandaDoc with ❤️ */
export interface QueryAuditTrailArgs {
  documentId: Scalars['DocumentID'];
}


/** for PandaDoc with ❤️ */
export interface QueryCommentsArgs {
  organizationId: Scalars['OrganizationID'];
  workspaceId: Scalars['WorkspaceID'];
  documentId: Scalars['DocumentID'];
  sessionUuid: Scalars['UUID'];
  order?: Maybe<CommentOrder>;
  status?: Maybe<CommentStatus>;
  placementTypeDocument?: Maybe<Scalars['Boolean']>;
}


/** for PandaDoc with ❤️ */
export interface QueryContactArgs {
  id: Scalars['UserID'];
}


/** for PandaDoc with ❤️ */
export interface QueryDocumentArgs {
  organizationId: Scalars['OrganizationID'];
  workspaceId: Scalars['WorkspaceID'];
  documentId: Scalars['DocumentID'];
}


/** for PandaDoc with ❤️ */
export interface QueryDocumentInfoArgs {
  organizationId: Scalars['OrganizationID'];
  workspaceId: Scalars['WorkspaceID'];
  documentId: Scalars['DocumentID'];
}


/** for PandaDoc with ❤️ */
export interface QueryDocumentsByContactsIdArgs {
  contactId: Scalars['UserID'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  statusNe?: Maybe<DocumentStatus>;
}


/** for PandaDoc with ❤️ */
export interface QueryFolderArgs {
  id: Scalars['FolderID'];
}


/** for PandaDoc with ❤️ */
export interface QueryFolderTreeArgs {
  id: Scalars['FolderID'];
}


/** for PandaDoc with ❤️ */
export interface QueryHistoryArgs {
  documentId: Scalars['DocumentID'];
  order?: Maybe<DocumentHistoryOrder>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}


/** for PandaDoc with ❤️ */
export interface QuerySharingLinksArgs {
  organizationId: Scalars['OrganizationID'];
  workspaceId: Scalars['WorkspaceID'];
  documentId: Scalars['DocumentID'];
}


/** for PandaDoc with ❤️ */
export interface QueryTreatmentsArgs {
  features: Array<Scalars['String']>;
}


/** for PandaDoc with ❤️ */
export interface QueryWorkspaceArgs {
  workspaceId: Scalars['WorkspaceID'];
  organizationId: Scalars['OrganizationID'];
}

export interface DocumentAuditTrail {
  id: Scalars['AuditTrailID'];
  action: AuditTrailActionType;
  data: Scalars['DocumentAuditTrailDataJSON'];
  date_created: Scalars['Date'];
  ip_address?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  revision: Scalars['RevisionID'];
  user: User;
  workspace?: Maybe<Scalars['WorkspaceID']>;
}


/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/audit/constants.py */
export enum AuditTrailActionType {
  ACTION_DOCUMENT = 1,
  ACTION_REVISION = 2,
  ACTION_APPROVE_REQUEST = 3,
  ACTION_APPROVED = 4,
  ACTION_REJECTED = 5,
  ACTION_SENT = 6,
  ACTION_ALL_COMPLETED = 7,
  ACTION_VIEWED = 8,
  ACTION_COMPLETED = 9,
  ACTION_WAITING_PAY = 10,
  ACTION_PAID = 11,
  ACTION_FORWARDED = 12,
  ACTION_EXPIRED = 13,
  ACTION_PAYMENT_BANK_ACCOUNT_SUBMITTED = 14,
  ACTION_PAYMENT_BANK_ACCOUNT_VERIFIED = 15,
  ACTION_PAYMENT_SUBMITTED = 16,
  ACTION_PAYMENT_FAILED = 17,
  ACTION_COMPLETED_MANUALLY = 18,
  ACTION_EXPIRED_MANUALLY = 19,
  ACTION_PAID_MANUALLY = 20,
  ACTION_APPROVAL_DELETED = 21,
  ACTION_APPROVAL_FORCED = 22,
  ACTION_REASSIGNED = 23,
  ACTION_RECIPIENT_EDITED = 24,
  ACTION_RECIPIENT_ADDED = 25,
  ACTION_RECIPIENT_DELETED = 26,
  ACTION_DECLINED_MANUALLY = 27,
  ACTION_APPROVAL_STEP_SKIPPED = 28,
  /** # BECAUSE FRONT END HAS ONE LIST CONSTANTS FOR AUDIT TRAIL AND DOCUMENT ACTIONS */
  ACTION_DECLINED = 43
}




export interface User {
  id: Scalars['UserID'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  email: Scalars['Email'];
  first_name: Scalars['String'];
  iid: Scalars['Int'];
  /** Checks whether that user has no active workspace */
  is_suspended: Scalars['Boolean'];
  last_name: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  /** (example: "login") */
  signup_source?: Maybe<Scalars['String']>;
}






/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/serializers.py#L201 */
export interface Comment {
  uuid: Scalars['UUID'];
  access: CommentAccessType;
  anchor_uuid?: Maybe<Scalars['UUID']>;
  date_created: Scalars['Date'];
  date_updated?: Maybe<Scalars['Date']>;
  document_id: Scalars['DocumentID'];
  mentions?: Maybe<Scalars['FixMe']>;
  placement_type: CommentPlacementType;
  replies?: Maybe<Array<CommentReply>>;
  status: CommentStatus;
  status_updated_by?: Maybe<CommentUser>;
  text: Scalars['String'];
  user: CommentUser;
}


/** http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L7 */
export enum CommentAccessType {
  PUBLIC = 0,
  INTERNAL = 1
}


/** http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L52 */
export enum CommentPlacementType {
  DOCUMENT = 1,
  BLOCK = 2,
  INLINE_COMMENT = 3
}

export interface CommentReply {
  uuid: Scalars['UUID'];
  date_created: Scalars['Date'];
  date_updated?: Maybe<Scalars['Date']>;
  mentions?: Maybe<Scalars['FixMe']>;
  text: Scalars['String'];
  user: CommentUser;
}

export interface CommentUser {
  id: Scalars['UserID'];
  email: Scalars['Email'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
}

/** http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L45 */
export enum CommentStatus {
  RESOLVED = 0,
  ACTIVE = 1
}


/** http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L59 */
export enum CommentOrder {
  DATE_CREATED = 'date_created',
  DATE_CREATED_DESC = '-date_created',
  DATE_UPDATED = 'date_updated',
  DATE_UPDATED_DESC = '-date_updated'
}

export interface Contact {
  id: Scalars['ContactID'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email: Scalars['Email'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  is_internal: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['PhoneNumber']>;
  postal_code?: Maybe<Scalars['String']>;
  removed: Scalars['Boolean'];
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}



export interface Document {
  id: Scalars['DocumentID'];
  date_completed?: Maybe<Scalars['Date']>;
  date_created: Scalars['Date'];
  date_declined?: Maybe<Scalars['Date']>;
  date_expiration?: Maybe<Scalars['Date']>;
  date_modified: Scalars['Date'];
  date_sent?: Maybe<Scalars['Date']>;
  date_status_changed: Scalars['Date'];
  has_ordering: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  removed: Scalars['Boolean'];
  renewal?: Maybe<DocumentRenewal>;
  status: DocumentStatus;
  total: DocumentTotal;
  type: DocumentType;
  version: Scalars['Int'];
  organization: Scalars['OrganizationID'];
  workspace: Scalars['WorkspaceID'];
  folder: Folder;
  revision_number: Scalars['Int'];
  sample: Scalars['Boolean'];
  silent: Scalars['Boolean'];
  recipients: Array<FullDocumentRecipient>;
}

export interface DocumentRenewal {
  enabled: Scalars['Boolean'];
  renewal_date?: Maybe<Scalars['Date']>;
}

/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/enums.py#L7 */
export enum DocumentStatus {
  DRAFT = 0,
  SENT = 1,
  COMPLETED = 2,
  /** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/public_api/constants.py#L3 */
  UPLOADED = 3,
  /** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/public_api/constants.py#L4 */
  ERROR = 4,
  VIEWED = 5,
  WAITING_APPROVAL = 6,
  APPROVAL_APPROVED = 7,
  APPROVAL_REJECTED = 8,
  WAITING_FOR_PAYMENT = 9,
  PAID = 10,
  EXPIRED = 11,
  DECLINED = 12
}

export interface DocumentTotal {
  type: Scalars['Int'];
  value?: Maybe<Scalars['DocumentTotalValueJSON']>;
}


/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/constants.py#L85 */
export enum DocumentType {
  /** Regular Doc */
  DOCUMENT = 0,
  /** Template */
  TEMPLATE = 1,
  /** Editor Regular Doc */
  EDITABLE_DOCUMENT = 2,
  /** Editor Template */
  EDITABLE_TEMPLATE = 3,
  /** Content Template */
  LIBRARY_ITEM = 4
}

export interface Folder {
  id: Scalars['FolderID'];
  name: Scalars['String'];
  date_created: Scalars['Date'];
  date_modified: Scalars['Date'];
  owner: User;
  modified_by: User;
  parent?: Maybe<Scalars['FolderID']>;
  workspace: Scalars['WorkspaceID'];
  type: FolderType;
  /**
   * List of folders from the root folder to this folder
   * 
   * If you try get 'folder3' you will get:
   * 
   * [{id:'root_id'}, {id:'folder2_id'}, {id:'folder3_id'}]
   * 
   * root
   * ├── folder1
   * ├── folder2
   * │   ├── folder3
   */
  tree: Array<Folder>;
}


/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/enums.py#L66 */
export enum FolderType {
  REGULAR = 0,
  INBOX = 1,
  TRASH = 2,
  TEMPLATES = 3,
  CONTENT_TEMPLATES = 4
}

export interface FullDocumentRecipient {
  id: Scalars['RecipientID'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  can_pay: Scalars['Boolean'];
  contact: Contact;
  date_created: Scalars['Date'];
  document: Scalars['DocumentID'];
  email?: Maybe<Scalars['Email']>;
  fields: Array<Scalars['FieldID']>;
  first_name?: Maybe<Scalars['String']>;
  is_done: Scalars['Boolean'];
  language: Languages;
  last_name?: Maybe<Scalars['String']>;
  type: RecipientType;
  authentication?: Maybe<Scalars['FixMe']>;
  features?: Maybe<Scalars['FixMe']>;
  ordering?: Maybe<Scalars['FixMe']>;
}



export enum Languages {
  EN = 'en-US',
  FR = 'fr-FR',
  IT = 'it-IT',
  ES = 'es-ES',
  NL = 'nl-NL',
  DE = 'de-DE',
  PT = 'pt-BR',
  PL = 'pl-PL',
  SK = 'sk-SK'
}

/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/contacts/enums.py#L17 */
export enum RecipientType {
  SIGNER = 1,
  CC = 2
}

export interface DocumentInfo {
  id: Scalars['DocumentID'];
  status: DocumentStatus;
  type: DocumentType;
  version: Scalars['Int'];
  owner: DocumentInfoOwner;
  redlining?: Maybe<Scalars['FixMe']>;
}

export interface DocumentInfoOwner {
  id?: Maybe<Scalars['UserID']>;
}

export interface ContactDocument {
  id: Scalars['DocumentID'];
  date_completed?: Maybe<Scalars['Date']>;
  date_created: Scalars['Date'];
  date_declined?: Maybe<Scalars['Date']>;
  date_expiration?: Maybe<Scalars['Date']>;
  date_modified: Scalars['Date'];
  date_sent?: Maybe<Scalars['Date']>;
  date_status_changed: Scalars['Date'];
  has_ordering: Scalars['Boolean'];
  has_payment: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  removed: Scalars['Boolean'];
  renewal?: Maybe<DocumentRenewal>;
  status: DocumentStatus;
  total: DocumentTotal;
  type: DocumentType;
  version: Scalars['Int'];
  approval_execution?: Maybe<Scalars['FixMe']>;
  autonumbering_sequence_name?: Maybe<Scalars['FixMe']>;
  recipients: Array<Recipient>;
  tags?: Maybe<Scalars['FixMe']>;
}

export interface Recipient {
  id: Scalars['RecipientID'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  email?: Maybe<Scalars['Email']>;
  first_name?: Maybe<Scalars['String']>;
  is_done: Scalars['Boolean'];
  last_name?: Maybe<Scalars['String']>;
  type: RecipientType;
}

export interface DocumentHistoryAction {
  id: Scalars['Int'];
  actor: User;
  data?: Maybe<Scalars['DocumentHistoryDataJSON']>;
  date_created: Scalars['Date'];
  document: HistoryActionDocument;
  type: DocumentActionType;
}


export interface HistoryActionDocument {
  id: Scalars['DocumentID'];
  name: Scalars['String'];
  type: DocumentType;
  autonumbering_sequence_name?: Maybe<Scalars['FixMe']>;
}

/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/annotations/constants.py */
export enum DocumentActionType {
  CREATED = 0,
  EDITED = 1,
  SENT = 2,
  DELETED = 3,
  VIEWED = 4,
  COMPLETED = 5,
  COMMENTED = 6,
  RECEIVED = 7,
  REVISION = 8,
  ALL_COMPLETED = 9,
  /** embedded template */
  SIGNED_AND_COMPLETED = 10,
  DUPLICATED = 11,
  INVOICE_SENT = 12,
  FORWARDED = 13,
  PAYMENT_WAITING = 14,
  PAID = 15,
  PAYMENT_FAILED = 16,
  UPDATED_EXPIRATION_AFTER_SENT = 17,
  EXPIRATION_NOTIFICATIONS_SENT = 18,
  MANUAL_REMINDER_FOR_COMPLETE_SENT = 19,
  AUTO_REMINDERS_FOR_COMPLETE_SENT = 20,
  MANUAL_REMINDER_FOR_PAY_SENT = 21,
  PAYMENT_BANK_ACCOUNT_SUBMITTED = 22,
  PAYMENT_BANK_ACCOUNT_VERIFICATION_FAILED = 23,
  PAYMENT_BANK_ACCOUNT_VERIFIED = 24,
  PAYMENT_SUBMITTED = 25,
  RENEWAL_REMINDER_SENT = 26,
  EMAIL_DELIVERY_FAILED = 26,
  EMAIL_DELIVERED = 27,
  EMAIL_OPENED = 28,
  APPROVAL_APPROVAL_REQUESTED = 29,
  APPROVAL_APPROVE_RECEIVED = 30,
  APPROVAL_REJECTION_RECEIVED = 31,
  COMPLETED_MANUALLY = 32,
  EXPIRED_MANUALLY = 33,
  PAID_MANUALLY = 34,
  APPROVAL_APPROVAL_DELETED = 35,
  APPROVAL_APPROVAL_FORCED = 36,
  REASSIGNED = 37,
  RECIPIENT_EDITED = 38,
  RECIPIENT_ADDED = 39,
  RECIPIENT_DELETED = 40,
  DECLINED_MANUALLY = 41,
  APPROVAL_STEP_SKIPPED = 42,
  DECLINED = 43
}

export enum DocumentHistoryOrder {
  DATE_CREATED = 'date_created',
  DATE_CREATED_DESC = '-date_created'
}

export interface Profile {
  id: Scalars['UserID'];
  actor: Scalars['ContactID'];
  avatar?: Maybe<Scalars['ImageUrl']>;
  /** @deprecated Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736) */
  company_name?: Maybe<Scalars['String']>;
  /** @deprecated Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736) */
  company_size?: Maybe<CompanySize>;
  date_joined: Scalars['Date'];
  date_registered: Scalars['Date'];
  email: Scalars['Email'];
  email_verified: Scalars['Boolean'];
  first_name: Scalars['String'];
  iid: Scalars['Int'];
  is_organization_admin: Scalars['Boolean'];
  is_organization_owner: Scalars['Boolean'];
  /** Checks whether that user has no active workspace */
  is_suspended: Scalars['Boolean'];
  last_name: Scalars['String'];
  /** (example: "Full") */
  license: Scalars['String'];
  org_date_created?: Maybe<Scalars['Date']>;
  phone_number: Scalars['PhoneNumber'];
  signature?: Maybe<Signature>;
  /** (example: "login") */
  signup_source: Scalars['String'];
  workspace: Scalars['WorkspaceID'];
}

export enum CompanySize {
  SOLO = '1',
  FROM_2_TO_10 = '2-10',
  FROM_11_TO_50 = '11-50',
  FROM_51_TO_200 = '51-200',
  FROM_201_TO_500 = '201-500',
  FROM_501_TO_1000 = '501-1000',
  FROM_1001_AND_MORE = '1001+'
}

export interface Signature {
  /** Encode image data */
  data: Scalars['String'];
  /** Image format (example: "image/png;base64") */
  dataFormat: Scalars['String'];
}

/** Request URL: https://api.pandadoc.com/properties */
export interface Properties {
  user?: Maybe<UserProperties>;
  organization?: Maybe<OrganizationProperties>;
}

export interface UserProperties {
  /** Unix timestamp (example: '1588852018197') */
  proactive_chat_billing_last_time_triggered: Scalars['String'];
  /** User booking a product demo status */
  book_a_demo_state: BookDemoStates;
  /** Number of onboarding dialog shows (example: '0', '1') */
  new_onboarding_shown_times: Scalars['String'];
  /** TimeZone offset (example: Europe/Minsk) */
  raw_timezone: Scalars['String'];
  /** Number timezone offset (example: +03) */
  timezone: Scalars['String'];
  /** (example: Minsk) */
  city: Scalars['String'];
  /** Country region (example: Minsk City) */
  region: Scalars['String'];
  /** Full country name (example: Belarus, Poland...) */
  country: Scalars['String'];
  /** Short country code (example: US, BY, Pl...) */
  country_code: Scalars['String'];
}

export enum BookDemoStates {
  NOT_SET = 'NOT_SET',
  PANEL_ACTIVE = 'PANEL_ACTIVE',
  PANEL_HIDDEN = 'PANEL_HIDDEN',
  USED = 'USED'
}

export interface OrganizationProperties {
  job_role: Scalars['String'];
  company_name: Scalars['String'];
  company_size: CompanySize;
  industry: Scalars['String'];
  crm: CrmTypes;
  what_brought_you_to_pandadoc: Scalars['String'];
  phone: Scalars['String'];
  google_analytics_client_id: Scalars['String'];
  device: Scalars['String'];
  a_b_test_info: Scalars['String'];
  country_ab: Scalars['String'];
  hubspot_form_guid: Scalars['String'];
  sfdc_campaign_id: Scalars['String'];
  hs_analytics_first_url: Scalars['String'];
}

export enum CrmTypes {
  SALESFORCE = 'Salesforce',
  SUGAR = 'Sugar',
  MICROSOFT_DYNAMICS = 'Microsoft Dynamics',
  FRESHSALES_CRM = 'Freshsales CRM',
  NUTSHELL = 'Nutshell',
  BASE = 'Base',
  HUBSPOT_CRM = 'HubSpot CRM',
  PIPEDRIVE = 'Pipedrive',
  ZOHO = 'Zoho',
  PROSPER_WORKS = 'ProsperWorks',
  INSIGHTLY = 'Insightly',
  OTHER = 'Other',
  STILL_LOOKING_FOR_CRM = 'Still looking for a CRM',
  DO_NOT_HAVE_CRM = 'Don\'t have a CRM'
}

/** Retrieve or generate (re-issue) DocumentTokens for document recipients */
export interface SharingLink {
  id: Scalars['RecipientID'];
  link: Scalars['Url'];
}



export interface Workspace {
  id: Scalars['WorkspaceID'];
  active_members_count: Scalars['Int'];
  branding: WorkspaceBranding;
  date_created: Scalars['Date'];
  date_updated?: Maybe<Scalars['Date']>;
  editor_mode: EditorMode;
  folders: WorkspaceFolders;
  invited_members_count: Scalars['Int'];
  members: Array<Scalars['UserID']>;
  name: Scalars['String'];
  new_editor_available: Scalars['Boolean'];
  organization: Scalars['OrganizationID'];
  owner: User;
  settings: WorkspaceSettings;
  features?: Maybe<Scalars['FixMe']>;
  subscription?: Maybe<Scalars['FixMe']>;
}

export interface WorkspaceBranding {
  button_background_color: Scalars['CssColor'];
  button_text_color: Scalars['CssColor'];
  custom_branding: Scalars['Boolean'];
  email_footer_text: Scalars['String'];
  email_subject_whitelabeled: Scalars['Boolean'];
  icon?: Maybe<Scalars['ImageUrl']>;
  icon_src: Scalars['ImageUrl'];
  main_logo: Scalars['ImageUrl'];
}


/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/events/constants.py#L64 */
export enum EditorMode {
  EV1 = 'EV1',
  EV2 = 'EV2',
  EV1_EV2 = 'EV1_EV2'
}

export interface WorkspaceFolders {
  documents: Scalars['FolderID'];
  library: Scalars['FolderID'];
  templates: Scalars['FolderID'];
  trash: Scalars['FolderID'];
}

export interface WorkspaceSettings {
  allow_join_by_domain: Scalars['Boolean'];
  allowed_clickable_links: Scalars['Boolean'];
  allowed_initials_draw: Scalars['Boolean'];
  allowed_initials_type: Scalars['Boolean'];
  allowed_signature_draw: Scalars['Boolean'];
  allowed_signature_type: Scalars['Boolean'];
  allowed_signature_upload: Scalars['Boolean'];
  currency_formats?: Maybe<Scalars['CurrencyFormatsJSON']>;
  date_created: Scalars['Date'];
  date_formats: Scalars['DateFormatsJSON'];
  date_updated: Scalars['Date'];
  default_currency: Scalars['Currencies'];
  default_date_format: DateFormats;
  default_theme: Scalars['ThemeID'];
  enable_signer_completion_dialog: Scalars['Boolean'];
  expiration: WorkspaceExpiration;
  language_ev1: Languages;
  language_ev2: Languages;
  reminders?: Maybe<WorkspaceReminders>;
  send_signed_pdf: Scalars['Boolean'];
}




/** http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/workspaces/enums.py */
export enum DateFormats {
  YYYY_MM_DD = 'YYYY-MM-DD',
  MM_DD_YYYY = 'MM-DD-YYYY',
  DD_MM_YYYY = 'DD-MM-YYYY',
  YYYYMMDD = 'YYYY / MM / DD',
  MMDDYYYY = 'MM / DD / YYYY',
  DDMMYYYY = 'DD / MM / YYYY',
  YYYY__MM__DD = 'YYYY.MM.DD',
  MM__DD__YYYY = 'MM.DD.YYYY',
  DD__MM__YYYY = 'DD.MM.YYYY',
  MMM_DD_YYYY = 'MMM DD, YYYY',
  DD_MMM_YYYY = 'DD MMM YYYY'
}


export interface WorkspaceExpiration {
  expires_at: Scalars['Int'];
  notification_enabled: Scalars['Boolean'];
  notification_interval: Scalars['Int'];
}

export interface WorkspaceReminders {
  first_enabled: Scalars['Int'];
  first_interval?: Maybe<Scalars['Int']>;
  repeat_enabled: Scalars['Int'];
  repeat_interval?: Maybe<Scalars['Int']>;
}
