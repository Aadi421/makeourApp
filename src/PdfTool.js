import React from 'react';

class PdfTool extends React.Component {
    render() {

        const { heading, description } = this.props.product
        return ( <
            div className = "pdf-item"
            style = { styles.pdfItem } >


            <
            div className = "left-block" >
            <
            img / >
            <
            /div> <
            div className = "right1-block" >
            <
            div style = { styles.heading } > { heading } < /div> <
            div style = { styles.description } > { description } < /div>


            <
            /div> <
            div className = "right2-block" >
            &
            lt; <
            /div>

            <
            /div>
        )
    }
}

// style done by using object in jsx

const styles = {
    pdfItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    heading: {
        fontSize: '.9rem',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '.8rem',

    }
}

export default PdfTool;