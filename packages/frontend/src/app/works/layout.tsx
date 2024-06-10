'use client';
import { useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import Bar from '@components/widgets/Bar';
import { useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';
import { SelectedWorksData } from '@data/siteData';

export default function SelectedWorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const dispatch = useAppDispatch();
    const KL_theme = theme();
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    useEffect(() => {
        const backgroundMobile = `url(/images/bg/mobile_work_page_bg_top.png)`;
        const backgroundDesktop = `url(/images/bg/desktop_work_page_bg_top.png)`;
        dispatch({ type: 'app/setBackgroundImageMobile', payload: backgroundMobile });
        dispatch({
            type: 'app/setBackgroundImageDesktop',
            payload: backgroundDesktop,
        });
        dispatch({
            type: 'app/setBackgroundColor',
            payload: KL_theme.palette.warning.main,
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
            id={"works"}
        >
            <BackgroundSetter />
            <Bar
                contentLength={SelectedWorksData.length}
                name={'selectedWorks'}
                tabColor={KL_theme.palette.info.main}
            />
            {children}
        </Box>
    );
}
