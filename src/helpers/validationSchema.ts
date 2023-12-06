import * as Yup from 'yup';

export const validationSchema = Yup.object({
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
})