import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const [state, handleSubmit] = useForm("xleyrlqo");
    if (state.succeeded) {
        return <p className="contact-page" id="response">Thanks for joining!</p>;
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div className="contact-page">
            <p className="content is-medium">Contact Page </p>
            <hr />
            <form onSubmit={handleSubmit} className="contact">
                <label htmlFor="name">
                    Your Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onBlur={handleChange}
                    defaultValue={message}
                />

                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleChange}
                    defaultValue={message}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor="name">
                    Your Message
                </label>

                <textarea
                    id="message"
                    name="message"
                    onBlur={handleChange}
                    defaultValue={message}
                    rows="4"
                    cols="50"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                {errorMessage && (
                    <div>
                        <p className="danger">{errorMessage}</p>
                    </div>
                )}

                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;