import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClientContent from './ClientContent';

const containerStyles2: React.CSSProperties = {
    minHeight: "780px",
    minWidth: "1070px",
    flexShrink: 0,
    background: '#151927',
    marginTop: "9rem",
    position: 'relative',
};

const svgStyles: React.CSSProperties = {
    minWidth: "100%",
    maxHeight: "517px",
    backgroundColor: '#FB6D10',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "82px",
};

const customTextStyle1: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    marginTop: "84px",
};

const customTextStyle2: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '138%',
};

const sectionContainerStyle: React.CSSProperties = {
    position: 'relative',
    marginTop: '3rem',
    zIndex: 2,
    marginBottom: '3rem',
    width: '100%',
};

const whiteSectionStyles: React.CSSProperties = {
    width: '100%',
    height: '127px',
    position: 'absolute',
    top: -1,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: -1,
    borderBottomLeftRadius: '55px',
    borderBottomRightRadius: '55px',
    backgroundColor: '#fff',
};

const spacingStyle: React.CSSProperties = {
    margin: '122px',
};

const Client: React.FC = () => {
    return (
        <>
            <div style={sectionContainerStyle}>
                <Box style={whiteSectionStyles}></Box>
            </div>
            <Box style={containerStyles2}>
                <Box style={svgStyles}>
                    <Typography style={customTextStyle1}>Rien ne vaut un client satisfait</Typography>
                    <Typography style={customTextStyle2}>Consultez les témoignages de nos clients</Typography>
                    <ClientContent />
                </Box>
            </Box>
            <div style={spacingStyle}></div>
        </>
    );
};

export default Client;
