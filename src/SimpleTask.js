import React from 'react';



class SimpleTask extends React.Component {
    render() {
        const { heading,description,img,link} = this.props.simpleTask
        return ( 
            <div className = "task-item" style = { styles.taskItem } >


            <div className = "left-block" >
            <img  src={img} alt="editImage" style={{width:''}}/> 
            </div> 
            
            <div className = "right-block" >
            <div style = { styles.heading } > { heading } < /div> <br/>
            <div style = { styles.description } > { description } < /div>
            <br/>
            <div>
                <a href="#">{link}</a>
            </div>


            </div>


            </div>
        )
    }
}

// style done by using object in jsx

const styles = {
    taskItem: {
        display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',

    },
    heading: {
        fontSize: '1.7rem',
        fontWeight: 'bold',
        // textAlign: 'justify'
    },
    description: {
        fontSize: '1.1rem',
        textAlign: 'justify'

    }
}

export default SimpleTask;