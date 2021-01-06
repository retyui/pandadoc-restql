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

export const getExcludeProfileParams = (
  includeFields: Array<string> | undefined
) => {
  if (!Array.isArray(includeFields)) {
    return null;
  }

  const excludeFields = allFields.filter(
    (fieldName) => !includeFields.includes(fieldName)
  );

  if (excludeFields.length > 0) {
    // @ts-ignore
    return new URLSearchParams({
      exclude: excludeFields,
    });
  }

  return null;
};
