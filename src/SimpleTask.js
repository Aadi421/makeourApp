import React from 'react';
import { Button, Alert, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SimpleTask extends React.Component {
    render() {
        const { heading, iconImage, description } = this.props.simpleTask;
        return ( <
            div className = "task-item"
            style = { styles.taskItem } >


            <
            div className = "left-block" >
            <
            img src = "{image}"
            alt = "EditPdf Image" / > <
            /div> <
            div className = "right-block" >
            <
            div style = { styles.heading } > { heading } < /div> <
            div style = { styles.description } > { description } < /div>


            <
            /div>


            <
            /div>
        )
    }
}

// style done by using object in jsx

const styles = {
    taskItem: {
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

export default SimpleTask;