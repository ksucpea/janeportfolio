import { ReactComponent as Instagram } from "../instagram.svg";
import { ReactComponent as Mail } from "../mail.svg";
import { ReactComponent as Linkedin } from "../linkedin.svg";
import { ReactComponent as Phone } from "../phone.svg";
import ContactMethod from "./ContactMethod";

const Contact = () => {

    return (
        <>
            <div>
                <ContactMethod Icon={Mail} handle="jparkk215@gmail.com" />
                <ContactMethod Icon={Phone} handle="(410) 971-3838" />
            </div>
        </>
    )
}

export default Contact;