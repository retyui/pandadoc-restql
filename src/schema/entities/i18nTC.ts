import { schemaComposer } from "graphql-compose";

// http://gitlab.pandadoc.com/product/web-app/-/blob/master/packages/appjs-main/scripts/_react/app-constants/Constants.js#L1310
export const LanguagesTC = schemaComposer.createEnumTC({
  name: "Languages",
  values: {
    EN: { value: "en-US" },
    FR: { value: "fr-FR" },
    IT: { value: "it-IT" },
    ES: { value: "es-ES" },
    NL: { value: "nl-NL" },
    DE: { value: "de-DE" },
    PT: { value: "pt-BR" },
  },
});
