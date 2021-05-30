import React from 'react';

class SmallPdf extends React.Component {
    render() {

        const { heading, description,img } = this.props.smallPdf
        return ( 
            <div className = "smallPdf-item" style = { styles.pdfItem } >


                    <div className = "left-block" >
                    <img src={img} style={styles.img} / >
                    
                    </div> 
                    <div className = "right1-block" >
                        <div style = { styles.heading } > { heading } </div> 
                        <div style = { styles.description } > { description } </div>
                    </div> 

                    

            </div>
        )
    }
}

//style done by using object in jsx

const styles = {
    pdfItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    heading: {
        fontSize: '1.4rem',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '1.1rem',
        textAlign:'justify'

    },
    img:{
        width:70,
        height:140
    }
}

export default SmallPdf;