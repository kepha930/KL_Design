import React, { useState } from 'react';
import { useMediaQuery, Box, Typography } from '@mui/material';
import theme from '@root/theme';

const BrandLogo = () => {
    const KL_Theme = theme();
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    return (
        <>
            {lessThanLg ? (
                <Box sx={{
                    width: '198px',
                
                }}>
                    <img src={`/images/landing_brand.gif`} style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }} />
                </Box>
            ) : (
                <Box
                    sx={{
                        fontFamily: 'Denton Test',
                        boxSizing: 'border-box',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: {
                            xs: '100px',
                            lg: '150px',
                        },
                        backgroundColor: 'transparent',
                    }}
                >
                    <Box sx={{}}>
                        <Typography
                            id='brand-logo'
                            onMouseMove={(e) => {
                                let pos = document.getElementById('brand-logo');
                                if (pos) {
                                    const rect = pos.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    setHoverPosition({ x, y });
                                }
                            }}
                            sx={{
                                fontFamily: 'Denton Test',
                                boxSizing: 'border-box',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 'auto',
                                lineHeight: '1',
                                background: `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(234, 74, 24, 0.8), rgba(238, 229, 216, 0.8))`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '102px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                cursor: 'default',
                                '&::after': {
                                    content: "'KL Design'",
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(234, 74, 24, 0.8), rgba(238, 229, 216, 0.8))`,
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    filter: 'blur(5px)',
                                },
                            }}
                        >
                            KL
                            <br />
                            Design
                        </Typography>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default BrandLogo;
