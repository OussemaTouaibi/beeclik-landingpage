import * as React from "react";
import { Typography, Button, Box, Grid } from '@mui/material';
import Image from "next/image";
import Team1 from "../../public/images/Rectangle 3206.png"
import Team2 from "../../public/images/Ellipse 34.png"
import Team3 from "../../public/images/Rectangle 3208.png"
import SouthEastIcon from '@mui/icons-material/SouthEast';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const firstContainerStyles = {
    width: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: "12rem",
};

const sacendContainerStyles = {
    width: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
};

const lineStyles = {
    background: '#151927',
    width: '92%',
    height: '0.5px',
    position: 'absolute',
    right: 0,
};

const titleStyles = {
    color: 'var(--text-color, #252B42)',
    fontFamily: 'Inter',
    fontSize: 72,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: '76px',
    letterSpacing: '0.2px',
    marginLeft: "139px"
};

const paragraphStyles = {
    color: 'rgba(21, 25, 39, 0.90)',
    fontFamily: 'Inter',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    marginLeft: '139px',
    marginTop: "50px"
};

const imageContainerStyles = {
    border: '2px solid #151927',
    borderRadius: '168.5px',
    background: 'rgba(37, 43, 66, 0.05)',
    padding: '5px',
    position: "absolute",
    height: "520px"
};

const imageStyles = {
    borderRadius: '168.5px',
    marginTop: "31px",
    marginLeft: "28px",
    marginRight: "28px",
};

const textStyles = {
    color: 'rgba(21, 25, 39, 0.90)',
    fontFamily: 'Inter',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: '0.2px',
};

const textStyles2 = {
    color: 'rgba(21, 25, 39, 0.90)',
    fontFamily: 'Inter',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.2px',
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

const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

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
    marginTop: "50px",
};

const iconStyles2 = {
    width: '37px',
    height: '37px',
    strokeWidth: '0.5px',
    stroke: 'var(--text-color, #252B42)',
};

const iconStyles = {
    width: '69px',
    height: '69px',
    fill: "black",
    backgroundColor: "white",
    borderRadius: '50%',
};

const containerStyles = {
    width: '60px',
    height: '60px',
    flexShrink: 0,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    backgroundColor: 'white',
    cursor: 'pointer',
};

const containerStyless = {
    minWidth: "70%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
};

const scaledSwiperStyles = {
    transformOrigin: "top center",
    transform: "scale(0.8)",
    marginLeft: "8rem"
};

const Team: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => {
    const handleButtonClick = () => {
        onButtonClick();

        const formElement = document.getElementById('form-section');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const swiperRef = React.useRef(null);
    const [isPrevArrowVisible, setPrevArrowVisible] = React.useState(false);
    const [isNextArrowVisible, setNextArrowVisible] = React.useState(true);
    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const { isBeginning, isEnd } = swiperRef.current.swiper;
            setPrevArrowVisible(!isBeginning);
            setNextArrowVisible(!isEnd);
        }
    };

    const handleNextButtonClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <React.Fragment>
            <div style={{ paddingTop: "12rem" }}>
                <div style={lineStyles}></div>
                <br />
            </div>
            <div style={{ position: "absolute", right: 0, marginTop: "3rem", display: "flex" }}>

                <div onClick={handlePrevButtonClick} style={{ ...containerStyles, marginRight: "60rem", display: isPrevArrowVisible ? "flex" : "none" }}>
                    <WestOutlinedIcon style={iconStyles2} />
                </div>
                <div onClick={handleNextButtonClick} style={containerStyles}>
                    <EastOutlinedIcon style={iconStyles2} />
                </div>
            </div>
            <div style={firstContainerStyles}>
                <div style={sacendContainerStyles}>
                    <Typography style={titleStyles}>Notre équipe</Typography>

                    <div style={{ display: 'flex' }}>
                        <p style={paragraphStyles}>Propulsez vos ventes et votre affaire à des <br />niveaux supérieures grace à notre équipe <br />
                            de professionnels dévoués et nos moyens <br /> logistiques à la pointe de la technologie,<br />
                            nous améliorons sensiblement la <br />satisfaction de vos clients et nous <br /> diminuons fortement vos <br /> retours et vos réclamations. <br />Nous nous engageons pleinement à vos <br /> cotés dans une relation gagnant-gagnant! </p>
                    </div>
                    <Button variant="contained" style={buttonStyles} onClick={handleButtonClick} endIcon={
                        <SouthEastIcon style={iconStyles} />
                    }>
                        <Typography style={textStyles3}>Contactez-nous</Typography>
                    </Button>
                </div>
                <div style={containerStyless}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        modules={[Navigation]}
                        ref={swiperRef}
                        onSlideChange={handleSlideChange}
                        style={{ ...scaledSwiperStyles, minWidth: "100%", height: "100%" }}
                    >
                        <SwiperSlide >
                            <div>
                                <Image src={Team1} alt="team member" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div style={imageContainerStyles}>

                                <Image src={Team2} alt="team member" style={imageStyles} />
                                <div style={textContainerStyles}>
                                    <Typography style={textStyles}>Julia Robert</Typography>
                                    <Typography style={textStyles2}>Chargée Commerciale</Typography>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={Team3} alt="team member" />
                        </SwiperSlide>
                        <SwiperSlide  >
                            <Image src={Team3} alt="team member" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Team;
