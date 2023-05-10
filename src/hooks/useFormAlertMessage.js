import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion, } from 'framer-motion';

import { isMessageSent, isSubmitClickStatus, isErrorStatus } from '../redux/features/slices/formSlice'

const container = {
    hidden: { opacity: 0, x: '150%', transition: { type: 'spring', duration: 0.5 } },
    show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.5 } }
}

export const useSendingAlertMessage = (messageSending) => {

    if (messageSending) {
        return <>
            <motion.div
                className="alert alert-sending"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                Your message is sending
            </motion.div>
        </>
    }
}

export const useSentAlertMessage = (messageSent, errorStatus) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (messageSent) {
            const interval = setTimeout(() => {
                dispatch(isMessageSent())
            }, 4000)
            return (() => clearTimeout(interval))
        }
    }, [dispatch, messageSent])

    if (messageSent && errorStatus === false) {
        return <>
            <motion.div
                className="alert alert-required"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                Your message has been sent
            </motion.div>
        </>
    }
}

export const useNotSentAlertMessage = (submitStatus, messageSending, errorStatus, messageSent) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (submitStatus) {
            const interval = setTimeout(() => {
                dispatch(isSubmitClickStatus())
            }, 3000)
            return (() => clearTimeout(interval))
        }
    }, [dispatch, submitStatus])

    if (submitStatus && messageSending === false && errorStatus === false && messageSent === false) {
        return <>
            <motion.div
                className="alert alert-notrequired "
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                Please fill up all required fields
            </motion.div>
        </>
    }

}

export const useErrorAlertMessage = (errorStatus) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorStatus) {
            const interval = setTimeout(() => {
                dispatch(isErrorStatus())
            }, 3000)
            return (() => clearTimeout(interval))
        }
    }, [dispatch, errorStatus])

    if (errorStatus) {
        return <>
            <motion.div
                className="alert alert-notrequired "
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                Something went wrong, please try again
            </motion.div>
        </>
    }

}
