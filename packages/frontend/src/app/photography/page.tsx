'use client';
import { FC, memo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Typography,
    Link,
    useMediaQuery,
    ThemeProvider,
} from '@mui/material';
import { useAppDispatch } from '@lib/hooks';
import { PhotographyPageData } from '@data/siteData';
import theme from '@root/theme';

const KL_theme = theme;
const Home: FC = memo(() => {
    const dispatch = useAppDispatch();
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
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
        dispatch({ type: 'app/setActiveHeaderTab', payload: 'photography' });
    }, []);

    return (
        <ThemeProvider theme={KL_theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '1400px',
                    height: 'auto',
                    paddingBottom: {
                        xs: '20px',
                        lg: '0',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        padding: {
                            xs: '32px 28px',
                            lg: '72px 10% 64px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: {
                                xs: '1px solid #272727',
                                lg: '2px solid #272727',
                            },
                            width: '100%',
                            padding: {
                                xs: '0 8px 24px',
                                lg: '0 0 40px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.secondary.main}
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                                textShadow:
                                    '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                            }}
                            variant={lessThanLg ? 'h2' : 'd1'}
                        >
                            Photography
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: '24px',
                                lg: '64px',
                            },
                            padding: {
                                xs: '32px 0 64px',
                                lg: '64px 0 104px',
                            },
                        }}
                    >
                        {PhotographyPageData.map((data, index) => (
                            <PhotographyCard
                                key={data.id}
                                title={data.title}
                                img={data.entryImg}
                                href={`${data.href}`}
                                idx={data.id}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
});

const PhotographyCard: FC<{
    img: string;
    title: string;
    href: string;
    idx: number;
}> = memo(({ img, title, href, idx }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClick = () => {
        dispatch({ type: 'app/setPhotographyIndex', payload: idx });
        // route to href
        router.push(href);
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: {
                    xs: '16px',
                    lg: '24px',
                },
            }}
        >
            <Link
                // href={href}
                onClick={handleClick}
                underline='none'
                color={KL_theme.palette.primary.dark}
            >
                <Typography
                    variant='h3'
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    {title}
                </Typography>
            </Link>
            <Link
                // href={href}
                onClick={handleClick}
                underline='none'
                sx={{
                    borderRadius: {
                        xs: '0px 16px',
                        lg: '0px 32px',
                    },
                }}
            >
                <img
                    src={img}
                    alt={title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </Link>
        </Box>
    );
});
export default Home;
