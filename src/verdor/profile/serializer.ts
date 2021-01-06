export const parseProfile = (profile: any) => {
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
};
