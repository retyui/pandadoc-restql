import { AxiosInstance } from "axios";

const getExcludeProfileParams = (includeFields: Array<string> | undefined) => {
  if (!Array.isArray(includeFields)) {
    return "";
  }

  const allFields = [
    "signature",
    "iid",
    "currency_formats",
    "id",
    "email",
    "first_name",
    "last_name",
    "avatar",
    "signup_source",
    "phone_number",
    "is_suspended",
    "workspace",
    "actor",
    "email_verified",
    "date_joined",
    "signup_backend",
    "company_name",
    "account_type",
    "company_size",
    "date_registered",
    "is_organization_owner",
    "org_date_created",
    "is_organization_admin",
    "license",
  ];

  const excludeFields = allFields.filter(
    (fieldName) => !includeFields.includes(fieldName)
  );

  if (excludeFields.length === 0) {
    return "";
  }

  return `?exclude=${excludeFields.join(",")}`;
};

export const getProfile = (
  axios: AxiosInstance,
  { includeFields }: { includeFields: Array<string> | undefined }
) =>
  axios
    .get(`/profile${getExcludeProfileParams(includeFields)}`)
    .then((res) => res?.data)
    .then((profile) => {
      if (profile.date_registered) {
        profile.date_registered = new Date(profile.date_registered);
      }
      if (profile.date_joined) {
        profile.date_joined = new Date(profile.date_joined);
      }
      if (profile.org_date_created) {
        profile.org_date_created = new Date(profile.org_date_created);
      }

      return profile;
    });
