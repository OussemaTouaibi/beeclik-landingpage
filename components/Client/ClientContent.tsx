import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import Zara from '../../public/images/image 3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const containerStyles: React.CSSProperties = {
    minWidth: '100%',
    maxHeight: 358,
    borderTopLeftRadius: '55px',
    background: '#151927',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
};

const customTextStyle5: React.CSSProperties = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    marginTop: '44px',
};

const customTextStyle6: React.CSSProperties = {
    color: '#DFDFDF',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    marginTop: '80px',
    marginRight: '109px',
};

const svgStyles2: React.CSSProperties = {
    position: 'absolute',
    top: 180,
    minWidth: '49.88%',
    minHeight: '100px',
    flexShrink: 0,
    borderTopRightRadius: '55px',
    borderBottomRightRadius: '55px',
    backgroundColor: '#FB6D10',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 3,
    paddingBottom: '4rem',
    paddingLeft: '0.2rem',
};

const iconStyles: React.CSSProperties = {
    minWidth: '115.875px',
    minHeight: '115.875px',
    fill: 'white',
    backgroundColor: 'white',
    borderRadius: '50%',
    marginLeft: '252.99px',
};

const customTextStyle3: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Inter',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.2px',
};

const customTextStyle4: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.90)',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: '0.2px',
};


const ClientContent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const colors = ['white', 'white'];

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <Grid
            justifyContent="center"
            alignItems="center"
            paddingTop="3rem"
            style={{
                width: '100%',
            }}
        >
            <Swiper
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        const dotWidth = '20px';
                        const dotHeight = '20px';
                        return `<span class="${className}" style="background-color: ${index === activeIndex ? colors[activeIndex] : '#ccc'
                            }; width: ${dotWidth}; height: ${dotHeight};"></span>`;
                    },
                }}
                onSlideChange={handleSlideChange}
                modules={[Pagination]}
                style={{ width: '100%', height: '500px' }}
            >
                <SwiperSlide>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                        paddingTop="11rem"
                        paddingBottom="40rem"
                        style={{
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                        }}
                    >
                        <Grid item style={{ width: '50%' }}>
                            <Box style={svgStyles2}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                                    <Image src={Zara} alt="client" width="100%" height="100%" style={iconStyles} />
                                    <div style={{ marginLeft: '41px' }}>
                                        <Typography style={customTextStyle3}>ZARA</Typography>
                                        <Typography style={customTextStyle4}>la vente au détail</Typography>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item style={{ width: '50%' }}>
                            <Box style={containerStyles}>
                                <Typography style={customTextStyle5}>
                                    “Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since ”
                                </Typography>
                                <Typography style={customTextStyle6}>Lundi 26 septembre 2023</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid
                        container
                        spacing={0}
                        justifyContent="center"
                        alignItems="center"
                        paddingTop="11rem"
                        paddingBottom="40rem"
                        style={{
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                        }}
                    >
                        <Grid item style={{ width: '50%' }}>
                            <Box style={svgStyles2}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                                    <Image src={Zara} alt="client" width="100%" height="100%" style={iconStyles} />
                                    <div style={{ marginLeft: '41px' }}>
                                        <Typography style={customTextStyle3}>ZARA 2</Typography>
                                        <Typography style={customTextStyle4}>la vente au détail 2 </Typography>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item style={{ width: '50%' }}>
                            <Box style={containerStyles}>
                                <Typography style={customTextStyle5}>
                                    “Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since ”
                                </Typography>
                                <Typography style={customTextStyle6}>Lundi 26 septembre 2023</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Grid>
    );
};

export default ClientContent;
