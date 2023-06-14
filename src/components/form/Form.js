import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import { useValidate } from '../../hooks/useValidate';
import { formCreated, isMessageSending, isMessageSent, isSubmitClickStatus, isErrorStatus } from '../../redux/features/slices/formSlice';

import './form.scss'

const MyInput = ({ ...props }) => {
    const inputValidation = useValidate("input", { ...props })

    return (
        <>
            {inputValidation()}
        </>
    )
}

const MyInputTextArea = ({ ...props }) => {
    const inputValidation = useValidate("textarea", { ...props })

    return (
        <>
            {inputValidation()}
        </>
    )
}

const postData = async (url, data, values, dispatch) => {
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            response.json()
            if (response.ok) {
                console.log('response is OK');
                dispatch(formCreated(data))
                dispatch(isMessageSending())
                dispatch(isMessageSent())
            } else {
                dispatch(isMessageSending())
                dispatch(isErrorStatus())
            }
        })
        .then(() => cleanForm(values))
        .catch(error => console.log(error));
}

const cleanForm = (values) => {
    const cleanName = values.name = '';
    const cleanSubject = values.subject = '';
    const cleanEmail = values.email = '';
    const cleanMessage = values.message = '';

    return { cleanName, cleanSubject, cleanEmail, cleanMessage }
}

const ContactsForm = () => {
    const dispatch = useDispatch()

    const onSubmitHandler = (values) => {
        const newForm = {
            id: uuidv4(),
            name: values.name,
            subject: values.subject,
            email: values.email,
            message: values.message,
        }

        dispatch(isSubmitClickStatus())
        dispatch(isMessageSending())

        postData("https://formsubmit.co/ajax/oliinykyevgenii@gmail.com", newForm, values, dispatch)
    }

    return (
        <Formik
            initialValues={{
                name: '',
                subject: '',
                email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2)
                    .required(),
                subject: Yup.string()
                    .required()
                    .min(3),
                email: Yup.string()
                    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    .required(),
                message: Yup.string()
                    .min(5)
                    .required()
            })}
            onSubmit={values => onSubmitHandler(values)}
        >
            <Form
                action='https://formsubmit.co/ajax/oliinykyevgenii@gmail.com'
                name='form'
                method='post'
                className="form"
                autoComplete='off'>
                <MyInput
                    id='name'
                    name='name'
                    type='text'
                    className='form-item--half'
                    placeholder='Name'
                    autoComplete='off'
                />
                <MyInput
                    id='subject'
                    name='subject'
                    type='text'
                    className='form-item--half'
                    placeholder='Subject'
                    autoComplete='off'
                />
                <MyInput
                    id='email'
                    name='email'
                    type='email'
                    className='form-item--email'
                    placeholder='Email'
                    autoComplete='off'
                />
                <MyInputTextArea
                    id='text'
                    name='message'
                    placeholder='Message'
                    className='form-item--message'
                    autoComplete='off'
                />
                <button
                    type="submit"
                    className="btn form-btn"
                    onClick={() => dispatch(isSubmitClickStatus())}
                >
                    Send message
                </button>
            </Form>
        </Formik>
    )
}

export default ContactsForm;


// const emailValidationPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const phoneNumberPatternUkrain = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;