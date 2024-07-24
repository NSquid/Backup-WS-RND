import React from 'react';

const Footer = () => {

    const footerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0054A5',
        color: 'white',
        padding: '20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '20%',
        fontFamily: 'Poppins, sans-serif',
    };

    const logoStyle = {
        height: '35px',
        width: '120px',
    };

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const hrStyle = {
        border: '0',
        borderTop: '1px solid #fff',
        width: '100%',
    };

    return (
        <footer id="footer" style={footerStyle}>
                <div style={rowStyle}>
                    <div style={columnStyle}>
                        <img src="/bnccLogo.png" alt="Logo" style={logoStyle} />
                        <br />
                        <p style={{ fontSize: '10px', width: '470px', }}>Lorem ipsum dolor sit amet consectetur. Turpis sed elit lectus fames posuere. Sagittis ac nullam in magna. Adipiscing netus ultrices ac rhoncus amet mauris vitae. Molestie ultrices pharetra habitant at consequat metus.</p>
                    </div>
                    <div style={columnStyle}>    
                        <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px'}}>Social Media</h3>
                        <div style={{ display: 'flex', width: '150px' }}>
                            <a href="https://www.instagram.com">
                            <img src="/IG.png" alt="Instagram" style={{ width: '20px', marginRight: '10px' }} />
                            </a>
                            <a href="https://www.facebook.com">
                            <img src="/FB.png" alt="Facebook" style={{ width: '20px', marginRight: '10px'  }} />
                            </a>
                            <a href="https://www.linkedin.com">
                            <img src="/IN.png" alt="LinkedIn" style={{ width: '20px'}} />
                            </a>
                        </div>
                        <br />
                        <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px'}}>Contact Us</h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                            <img src="/Email.png" alt="Email" style={{ width: '20px', marginRight: '10px' }} />
                            <p style={{ fontSize: '10px' }}>Example@gmail.com</p>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src="/Phone.png" alt="Phone" style={{ width: '20px', marginRight: '10px' }} />
                            <p style={{ fontSize: '10px' }}>0823xxxx</p>
                        </div>
                    </div>
                </div>
                <hr style={hrStyle} />
                <div style={{display: 'flex', alignItems: 'flex-start', width: '90%'}}>
                    <p>Copyright</p>
                </div>  
        </footer>
    );
};

export default Footer;