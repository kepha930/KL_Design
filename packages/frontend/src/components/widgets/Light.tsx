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
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '0px',
                    height: '3px',
                    width: '80px',
                    '@keyframes moveLight': {
                        '0%': { left: '0' },
                        '100%': { left: 'calc(100% - 80px)' },
                    },
                    backgroundImage:
                        `linear-gradient(to right, transparent, ${KL_Theme.palette.secondary.main}, transparent)`,
                    animation: 'moveLight 5s linear infinite alternate',
                }}
            ></Box>
        </Box>
    );
});

export default Light;
