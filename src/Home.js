import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfTool from './PdfTool'
import SimpleTask from './SimpleTask'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{

                    img: '',
                    heading: 'PDF To Word',
                    description: 'Convert PDFs to editable word document',
                    id: 1
                },
                {

                    img: '',
                    heading: 'Merge PDF',
                    description: 'Combine multiple PDFs into on unified document ',
                    id: 1
                },

                {

                    img: '',
                    heading: 'JPG to PDF',
                    description: 'Transform JPG,PNG,BMP imagre to PDF',
                    id: 1
                }, {

                    img: '',
                    heading: 'eSign PDF',
                    description: 'Create your signature, sign your PDF',
                    id: 1
                }, {

                    img: '',
                    heading: 'Edit PDF',
                    description: 'Add text,shape,image to yoyr PDF',
                    id: 1
                },
                {

                    img: '',
                    heading: 'Compress PDF',
                    description: 'Reduce the size of your PDF without losing quality',
                    id: 1
                },

            ],
            simpletasks: [{
                    heading: 'Work Directly on Your Files',
                    description: 'Do more than just view PDFs. Highlight and add text, images, shapes, and freehand annotations to your documents. You can connect to 20 other tools to enhance your files further.',
                    link: 'Edit a PDF now',
                    image: 'http://smallpdf.com/build/c99d75a784da5414bd49c399ef83281e.svg',
                    id: 1

                },
                {
                    heading: 'Digital Signatures Made Easy',
                    description: 'Fill in forms, e-sign contracts, and close deals in a few simple steps. You can also request e-signatures and track your document every step of the way.',
                    link: 'Try eSign',
                    image: 'https://smallpdf.com/build/43236b6432df2143c1244b85792c883a.svg',
                    id: 2
                }
            ]

        }
    }

    render() {
        const { products } = this.state;
        const { simpletasks } = this.state
        return ( <
            div className = "home" >

            <
            section className = "header" >
            <
            div className = "navContainer"
            style = { styles.navContainer } >
            <
            div className = "logoContainer" >
            <
            img src = "https://smallpdf.com/build/95cf74e5f89f93cfd5f97d16fa673f05.svg"
            alt = "logo" / >
            <
            /div> <
            div className = "linkContainer"
            style = { styles.linkContainer } >
            <
            div style = { styles.linkContainer } >
            <
            span className = "mt-2 " > Smallpdf
            for Teams < /span> <
            span className = "mt-2" > < button type = ""
            className = " btn btn-dark " > New < /button> </span >
            <
            /div> <
            div style = {
                { border: '1px solid black' }
            } >

            <
            /div> <
            div style = { styles.linkContainer } >
            <
            span className = "mt-2 " > Login < /span>  <
            span > < button type = ""
            className = "btn btn-primary"
            style = {
                { marginLeft: 10, fontWeight: 'bold' }
            } > Free trails < /button></span >
            <
            /div> < /
            div > <
            /div>   < /
            section >

            <
            section className = "mainSection" >

            <
            div className = "mainContainer"
            style = { styles.mainContainer } >

            <
            div className = "messagecontainer" >

            <
            h1 style = { styles.messagecontainer.h1 } > We make PDF easy. < /h1> <
            br / >
            <
            p style = { styles.messagecontainer.p } >
            All the tools you’ ll need to be more productive and work smarter with documents. <
            /p><br/ >
            <
            button type = ""
            className = "mainButton1 btn btn-primary" > Start Free Trails < /button><button type="" className="btn btn-outline-primary"> Explore All Pdf Tools</button >

            <
            /div> <
            div className = "imagecontainer" >
            <
            img src = "https://smallpdf.com/build/1d4ffb5a45e5dfa96145d434ab0da9bd.svg"
            alt = "mainsection Image" / >
            <
            /div> < /
            div >

            <
            /section>

            <
            section className = "pdfToolSection mt-5" >
            <
            div className = "labelSection" >
            <
            h1 style = { styles.labelSection.h1 } > Most Popular PDF Tools < /h1> <
            p style = { styles.labelSection.p } > 21 tools to convert, compress, and edit PDFs
            for free.Try it out today! < /p>  < /
            div > <
            div className = "pdfItemSection"
            style = { styles.pdfToolSection.pdfItemSection } > {
                products.map((product) => {
                    return ( <
                        PdfTool product = { product }
                        key = { product.id }
                        />
                    )
                })
            }

            <
            div >
            <
            button type = ""
            className = "btn btn-primary" > See All PDF Tool < /button> < /
            div > <
            /div>

            <
            /section>

            <
            section className = "simpleTaskSection mt-5" >
            <
            div className = "labelSection" >
            <
            h1 style = { styles.labelSection.h1 } > Keep Your Simple Tasks Simple < /h1> <
            p style = { styles.labelSection.p } > Smallpdf is the first and only PDF software you’ ll love.We have all the tools you’ ll need to start, manage, and finish your work with digital documents. < /p>  < /
            div > <
            div className = "simpleTaskItem" > {
                simpletasks.map((simpleTask) => {
                    return ( <
                        SimpleTask simpleTask = { simpleTask }
                        key = { simpleTask.id }
                        />
                    )
                })
            }

            <
            /div>

            <
            /section> <
            br / >



            <
            /div>
        )
    }
}

// style done by using object in jsx <div className="pdfItemSection" style={styles.pdfToolSection.pdfItemSection}></div>

const styles = {

    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottom: '1px solid grey'

    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    linkSpan: {
        marginRignt: 10
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    messagecontainer: {
        h1: {
            fontSize: '3.4rem',
            fontWeight: 'bold'
        },
        p: {
            fontSize: '1.2rem',
        }
    },

    labelSection: {
        h1: {
            fontSize: '3rem',
            fontWeight: 'bold'

        },
        p: {
            fontSize: '1.2rem',
        }
    },
    pdfToolSection: {
        pdfItemSection: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',

        }
    }


}

export default Home;