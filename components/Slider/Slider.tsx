import * as React from 'react';
import { Box, Divider } from "@mui/material"
import SliderContent from './SliderContent';


const boxStyle = {
    position: 'absolute',
    borderRadius: "55px",
    background: "#FB6D10",
    width: "95.56%",
    height: "951px",
    zIndex: 1,
    right: 0
};

const gradientBoxStyle = {
    height: '50vh',
    width: '100%',
    backgroundColor: "#ededed",
    zIndex: -1,
};

const gradientBoxStyle2 = {
    height: '10vh',
    width: '100%',
    backgroundColor: "#fff",
    borderTopLeftRadius: '55px',
    zIndex: 0,
    position: 'absolute',
    top: '90%',
};

const containerStyle = {
    position: 'relative',
    width: "100%"
};

const sliderContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
};

export default function Slider() {
    return (
        <React.Fragment>
            <div style={containerStyle}>
                <div style={gradientBoxStyle}>
                    <Box style={boxStyle}>
                        <div style={{ display: "flex", flexDirection: 'row', }}>
                            <div style={sliderContainerStyle}>
                                <SliderContent />
                            </div>
                        </div>
                    </Box>
                    <div style={gradientBoxStyle2}></div>
                </div>
            </div>
        </React.Fragment>
    );
}
