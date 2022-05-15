import React, { useLayoutEffect, useState } from "react";
import {appData} from "../Data";

const LangContext = React.createContext({
   lang: '',
   currentLangData: {},
   switchLang: () => {}
});

export default LangContext;

export function LangProvider(props) {
    const languageKey = 'appUILang';

    const selectInitialState = () => {
        if (languageKey in window.localStorage)
            return window.localStorage.getItem(languageKey);

        let lang = window.navigator.language.substring(0, 2);
        if (lang !== 'en' || lang !== 'es')
            lang = 'en';

        window.localStorage.setItem(languageKey, lang);
        return lang;
    };

    const [lang, setLang] =  useState(selectInitialState());

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem(languageKey);
        if (selectedLang)
            setLang(selectedLang);
    }, [lang]);

    const switchLang = ln => {
        setLang(ln);
        window.localStorage.setItem(languageKey, ln);
    };

    return (
        <LangContext.Provider value={{
            lang,
            switchLang,
            currentLangData: appData[lang]
        }}>
            {props.children}
        </LangContext.Provider>
    );
}