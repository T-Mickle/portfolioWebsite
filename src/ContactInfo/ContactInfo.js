
import React from 'react';

const ContactInfo = () => {
    return (

        <div className='contact'>
            <h1  className='contact__title modalContainer__mainHeader primaryText'>Contact Information</h1>
            <div >
                <p className='contact__text'>Reach me at any of these fine establishmets.</p>
                <p><a className='contact__links' href="mailto:timothyrmickle@gmail.com">
                    timothyrmickle@gmail.com</a></p>
                <p><a className='contact__links' href="https://twitter.com/TheDietLogos?lang=en"
                    target="_blank" rel="noopener noreferrer">Twitter</a></p>
                <p><a className='contact__links'  href="https://www.linkedin.com/in/timothymickle/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                <p><a className='contact__links'  href="https://www.github.com/T-Mickle" target="_blank" rel="noopener noreferrer"> github</a></p>


            </div>
        </div>

    )
}


export default ContactInfo;