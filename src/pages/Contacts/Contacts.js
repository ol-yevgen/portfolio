import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useLetterizeText, useStartTextAnimation } from '../../hooks/useLetterizeText';
import { useSendingAlertMessage, useSentAlertMessage, useNotSentAlertMessage, useErrorAlertMessage } from '../../hooks/useFormAlertMessage';
import { useSectionText } from '../../hooks/useSectionText';

import ContactsForm from '../../components/form/Form';
import { contactsTextData } from '../../data/textData';

const Contacts = () => {
    const sendingMessageStatus = useSelector((state) => state.form.messageSending);
    const sentMessageStatus = useSelector((state) => state.form.messageSent);
    const submitFormStatus = useSelector((state) => state.form.submitClickStatus);
    const errorFormStatus = useSelector((state) => state.form.errorStatus);

    const spelling = useLetterizeText("Contacts");
    const { pageLoaded, textRef, scope } = useStartTextAnimation();
    const skillsText = useSectionText(contactsTextData);

    const alertSendingForm = useSendingAlertMessage(sendingMessageStatus);
    const alertRequiredForm = useSentAlertMessage(sentMessageStatus, errorFormStatus);
    const alertNotRequiredForm = useNotSentAlertMessage(submitFormStatus, sendingMessageStatus, errorFormStatus, sentMessageStatus);
    const alertErrorForm = useErrorAlertMessage(errorFormStatus);

    return (
        <section
            className="container section-wrapper contacts">
            <div className="section-wrapper--discription">
                <div
                    className={pageLoaded ? 'show' : 'hide'}
                    ref={textRef}
                >
                    <AnimatePresence>
                        <h2
                            className="discription-title" aria-label="Contacts"
                            ref={scope}
                        >
                            {spelling}
                        </h2>
                    </AnimatePresence>
                </div>
                <div className="text tag-p">
                    {skillsText}
                </div>
                <ContactsForm />
            </div>
            <div className="section-wrapper--visual">

            </div>
            <AnimatePresence>
                <div className="alerts" >
                    {alertSendingForm}
                    {alertRequiredForm}
                    {alertNotRequiredForm}
                    {alertErrorForm}
                </div>
            </AnimatePresence>
        </section >
    )
}

export default Contacts;