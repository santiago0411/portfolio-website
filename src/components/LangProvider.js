import React, { useLayoutEffect, useState } from "react";
import {appData} from "./pages/HomePage/Data";

const LangContext = React.createContext({
   lang: '',
   currentLangData: {},
   switchLang: () => {}
});

export default LangContext;

export function LangProvider(props) {
    const languageKey = 'appUILang';

    const [lang, setLang] =  useState(window.localStorage.getItem(languageKey) || window.navigator.language);

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem(languageKey);
        if (selectedLang)
            setLang(selectedLang);
    }, [lang]);

    const switchLang = ln => {
        switch (ln) {
            case 'en-US':
            case 'es-ES':
                setLang(ln);
                break;
            default:
                setLang('en-US');
        }
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