import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Face from "../../public/images/facebook.png";
import Insta from "../../public/images/instagram.png";
import Vec from "../../public/images/Vector.png";
import CombinedSVGs from './CombinedSVGs';
import Map from "../../public/images/image 1.png"


const containerStyle = {
  display: 'flex',
  height: "65px",
};

const labelStyle = {
  height: '32px',
  width: '173px',
  marginRight: '20px',
};
1
const textWrapperStyle = {
  color: '#fb6d10',
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '112.023%',
  marginTop: "24px",

};
const boxStyle = {
  borderTopRightRadius: "67px",
  borderTopLeftRadius: "67px",
  background: '#FB6D10',
  minWidth: '100%',
  minHeight: '100%',
  maxHeight: '405px',
  flexShrink: 0,
};
const logoStyle = {
  marginTop: "62px",
}
const containerStyle2 = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: "141px"
};
const containerStyle3 = {
  display: 'flex',
  flexDirection: 'row',
};
const textWrapperStyle2 = {
  color: '#FFF',
  fontFamily: 'Inter, Helvetica, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '122.023%',
  marginTop: "39px"
};
const textWrapperStyle3 = {
  color: '#FFF',
  fontFamily: 'Inter, Helvetica, sans-serif',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '105.023%',
};
const textWrapperStyle4 = {
  color: '#FFF',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '36.523%',
};
const socialStyle = {
  width: '15px',
  height: '28px',
  color: '#fff',
  borderRadius: '15px',
  border: '1px solid #fff',
  background: 'rgba(255, 255, 255, 0.30)',
  flexShrink: 0,
  overflow: 'hidden',
};
const mapContainerStyle = {
  position: 'relative',
  marginTop: "30rem",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const mapImageStyle = {
  position: 'absolute',
  top: -300,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: -1,
};

const spacingStyle: React.CSSProperties = {
  margin: '122px',
};


function Copyright() {

  return (
    <div style={labelStyle}>
      <Typography style={textWrapperStyle}>
        <Link color="inherit" href="#">
          WEREACT
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

const defaultTheme = createTheme();

export default function Footer() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container justifyContent="center" alignItems="center">
        <div style={mapContainerStyle}>
          <Image src={Map} alt='location' width="100%" height="100%" style={mapImageStyle} />
        </div>
        <Box style={boxStyle} >
          <Grid style={containerStyle3} justifyContent="center" alignItems="center">
            <div style={containerStyle2}>
              <Image src={Logo} alt='Logo' width="264px" height="68px" style={logoStyle} />
              <Typography style={textWrapperStyle2}>
                Beeclik, le partenaire réussite des e-commerces,<br /> e-shops et Marketplaces!
              </Typography>
            </div>
            <div style={{ marginTop: "70px", marginLeft: "509px" }}>
              <Typography style={textWrapperStyle3}>CONTACT</Typography>
              <br />
              <div style={{ marginTop: "30px" }}>
                <Typography style={textWrapperStyle4}> Service clients : </Typography>
                <br />
                <Typography style={textWrapperStyle4}>+216 95 668 638</Typography>
                <br />
                <Typography style={textWrapperStyle4} >+216 98 156 581</Typography>
                <br />
                <br />
                <Typography style={textWrapperStyle4}>contact@beeclik.com </Typography>
                <br />
                <br />
                <Typography style={textWrapperStyle4}>Lun- Sam: 9:00 - 18:00</Typography>
              </div>

            </div>
            <div style={{ marginLeft: "352px" }}>
              <Typography style={textWrapperStyle3}>SOCIAL MEDIA</Typography>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '57px' }}>
                <CombinedSVGs />
              </div>

            </div>
          </Grid>
          <div style={spacingStyle}></div>
        </Box>
        <div style={containerStyle}>
          <div style={{ marginLeft: "140px" }}>
            <Copyright />
          </div>
          <div style={{ marginLeft: "1140px" }}>
            <Typography style={textWrapperStyle}>Legal notice and terms of use</Typography>
          </div>
          <div style={{ marginLeft: "39px" }}>
            <Typography style={textWrapperStyle}>Privacy Policy</Typography>
          </div>
        </div>
      </Grid>
    </ThemeProvider>
  );
}