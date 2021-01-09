import { schemaComposer } from "graphql-compose";

// curl 'https://api.pandadoc.com/conf/localizations'
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
    PL: { value: "pl-PL" },
    SK: { value: "sk-SK" },
  },
});
