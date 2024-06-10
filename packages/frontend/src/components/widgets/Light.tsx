import { FC, memo, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import theme from '@root/theme';

const Light: FC = memo(() => {
    const KL_Theme = theme();
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '3px',
                overflow: 'hidden',
                backgroundColor: '#272727',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '0px',
                    height: '2px',
                    width: {
                        xs: '80px',
                        lg: '140px',
                    },
                    '@keyframes moveLight_xs': {
                        '0%': { left: '-140px' },
                        '100%': { left: 'calc(100%)' },
                    },
                    '@keyframes moveLight_lg': {
                        '0%': { left: '-200px' },
                        '100%': { left: 'calc(100%)' },
                    },
                    backgroundImage:
                        `linear-gradient(to right, transparent, ${KL_Theme.palette.secondary.main}, transparent)`,
                    animation: {
                        xs: 'moveLight_xs 4s ease-in-out infinite alternate',
                        lg: 'moveLight_lg 4s ease-in-out infinite alternate',
                    },
                }}
            ></Box>
        </Box>
    );
});

export default Light;
