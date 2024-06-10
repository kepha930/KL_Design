'use client';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import Bar from '@components/widgets/Bar';
import { useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';
import { PhotographyPageData } from '@data/siteData';

export default function PhotographyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const dispatch = useAppDispatch();
    const KL_theme = theme();
    useEffect(() => {
        const background = '';
        dispatch({ type: 'app/setBackgroundImageMobile', payload: background });
        dispatch({
            type: 'app/setBackgroundImageDesktop',
            payload: background,
        });
        dispatch({
            type: 'app/setBackgroundColor',
            payload: KL_theme.palette.info.main,
        });
    }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                position: 'relative',
            }}
        >
            <BackgroundSetter />
            <Bar
                contentLength={PhotographyPageData.length}
                name={'photography'}
            />
            {children}
        </Box>
    );
}
