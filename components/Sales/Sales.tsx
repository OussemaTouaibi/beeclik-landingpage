import * as React from "react";
import { Typography, Button } from '@mui/material';
import Image from "next/image";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import Pic from "../../public/images/Ellipse 38.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router';

const buttonStyles = {
    width: '455px',
    height: '90px',
    flexShrink: 0,
    backgroundColor: '#151927',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: "139px",
    borderRadius: '50px',
    marginTop: "22px"
};

const iconStyles = {
    width: '69px',
    height: '69px',
    fill: 'black',
    backgroundColor: "white",
    borderRadius: '50%',
};

const iconStyles2 = {
    backgroundColor: "white",
    borderRadius: '50%',
    width: '122px',
    height: '122px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
};

const textStyles3 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '64px',
    letterSpacing: '0.2px',
    marginLeft: "48px",
    textTransform: 'none',
};

const titleStyles = {
    color: 'var(--text-color, #252B42)',
    fontFamily: 'Inter',
    fontSize: "64px",
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: '72px',
    letterSpacing: '0.2px',
    marginLeft: "139px",
    textTransform: 'none',
    marginTop: "133px"
};

const textStyles = {
    color: 'rgba(21, 25, 39, 0.90)',
    textAlign: 'justify',
    fontFamily: 'Inter',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '138%',
    marginLeft: '48px',
    textTransform: 'none',
    marginTop: "78px",
    marginLeft: "140px",
};

const containerStyles = {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(237, 237, 237, 0.90)',
    paddingBottom: "113px"
};

const outerCircleStyles = {
    borderRadius: '783px',
    background: 'rgba(255, 255, 255, 0.10)',
    boxShadow: '14px 4px 65px 0px #D9D9D9',
    width: '750px',
    height: '783px',
    flexShrink: 0,
    position: 'relative',
    marginLeft: "103px",
    marginTop: "78px"
};

const innerCircleStyles = {
    borderRadius: '664px',
    background: 'rgba(255, 255, 255, 0.50)',
    boxShadow: '14px 4px 65px 0px #D9D9D9',
    width: '636px',
    height: '664px',
    flexShrink: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const imageStyles3 = {
    borderRadius: '50%',
    width: "764px",
    height: "764px",
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};
const Sales: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => {
    const handleButtonClick = () => {
        onButtonClick(); // Call the provided prop function
        // Optionally, you can add scroll logic here
        const formElement = document.getElementById('form-section');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <React.Fragment>
            <div style={containerStyles}>
                <div>
                    <Typography style={titleStyles}>Augmentez vos ventes <br /> avec un meilleur service <br /> de livraison !</Typography>
                    <p style={textStyles}>Vous avez ou vous gérez un e-commerce ou un Marketplace sur facebook ou <br />instagram?<br />
                        Vous aimeriez développer davantage votre affaire et le service de livraison <br /> vous freine? Optez pour un service de livraison de meilleure qualité !<br />
                        Nous ne sommes pas une simple société de livraison, nous sommes le <br /> partenaire de votre réussite !<br />
                        <br />
                        Contactez-nous et bénéficiez de notre expertise et nos offres exclusives!</p>
                    <Button variant="contained" style={buttonStyles} endIcon={<SouthEastIcon style={iconStyles} />} onClick={handleButtonClick}>
                        <Typography style={textStyles3}>Contactez-nous</Typography>
                    </Button>
                </div>
                <div style={outerCircleStyles}>
                    <div style={innerCircleStyles}>
                        <div style={iconStyles2}>
                            <PlayArrowIcon style={{ fontSize: '72px' }} />
                        </div>

                        <Image src={Pic} alt="Sales" width="100%" height="100%" style={imageStyles3} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sales;
