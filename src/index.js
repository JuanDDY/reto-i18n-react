import  React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function App() {
    const [locale, setLocale] = useState("es-ES");
    const [messages, setMessages] = useState(localeEsMessages);
  
    useEffect(() => {
      const browserLanguage = navigator.language;
  
      if (browserLanguage.startsWith("es")) {
        setLocale("es-ES");
        setMessages(localeEsMessages);
      } else {
        setLocale("en-US");
        setMessages(localeEnMessages);
      }
    }, []);
  
    return (
      <IntlProvider locale={locale} messages={messages}>
        <JobsList />
      </IntlProvider>
    );
}


ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);