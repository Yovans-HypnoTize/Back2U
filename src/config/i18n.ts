import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./locales.json"

i18n.use(initReactI18next)
.init({
    resources:{
        en:{ translation:translation.en },
        pt:{ translation:translation.pt },
        es:{ translation:translation.es },
        fr:{ translation:translation.fr },
    },
    lng:"en", //Default lang
    fallbackLng:"en",
    debug: true, 
    // interpolation: {
    //     escapeValue: false // react already safes from xss
    // }
})

export default i18n;