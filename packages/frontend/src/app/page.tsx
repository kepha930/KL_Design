'use client';
import { FC, memo, useEffect, Suspense, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@root/theme';
import { useAppDispatch } from '@lib/hooks';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import Landing from '@components/sections/Landing';
import About from '@components/sections/About';
import SelectedWorks from '@components/sections/SelectedWorks';
import Photography from '@components/sections/Photography';
import Contact from '@components/sections/Contact';
import { initialAppState } from '@lib/features/appSlice';

const Home: FC = memo(({}, searchParams) => {
    const dispatch = useAppDispatch();
    const KL_theme = theme();
    useEffect(() => {
        dispatch({
            type: 'app/setBackgroundImageMobile',
            payload: initialAppState.backgroundImageMobile,
        });
        dispatch({
            type: 'app/setBackgroundImageDesktop',
            payload: initialAppState.backgroundImageDesktop,
        });
        dispatch({
            type: 'app/setBackgroundColor',
            payload: KL_theme.palette.primary.main,
        });
    }, []);
    return (
        <ThemeProvider theme={KL_theme}>
            <BackgroundSetter />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <Landing />
                <About hrefId='about' />
                <SelectedWorks hrefId='works' />
                <Photography hrefId='photography' />
                <Contact hrefId='contact' />
            </Box>
        </ThemeProvider>
    );
});
export default Home;
