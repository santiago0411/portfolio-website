import React, { useRef } from "react";
import './Contact.css';
import emailjs from "@emailjs/browser";
import { Button } from "./Button";
import { emailJsPublicKey } from '../constants/private';

export const Contact = (langData) => {
    const form = useRef();

    const checkIsObjOrArray = obj => typeof obj === 'object' || Array.isArray(obj);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("PortfolioWebsite", "template_8ydc8tb", form.current, emailJsPublicKey)
            .then(result => {
                if (result.status === 200) {
                    alert(langData.SentOK);
                }
                else {
                    alert(langData.SentError);
                    console.error(checkIsObjOrArray(result) ? JSON.stringify(result) : result);
                }

            }, error => {
                alert(langData.SentError)
                console.error(checkIsObjOrArray(error) ? JSON.stringify(error) : error);
            });
    }

    return (
        <section className="contact">
            <p className="contact-heading">
                {langData.TopLine}
            </p>
            <div className="col input-areas">
                <form ref={form} onSubmit={sendEmail}>
                    <label>{langData.LblName}</label>
                    <input className="contact-input" name="from_name" type="text" placeholder={langData.NameInputPh}/>
                    <label>{langData.LblEmail}</label>
                    <input className="contact-input" name="from_email" type="text" placeholder={langData.EmailInputPh}/>
                    <label>{langData.LblMessage}</label>
                    <textarea className="contact-input message-box" name="message" rows="3"/>
                    <Button value="Send" buttonStyle="btn--outline" buttonId="btnContact" buttonType="submit" buttonValue="Send">
                        {langData.LblButton}
                    </Button>
                </form>
            </div>
        </section>
    );
};