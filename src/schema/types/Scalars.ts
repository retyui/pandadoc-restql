import { schemaComposer } from "graphql-compose";

export const OrganizationID = schemaComposer.createScalarTC(`
  scalar OrganizationID
`);

export const WorkspaceID = schemaComposer.createScalarTC(`
  scalar WorkspaceID
`);

export const UserID = schemaComposer.createScalarTC(`
  scalar UserID
`);

export const FolderID = schemaComposer.createScalarTC(`
  scalar FolderID
`);

export const DocumentID = schemaComposer.createScalarTC(`
  scalar DocumentID
`);
