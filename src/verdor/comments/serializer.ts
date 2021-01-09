import { castDateFields } from "../../utils/castDateFields";

export const parseComment = (comment: any) => {
  if (Array.isArray(comment.replies)) {
    comment.replies = comment.replies.map((
      // @ts-ignore
      reply
    ) => castDateFields(reply, ["date_created", "date_updated"]));
  }

  return castDateFields(comment, ["date_created", "date_updated"]);
};
