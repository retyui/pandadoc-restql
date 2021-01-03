export const parseFolder = (folder: any) => {
  if (folder.date_created) {
    folder.date_created = new Date(folder.date_created);
  }
  if (folder.date_modified) {
    folder.date_modified = new Date(folder.date_modified);
  }

  return folder;
};
