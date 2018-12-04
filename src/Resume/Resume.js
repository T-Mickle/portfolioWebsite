

import React from 'react';

import { Document, Page } from 'react-pdf/dist/entry.noworker';




import pdf from '../Assets/PDF/Timothy_Mickle_Resume.pdf'


const Resume = () => {
    let pdfWidth = window.innerWidth*.60;
    if (window.innerWidth < 500) {
        pdfWidth = window.innerWidth * .70;
    }

    return (

        <div className='resume '>
            <h1 className='resume__title modalContainer__mainHeader primaryText'>Resume Section</h1>
            <a  className='resume__downloadLink primaryText' href={pdf}
            download="Timothy_Mickle_Resume">Download Resume</a>
            <Document file={pdf} > 
            <Page pageNumber={1} width={pdfWidth} className={'PDF'}/>
            </Document>
           
        </div>

    )
}


export default Resume;