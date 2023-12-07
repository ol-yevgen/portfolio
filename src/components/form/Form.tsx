'use client'

import MotionContainer from '../ui/MotionContainer/MotionContainer';
import { successToast, errorToast, infoToast } from '@/libs/toast';
import { validationSchema } from '@/helpers/validationSchema';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { IFormDataTypes } from '@/types/types';
import { useEffect, useState } from 'react';
import TextArea from '../ui/Input/TextArea';
import { Formik, Form } from 'formik';
import Input from '../ui/Input/Input';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './form.scss'

const cleanForm = (values: IFormDataTypes) => {
    const cleanName = values.name = '';
    const cleanSubject = values.subject = '';
    const cleanEmail = values.email = '';
    const cleanMessage = values.message = '';

    return { cleanName, cleanSubject, cleanEmail, cleanMessage }
}

const ContactsForm = () => {

    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const { data, isSuccess, isError, isPending, error, mutateAsync } = useMutation({
        mutationKey: ['formData'],
        mutationFn: async (formData: IFormDataTypes) => {
            try {
                const data = await axios.post('https://formsubmit.co/ajax/oliinykyevgenii@gmail.com', formData)
                return data
            } catch (error) { }
        },
    })

    useEffect(() => {
        if (isSuccess) {
            successToast('Your message has been sent')
        }

        if (isError) {
            errorToast('Something went wrong, please try again')
        }

        if (isPending) {
            infoToast('Sending...')
        }

        if (isSubmit) {
            errorToast('Please fill up all required fields')
            setIsSubmit(false)
        }

    }, [isError, isSuccess, isPending, isSubmit])

    const onSubmitHandler = async (values: IFormDataTypes) => {
        if (values.email === '' && values.name === '' && values.subject === '' && values.message === '') {
            setIsSubmit(true)
        }

        const newForm = {
            id: uuidv4(),
            name: values.name,
            subject: values.subject,
            email: values.email,
            message: values.message,
        } as IFormDataTypes

        try {
            await mutateAsync(newForm);
            cleanForm(values)
        } catch (error) {
            console.error('Submission error:', error);
        }
    }

    return (
        <Formik
            initialValues={{
                name: '',
                subject: '',
                email: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => onSubmitHandler(values as IFormDataTypes)}
        >
            {({ isValid }) => (
                <Form
                    action='https://formsubmit.co/ajax/oliinykyevgenii@gmail.com'
                    name='form'
                    method='POST'
                    className="form"
                    autoComplete='off'
                >
                    <div className='form-item--half'>
                        <MotionContainer initial={{ y: 40 }} delay={1} duration={1} >
                            <Input
                                id='name'
                                name='name'
                                type='text'
                                className='form-item '
                                placeholder='Name'
                                autoComplete='off'
                            />
                        </MotionContainer >
                    </div>

                    <div className='form-item--half'>
                        <MotionContainer initial={{ y: 40 }} delay={1.1} duration={1} >
                            <Input
                                id='subject'
                                name='subject'
                                type='text'
                                className='form-item'
                                placeholder='Subject'
                                autoComplete='off'
                            />
                        </MotionContainer >
                    </div>

                    <div className='form-item--full'>
                        <MotionContainer initial={{ y: 40 }} delay={2} duration={1} >
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                className='form-item'
                                placeholder='Email'
                                autoComplete='off'
                            />
                        </MotionContainer >
                    </div>

                    <div className='form-item--full'>
                        <MotionContainer initial={{ y: 40 }} delay={3} duration={1} >
                            <TextArea
                                id='text'
                                name='message'
                                placeholder='Message'
                                className='form-item '
                                autoComplete='off'
                            />
                        </MotionContainer >
                    </div>

                    <div className='form-submit'>
                        <MotionContainer initial={{ y: 40 }} delay={4} duration={1} >
                            <button
                                type="submit"
                                className="btn form-btn"
                                style={{ zIndex: 1 }}
                                onClick={() => !isValid && setIsSubmit(true)}
                            >
                                Send message
                            </button>
                        </MotionContainer >
                    </div>

                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='dark'
                    />
                </Form>
            )}
        </Formik >
    )
}

export default ContactsForm;
