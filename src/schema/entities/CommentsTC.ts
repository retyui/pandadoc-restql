import { schemaComposer } from "graphql-compose";
import {
  DocumentID,
  Email,
  FIXME,
  ImageUrl,
  UserID,
  UUID,
} from "../types/Scalars";

export const CommentOrderTC = schemaComposer.createEnumTC({
  name: "CommentOrder",
  description: `http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L59`,
  values: {
    DATE_CREATED: { value: "date_created" },
    DATE_CREATED_DESC: { value: "-date_created" },
    DATE_UPDATED: { value: "date_updated" },
    DATE_UPDATED_DESC: { value: "-date_updated" },
  },
});

export const CommentPlacementTypeTC = schemaComposer.createEnumTC({
  name: "CommentPlacementType",
  description: `http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L52`,
  values: {
    DOCUMENT: { value: 1 },
    BLOCK: { value: 2 },
    INLINE_COMMENT: { value: 3 },
  },
});

export const CommentStatusTC = schemaComposer.createEnumTC({
  name: "CommentStatus",
  description: `http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L45`,
  values: {
    RESOLVED: { value: 0 },
    ACTIVE: { value: 1 },
  },
});

export const CommentAccessTypeTC = schemaComposer.createEnumTC({
  name: "CommentAccessType",
  description: `http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L7`,
  values: {
    PUBLIC: { value: 0 },
    INTERNAL: { value: 1 },
  },
});

export const CommentUserTC = schemaComposer.createObjectTC({
  name: "CommentUser",
  fields: {
    id: UserID.NonNull,
    email: Email.NonNull,
    avatar: ImageUrl,
    first_name: "String",
    last_name: "String",
  },
});

// FIXME: mentions = serializers.ListField(child=MentionUser(allow_null=True))
export const CommentMentionsTC = FIXME;

export const CommentReplyTC = schemaComposer.createObjectTC({
  name: "CommentReply",
  fields: {
    uuid: UUID.NonNull,
    date_created: "Date!",
    date_updated: "Date",
    mentions: CommentMentionsTC,
    text: "String!",
    user: CommentUserTC.NonNull,
  },
});

export const CommentTC = schemaComposer.createObjectTC({
  name: "Comment",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/serializers.py#L201`,
  fields: {
    uuid: UUID.NonNull,
    access: CommentAccessTypeTC.NonNull,
    anchor_uuid: UUID,
    date_created: "Date!",
    date_updated: "Date",
    document_id: DocumentID.NonNull,
    mentions: CommentMentionsTC,
    placement_type: CommentPlacementTypeTC.NonNull,
    replies: CommentReplyTC.NonNull.List,
    status: CommentStatusTC.NonNull,
    status_updated_by: CommentUserTC,
    text: "String!",
    user: CommentUserTC.NonNull,
  },
});
