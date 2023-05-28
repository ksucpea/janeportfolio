const ContactMethod = ({ Icon, handle }) => {

    return (
        <div className="contact-method">
            <Icon />
            <span>{handle}</span>
        </div>
    )
}

export default ContactMethod;