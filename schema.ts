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
  UserID: any;
  DocumentID: any;
  OrganizationID: any;
  WorkspaceID: any;
  FolderID: any;
  Date: any;
}

/** for PandaDoc with ❤️ */
export interface Query {
  __typename?: 'Query';
  /** Request URL: https://api.pandadoc.com/contacts/<contactId> */
  contact?: Maybe<Contact>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/ */
  document?: Maybe<Document>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/info */
  documentInfo?: Maybe<DocumentInfo>;
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
  /** Request URL: https://api.pandadoc.com/profile */
  profile?: Maybe<Profile>;
  /** Request URL: https://api.pandadoc.com/properties */
  properties?: Maybe<Properties>;
  /** Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/ */
  workspace?: Maybe<Workspace>;
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
export interface QueryFolderArgs {
  id: Scalars['FolderID'];
}


/** for PandaDoc with ❤️ */
export interface QueryFolderTreeArgs {
  id: Scalars['FolderID'];
}


/** for PandaDoc with ❤️ */
export interface QueryWorkspaceArgs {
  workspaceId: Scalars['WorkspaceID'];
  organizationId: Scalars['OrganizationID'];
}

export interface Contact {
  __typename?: 'Contact';
  id: Scalars['UserID'];
  email: Scalars['String'];
  is_internal: Scalars['Boolean'];
  removed: Scalars['Boolean'];
  /** Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg') */
  avatar?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}


export interface Document {
  __typename?: 'Document';
  id: Scalars['DocumentID'];
  name: Scalars['String'];
  status: DocumentStatus;
  type: DocumentType;
  version: Scalars['Int'];
  organization: Scalars['OrganizationID'];
  workspace: Scalars['WorkspaceID'];
  owner: User;
  folder: Folder;
  removed: Scalars['Boolean'];
  revision_number: Scalars['Int'];
  sample: Scalars['Boolean'];
  silent: Scalars['Boolean'];
}


export enum DocumentStatus {
  DRAFT = 0,
  SENT = 1,
  COMPLETED = 2,
  VIEWED = 5,
  WAITING_APPROVAL = 6,
  APPROVED = 7,
  REJECTED = 8,
  WAITING_FOR_PAYMENT = 9,
  PAID = 10,
  EXPIRED = 11,
  DECLINED = 12,
  UNDEFINED = -1
}

export enum DocumentType {
  DOCUMENT = 0,
  TEMPLATE = 1,
  EDITABLE_DOCUMENT = 2,
  EDITABLE_TEMPLATE = 3,
  LIBRARY_ITEM = 4
}



export interface User {
  __typename?: 'User';
  id: Scalars['UserID'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  phone_number: Scalars['String'];
  /** Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg') */
  avatar?: Maybe<Scalars['String']>;
  iid: Scalars['Int'];
  /** Checks whether that user has no active workspace */
  is_suspended: Scalars['Boolean'];
  /** (example: "login") */
  signup_source: Scalars['String'];
}

export interface Folder {
  __typename?: 'Folder';
  id: Scalars['FolderID'];
  name: Scalars['String'];
  date_created: Scalars['Date'];
  date_modified: Scalars['Date'];
  owner: User;
  modified_by: User;
  parent?: Maybe<Scalars['FolderID']>;
  workspace: Scalars['WorkspaceID'];
  /** No idea what is it! */
  type: Scalars['Int'];
  /**
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
  tree: Array<Folder>;
}



export interface DocumentInfo {
  __typename?: 'DocumentInfo';
  id: Scalars['DocumentID'];
  status: DocumentStatus;
  type: DocumentType;
  version: Scalars['Int'];
  owner: DocumentInfoOwner;
}

export interface DocumentInfoOwner {
  __typename?: 'DocumentInfoOwner';
  id?: Maybe<Scalars['UserID']>;
}

export interface Profile {
  __typename?: 'Profile';
  id: Scalars['String'];
  iid: Scalars['Int'];
  signature?: Maybe<Signature>;
  /** Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg') */
  avatar?: Maybe<Scalars['String']>;
  /** e-mail address 'test@example.com' */
  email: Scalars['String'];
  /** Checks whether that user has no active workspace */
  is_suspended: Scalars['Boolean'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  /** Any phone number no restrictions (example: "0", "14845101364") */
  phone_number: Scalars['String'];
  /** (example: "login") */
  signup_source: Scalars['String'];
  /** @deprecated Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736) */
  company_name?: Maybe<Scalars['String']>;
  /** @deprecated Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736) */
  company_size?: Maybe<CompanySize>;
  is_organization_owner: Scalars['Boolean'];
  is_organization_admin: Scalars['Boolean'];
  email_verified: Scalars['Boolean'];
  date_registered: Scalars['Date'];
  date_joined: Scalars['Date'];
  org_date_created?: Maybe<Scalars['Date']>;
  /** (example: "Full") */
  license: Scalars['String'];
  workspace: Scalars['WorkspaceID'];
  /** TODO: Not sure that is UserID */
  actor: Scalars['UserID'];
}

export interface Signature {
  __typename?: 'Signature';
  /** Encode image data */
  data: Scalars['String'];
  /** Image format (example: "image/png;base64") */
  dataFormat: Scalars['String'];
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

/** Request URL: https://api.pandadoc.com/properties */
export interface Properties {
  __typename?: 'Properties';
  user?: Maybe<UserProperties>;
  organization?: Maybe<OrganizationProperties>;
}

export interface UserProperties {
  __typename?: 'UserProperties';
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
  __typename?: 'OrganizationProperties';
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

export interface Workspace {
  __typename?: 'Workspace';
  id: Scalars['WorkspaceID'];
  organization: Scalars['OrganizationID'];
  owner: User;
  date_created: Scalars['Date'];
  date_updated?: Maybe<Scalars['Date']>;
  editor_mode: EditorMode;
  active_members_count: Scalars['Int'];
  invited_members_count: Scalars['Int'];
  new_editor_available: Scalars['Boolean'];
  name: Scalars['String'];
  features: Array<Scalars['Int']>;
  members: Array<Scalars['UserID']>;
}

export enum EditorMode {
  EV1 = 'EV1',
  EV2 = 'EV2',
  EV1_EV2 = 'EV1_EV2'
}
