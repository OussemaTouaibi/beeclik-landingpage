import * as React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from "next/image";
import ImageSlider1 from "../../public/images/Rectangle 3202.png"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const typographyStyle = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "76px",
    letterSpacing: "0.2px",
    paddingLeft: "119px",
    paddingTop: "41px"
};

const typographyStyle2 = {
    color: "#FFF",
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: "900",
    lineHeight: "76px",
    letterSpacing: "0.2px",
    marginTop: "44px",
    marginLeft: "766px"

};

const imageStyle = {
    borderRadius: "20px",
    paddingLeft: "119px",
    paddingTop: "32px",
}

const DiverStyle = {
    background: "#FFF",
    height: "1px",
    marginTop: "60px",
    width: "1250px",
}

const typographyStyle3 = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "52px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "80px",
    letterSpacing: "0.2px",
    paddingLeft: "119px",
    marginTop: "26px"
}

const typographyStyle4 = {
    color: "rgba(255, 255, 255, 0.80)",
    textAlign: "justify",
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22.5px",
    letterSpacing: "0.2px",
    marginLeft: "38px",
    marginTop: "42px"
}


const buttonStyle = {
    borderRadius: "32px",
    background: "rgba(255, 255, 255, 0.90)",
    width: "336px",
    height: "55px",
    flexShrink: 0,
    marginTop: "12px"
};

const buttonTextStyle = {
    color: "black",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: "0.2px",
    textTransform: 'none'
};

const iconStyles = {
    width: '69px',
    height: '69px',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '1px solid white',
    marginLeft: '280px',
};

const iconStyles2 = {
    width: '69px',
    height: '69px',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '1px solid white',
    marginLeft: '70px',
};

const defaultSlideStyle = {
    width: "15%"
};

const activeSlideWidth = {
    width: "67%"
};



const SliderContent: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => {

    const [mainSlideIndex, setMainSlideIndex] = React.useState(0);
    const [isPrevArrowVisible, setPrevArrowVisible] = React.useState(false);
    const [isNextArrowVisible, setNextArrowVisible] = React.useState(true);

    const handleSlideChange = (swiper) => {
        setMainSlideIndex(swiper.activeIndex);
        if (swiperRef.current && swiperRef.current.swiper) {
            const { isBeginning, isEnd } = swiperRef.current.swiper;
            setPrevArrowVisible(!isBeginning);
            setNextArrowVisible(!isEnd);
        }
    };

    const handleButtonClick = () => {
        onButtonClick();

        const formElement = document.getElementById('form-section');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const swiperRef = React.useRef(null);


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


    return (<>

        <Swiper
            ref={swiperRef}
            slidesPerView={1.5}
            spaceBetween={0}
            centeredSlides={false}
            onSlideChange={handleSlideChange}
            initialSlide={0}
        >
            <SwiperSlide>
                <TableContainer >
                    <Table style={{ borderCollapse: 'collapse' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ border: '1px solid #fff', padding: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography style={typographyStyle}>NOS SERVICES</Typography>
                                        <Typography style={typographyStyle2}>01 / 03</Typography>
                                    </div>
                                    <Image src={ImageSlider1} alt='image' width="auto" height="auto" style={imageStyle} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="last-row">
                                <TableCell style={{ border: '1px solid #fff', padding: '10px', borderBottom: 'none' }}>
                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <Typography style={typographyStyle3}>Dépot vente</Typography>
                                        <div style={{ display: "flex", flexDirection: 'column' }}>
                                            <Typography style={typographyStyle4}>
                                                Gagnez plus de d’espace pour vos stocks et vos opérations courantes!<br />
                                                Optimisez votre temps pour vous concentrer sur l’éssentiel de votre activité :<br /> vendre encore et encore! . <br />
                                                Externalisez votre stockage et la manutentions réduit sensiblement vos coûts <br />fixes et augmente exponentiellement vos gains en bénéficiant l’effet des <br />
                                                économies d’échelle.
                                            </Typography>
                                            <div style={{ display: "flex", flexDirection: 'row', marginTop: "15px" }}>
                                                <Button variant="contained" style={buttonStyle}>
                                                    <span style={buttonTextStyle}>Demandez un devis</span>
                                                </Button>
                                                <Button startIcon={<ArrowForwardOutlinedIcon onClick={handleNextButtonClick} style={iconStyles} />} />
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </SwiperSlide>
            <SwiperSlide>
                {/* Sacned One */}
                <TableContainer >
                    <Table style={{ borderCollapse: 'collapse' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ border: '1px solid #fff', padding: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography style={typographyStyle}>NOS SERVICES</Typography>
                                        <Typography style={typographyStyle2}>01 / 03</Typography>
                                    </div>
                                    <Image src={ImageSlider1} alt='image' width="auto" height="auto" style={imageStyle} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="last-row">
                                <TableCell style={{ border: '1px solid #fff', padding: '10px', borderBottom: 'none' }}>
                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <Typography style={typographyStyle3}>Dépot vente</Typography>
                                        <div style={{ display: "flex", flexDirection: 'column' }}>
                                            <Typography style={typographyStyle4}>
                                                Gagnez plus de d’espace pour vos stocks et vos opérations courantes!<br />
                                                Optimisez votre temps pour vous concentrer sur l’éssentiel de votre activité :<br /> vendre encore et encore! . <br />
                                                Externalisez votre stockage et la manutentions réduit sensiblement vos coûts <br />fixes et augmente exponentiellement vos gains en bénéficiant l’effet des <br />
                                                économies d’échelle.
                                            </Typography>
                                            <div style={{ display: "flex", flexDirection: 'row', marginTop: "15px" }}>
                                                <Button startIcon={<ArrowBackIcon style={iconStyles2} onClick={handlePrevButtonClick} />} style={{ position: "absolute", left: 0 }} />
                                                <Button variant="contained" style={buttonStyle}>
                                                    <span style={buttonTextStyle}>Demandez un devis</span>
                                                </Button>
                                                <Button startIcon={<ArrowForwardOutlinedIcon onClick={handleNextButtonClick} style={iconStyles} />} />
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </SwiperSlide>
            <SwiperSlide >
                {/* Third One */}
                <TableContainer>
                    <Table style={{ borderCollapse: 'collapse' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ border: '1px solid #fff', padding: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography style={typographyStyle}>NOS SERVICES</Typography>
                                        <Typography style={typographyStyle2}>01 / 03</Typography>
                                    </div>
                                    <Image src={ImageSlider1} alt='image' width="auto" height="auto" style={imageStyle} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="last-row">
                                <TableCell style={{ border: '1px solid #fff', padding: '10px', borderBottom: 'none' }}>
                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <Typography style={typographyStyle3}>Dépot vente</Typography>
                                        <div style={{ display: "flex", flexDirection: 'column' }}>
                                            <Typography style={typographyStyle4}>
                                                Gagnez plus de d’espace pour vos stocks et vos opérations courantes!<br />
                                                Optimisez votre temps pour vous concentrer sur l’éssentiel de votre activité :<br /> vendre encore et encore! . <br />
                                                Externalisez votre stockage et la manutentions réduit sensiblement vos coûts <br />fixes et augmente exponentiellement vos gains en bénéficiant l’effet des <br />
                                                économies d’échelle.
                                            </Typography>
                                            <div style={{ display: "flex", flexDirection: 'row', marginTop: "15px" }}>
                                                <Button startIcon={<ArrowBackIcon style={iconStyles2} onClick={handlePrevButtonClick} />} style={{ display: isPrevArrowVisible ? "flex" : "none", position: "absolute", left: 0 }} />
                                                <Button variant="contained" style={buttonStyle} >
                                                    <span style={buttonTextStyle}>Demandez un devis</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </SwiperSlide>
        </Swiper>
    </>
    );
}
export default SliderContent;


