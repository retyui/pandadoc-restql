import { parseFolder } from "../folder/serializer";
import { castDateFields } from "../../utils/castDateFields";

const parseRecipients = (recipients: Array<any>) =>
  recipients.map((recipient) => castDateFields(recipient, ["date_created"]));

export const parseDocument = (doc: any) => {
  if (doc.recipients) {
    doc.recipients = parseRecipients(doc.recipients);
  }

  if (doc.folder) {
    doc.folder = parseFolder(doc.folder);
  }

  return castDateFields(doc, [
    "date_completed",
    "date_created",
    "date_declined",
    "date_expiration",
    "date_modified",
    "date_sent",
    "date_status_changed",
  ]);
};
