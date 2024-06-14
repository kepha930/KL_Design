'use client';
import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { useMediaQuery, Box, Typography } from '@mui/material';
import theme from '@root/theme';

const BrandLogo = () => {
    const KL_Theme = theme;
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);

    const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

    const updatePosition = () => {
        setSmoothPosition((prev) => ({
            x: lerp(prev.x, hoverPosition.x, 0.03),
            y: lerp(prev.y, hoverPosition.y, 0.03),
        }));
        requestRef.current = requestAnimationFrame(updatePosition);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updatePosition);
        return () => cancelAnimationFrame(requestRef.current || 0);
    }, [hoverPosition]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        let pos = document.getElementById('brand-logo');
        if (pos) {
            const rect = pos.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setHoverPosition({ x, y });
        }
    };

    return (
        <>
            {lessThanLg ? (
                <Box sx={{ width: '198px' }}>
                    <img
                        src={`/images/landing_brand.gif`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
            ) : (
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'auto',
                        backgroundColor: 'transparent',
                    }}
                >
                    <Typography
                        id='brand-logo'
                        variant='d1'
                        onMouseMove={handleMouseMove}
                        sx={{
                            paddingBottom: '20px',
                            boxSizing: 'border-box',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'auto',
                            background: `radial-gradient(circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(234, 74, 24, 0.8), rgba(238, 229, 216, 0.8))`,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textAlign: 'center',
                            cursor: 'default',
                            '&::after': {
                                content: "'KL Design'",
                                paddingBottom: '20px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: 'auto',
                                background: `radial-gradient(circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(234, 74, 24, 0.8), rgba(238, 229, 216, 0.8))`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            },
                        }}
                    >
                        KL
                        <br />
                        Design
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default BrandLogo;
