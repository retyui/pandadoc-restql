import { schemaComposer } from "graphql-compose";

export const BookDemoStatesTC = schemaComposer.createEnumTC({
  name: "BookDemoStates",
  values: {
    NOT_SET: { value: "NOT_SET" },
    PANEL_ACTIVE: { value: "PANEL_ACTIVE" },
    PANEL_HIDDEN: { value: "PANEL_HIDDEN" },
    USED: { value: "USED" },
  },
});

export const WorkspacePropertiesTC = schemaComposer.createObjectTC({
  name: "WorkspaceProperties",
  fields: {},
});

export const CRMTypesTC = schemaComposer.createEnumTC({
  name: "CrmTypes",
  values: {
    SALESFORCE: { value: "Salesforce" },
    SUGAR: { value: "Sugar" },
    MICROSOFT_DYNAMICS: { value: "Microsoft Dynamics" },
    FRESHSALES_CRM: { value: "Freshsales CRM" },
    NUTSHELL: { value: "Nutshell" },
    BASE: { value: "Base" },
    HUBSPOT_CRM: { value: "HubSpot CRM" },
    PIPEDRIVE: { value: "Pipedrive" },
    ZOHO: { value: "Zoho" },
    PROSPER_WORKS: { value: "ProsperWorks" },
    INSIGHTLY: { value: "Insightly" },
    OTHER: { value: "Other" },
    STILL_LOOKING_FOR_CRM: { value: "Still looking for a CRM" },
    DO_NOT_HAVE_CRM: { value: "Don\\'t have a CRM" },
  },
});

export const CompanySizeTC = schemaComposer.createEnumTC({
  name: "CompanySize",
  values: {
    Solo: { value: "1" },
    FROM_2_TO_10: { value: "2-10" },
    FROM_11_TO_50: { value: "11-50" },
    FROM_51_TO_200: { value: "51-200" },
    FROM_201_TO_500: { value: "201-500" },
    FROM_501_TO_1000: { value: "501-1000" },
    FROM_1001_AND_MORE: { value: "1001+" },
  },
});

export const OrganizationPropertiesTC = schemaComposer.createObjectTC({
  name: "OrganizationProperties",
  fields: {
    // FIXME: Error: Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "lead-ready" does not.
    // "lead-ready": { type: "String!" },
    job_role: { type: "String!" },
    company_name: { type: "String!" },
    company_size: { type: CompanySizeTC.NonNull },
    industry: { type: "String!" },
    crm: { type: CRMTypesTC.NonNull },
    what_brought_you_to_pandadoc: { type: "String!" },
    phone: { type: "String!" },
    google_analytics_client_id: { type: "String!" },
    device: { type: "String!" },
    a_b_test_info: { type: "String!" },
    country_ab: { type: "String!" },
    hubspot_form_guid: { type: "String!" },
    sfdc_campaign_id: { type: "String!" },
    hs_analytics_first_url: { type: "String!" },
  },
});

export const UserPropertiesTC = schemaComposer.createObjectTC({
  name: "UserProperties",
  fields: {
    proactive_chat_billing_last_time_triggered: {
      type: "String!",
      description: "Unix timestamp (example: '1588852018197')",
    },
    book_a_demo_state: {
      type: BookDemoStatesTC.NonNull,
      description: "User booking a product demo status",
    },
    new_onboarding_shown_times: {
      type: "String!",
      description: "Number of onboarding dialog shows (example: '0', '1')",
    },
    raw_timezone: {
      type: "String!",
      description: "TimeZone offset (example: Europe/Minsk)",
    },
    timezone: {
      type: "String!",
      description: "Number timezone offset (example: +03)",
    },
    city: {
      type: "String!",
      description: "(example: Minsk)",
    },
    region: {
      type: "String!",
      description: "Country region (example: Minsk City)",
    },
    country: {
      type: "String!",
      description: "Full country name (example: Belarus, Poland...)",
    },
    country_code: {
      type: "String!",
      description: "Short country code (example: US, BY, Pl...)",
    },
  },
});

export const PropertiesTC = schemaComposer.createObjectTC({
  name: "Properties",
  description: "Request URL: https://api.pandadoc.com/properties",
  fields: {
    user: UserPropertiesTC,
    organization: OrganizationPropertiesTC,
    // workspace: WorkspacePropertiesTC,
  },
});
