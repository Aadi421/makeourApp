import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfTool from './PdfTool'
import SimpleTask from './SimpleTask'
import SmallPdf from './SmallPdf'

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
                    heading: 'Create the Perfect Document',
                    description: 'File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages. Smallpdf has it all.',
                    img: 'https://smallpdf.com/build/c99d75a784da5414bd49c399ef83281e.svg',
                    id:1,
                    link:'View All PDF Tools'

                },
                {
                    heading: 'Manage Documents—All in One Place',
                    description: 'No more working across multiple apps! Save time by storing, managing, and sharing files across devices—straight from our web platform.',
                    img: 'https://smallpdf.com/build/2ee6b1350dd0ae454c6f45cb80baf645.svg',
                    id:2,
                    link:'Start Free Trails'
                }
            ],
            smallPdfs: [{
                    heading: 'People Trust Us',
                    description: 'Over 500 million users have used our service to simplify their work with digital documents.',
                    img: 'https://smallpdf.com/build/e8edf8b3940ad1bedad645bd0f3b5db9.svg',
                    id:1,
                   

                },
                {
                    heading: 'Businesses Trust Us',
                    description: 'We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.',
                    img: 'https://smallpdf.com/build/e6ec2509ca1dd50a5af86b978c030d11.svg',
                    id:2,
                    link:'Start Free Trails'
                },
                {
                    heading: 'Our Partners Trust Us',
                    description: 'Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.',
                    img: 'https://smallpdf.com/build/e9a6a3987ea4c77f408bc20b19204168.svg',
                    id:3,
                   
                },
                {
                    heading: '24/7 Customer Support',
                    description: 'Get all the help you need with our round-the-clock customer support.',
                    img: 'https://smallpdf.com/build/97329bde056a3e0e9cabc2b90f9353fc.svg',
                    id:4,
                    
                },
                {
                    heading: '256-Bit TLS Encryption',
                    description: 'We use 256-bit TLS encryption for secure information transfer.',
                    img: 'https://smallpdf.com/build/58b64abece8be211cfc6508677814fe1.svg',
                    id:5,
                    
                },
                {
                    heading: 'Security Standards',
                    description: 'Your safety is our priority. Smallpdf is ISO 27001, GDPR, and CCPA compliant.',
                    img: 'https://smallpdf.com/build/6ddc5ab373498f2635ac39146fda29a2.svg',
                    id:6,
                   
                }

            ]

        }
    }

    render() {
        const { products } = this.state;
        const { simpletasks } = this.state 
        const { smallPdfs } = this.state 
        return ( 
            <div className = "home" >

                <section className = "header" >
                    <div className = "navContainer" style = { styles.navContainer } >
                        <div className = "logoContainer" >
                            <img src = "https://smallpdf.com/build/95cf74e5f89f93cfd5f97d16fa673f05.svg" alt = "logo" / >
                        </div>
                        <div className = "linkContainer" style = { styles.linkContainer } >
                            <div style = { styles.linkContainer } >
                                <span className = "mt-2 " > Smallpdf for Teams </span> 
                                <span className = "mt-2" > <button type = "" className = " btn btn-dark " > New </button> </span >
                            </div> 
                            <div style = {{ border: '1px solid black' }} >

                            </div> 
                            <div style = { styles.linkContainer } >
                            <span className = "mt-2 " > Login < /span> 
                            <span > <button type = "" className = "btn btn-primary" style = {{ marginLeft: 10, fontWeight: 'bold' }} > Free trails </button></span >
                            </div> 
                        </div > 
                    </div>   
                < /section >


                <section className = "mainSection" >

                    <div className = "mainContainer" style = { styles.mainContainer } >

                        <div className = "messagecontainer" >

                            <h1 style = { styles.messagecontainer.h1 } > We make PDF easy. < /h1> <br/>
                            <p style = { styles.messagecontainer.p } >All the tools you’ ll need to be more productive and work smarter with documents. </p><br/>
                            <button type = "" className = "mainButton1 btn btn-primary" > Start Free Trails < /button><button type="" className="btn btn-outline-primary"> Explore All Pdf Tools</button >

                        </div> 
                        <div className = "imagecontainer" >
                            <img src = "https://smallpdf.com/build/1d4ffb5a45e5dfa96145d434ab0da9bd.svg" alt = "mainsection Image" / >
                        </div> 
                    </div >

                </section>

                <section className = "pdfToolSection" >
                    <div className = "labelSection">
                        <h1 style = { styles.labelSection.h1 } > Most Popular PDF Tools < /h1> 
                        <p style = { styles.labelSection.p } > 21 tools to convert, compress, and edit PDFs
                        for free.Try it out today! < /p>  
                    </div> 
                    <div className = "pdfItemSection" style = { styles.pdfToolSection.pdfItemSection }> 
                        {
                            products.map((product) => {
                                return ( 
                                    <PdfTool product = { product }
                                    key = { product.id }
                                    />
                                )
                            })
                        }
                        <div>
                        <button type = "" className = "btn btn-primary" > See All PDF Tool </button> 
                        </div> 
                    </div>
                </section>


                <section className = "simpleTaskSection mt-5" >
                    <div className = "labelSection" >
                        <h1 style = { styles.labelSection.h1 }> Keep Your Simple Tasks Simple </h1> 
                        <p style = { styles.labelSection.p }> Smallpdf is the first and only PDF software you’ ll love.We have all the tools you’ ll need to start, manage, and finish your work with digital documents. </p>  
                    </div > 
                    <div className = "simpleTaskItem" > 
                        {
                            simpletasks.map((simpleTask) => {
                                return ( 
                                    <SimpleTask simpleTask = { simpleTask }
                                    key = { simpleTask.id }
                                    />
                                )
                            })
                        }

                    </div>
                </section>

                <section className="smallPdfSection mt-3"> 
                    <div className = "labelSection">
                        <h1 style = { styles.labelSection.h1 } > Why Choose Smallpdf? < /h1> 
                         
                    </div> 
                    <div className = "smallPdfItemSection" style = { styles.smallPdfSection.smallPdfItemSection }> 
                        {
                            smallPdfs.map((smallPdf) => {
                                return ( 
                                    <SmallPdf smallPdf = { smallPdf }
                                    key = { smallPdf.id }
                                    />
                                )
                            })
                        }
                        
                    </div>
                    <br/><br/>
                    <div className="freeSmallPdfSection mt-5">
                        <div className="detailSection" style={styles.detailSection}>
                            <div><h1 style={styles.detailSection.h1}>Try Smallpdf for Free</h1></div>
                            <div><p style={styles.detailSection.p}>Start your 7-day free trial and get unlimited access to all Smallpdf tools to convert, compress, e-sign, and more.</p></div>
                            <div><button type="" className="btn btn-primary">Start Free Trails</button></div>   
                        </div>
                        
                    </div>
                </section> 

                <br/><br/><hr/>

                <section className="footer">
                    <div className="footerNav" style = {styles.footerNav}>
                        <div className="upperSection">
                            <div className="firstdiv">
                                <img src="https://smallpdf.com/build/a5d546f7f540bb865466ce1e2a1dc1f7.svg" alt=""  style={{width:'100px',height:'100px'}}/>
                                <h5>We make PDF easy.</h5>

                            </div>
                            <div className="lastdiv">
                                <div>
                                    <label for="">Company</label>
                                    <label for="">About</label>
                                    <label for="">Help</label>
                                    <label for="">Blog</label>
                                </div>
                                <div>
                                    <label for="">Product</label>
                                    <label for="">Pricing</label>
                                    <label for="">Teams</label>
                                    <label for="">Embed PDF</label> 
                                    <label for="">Developers</label>
                                </div>
                                <div>
                                    <label for="">App</label> 
                                    <label for="">Download Smallpdf</label>
                                    <label for="">iOS App</label>
                                    <label for="">Android App</label>
                                    <label for="">Windows App</label>
                                </div>
                                                               
                            </div>
                        </div>
                        <hr/>
                        <div className="lowerSection">
                            <div className="firstdiv">
                                <label for="">© 2021 Smallpdf AG — Made with for the people of the internet.</label>
                            </div>
                            <div className="lastdiv">
                                <label for="">Privacy Notice</label>
                                <label for="">Terms & Conditions</label>
                                <label for="">Imprint</label>
                                <label for="">Contact Us</label>
                                <label for="">English</label>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </section>

            </div>
        )
    }
}

//style done by using object in jsx

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
    }, 
    smallPdfSection: {
        smallPdfItemSection: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',

        }
    },
    detailSection:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        h1:{
            fontSize:'2.5rem',
            fontWeight:'bold'
        },
        p:{
            fontSize:'1.1rem',

        }
    },
    footerNav:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',

    }


}

export default Home;