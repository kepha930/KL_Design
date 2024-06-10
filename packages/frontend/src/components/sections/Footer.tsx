'use client';
import { FC, memo, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Link, ThemeProvider } from '@mui/material';
import theme from '@root/theme';
import { HearderMenuData, ContactData } from '@data/siteData';
import CustomeSvgIcon from '@components/widgets/CustomeSvgIcon';
import { useAppDispatch } from '@lib/hooks';

const Footer: FC<{
    bgcolor?: string;
    hrefId?: string;
}> = memo(({ hrefId }) => {
    const KL_theme = theme();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClick = (e: MouseEvent, id: number, route: string) => {
        if (id == 1)
            dispatch({ type: 'app/setSelectedWorksIndex', payload: id - 1 });
        router.push(route);
    };
    return (
        <ThemeProvider theme={KL_theme}>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'warning.main',
                    height: {
                        xs: '273px',
                        lg: '287px',
                    },
                    padding: {
                        xs: '32px 38px 64px',
                        lg: '48px 70px 52px',
                    },
                }}
            >
                <Box
                    sx={{
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#272727',
                        height: {
                            xs: '46px',
                            lg: '68px',
                        },
                    }}
                >
                    <Typography
                        color={'info.main'}
                        sx={{
                            textAlign: {
                                xs: 'center',
                                lg: 'left',
                            },
                            fontSize: {
                                xs: '20px',
                                lg: '28px',
                            },
                            fontWeight: 'bold',
                            fontFamily: 'Denton Test',
                            '&:hover': {
                                color: 'secondary.main',
                                transition: 'color 0.3s ease-in-out',
                            },
                            '&:focus': {
                                color: 'secondary.main',
                                transition: 'color 0.3s ease-in-out',
                            },
                        }}
                    >
                        KL Design
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row-reverse',
                        },
                        justifyContent: {
                            xs: 'center',
                            lg: 'space-between',
                        },
                        padding: {
                            xs: '16px 15px 32px',
                            lg: '20px 0 16px',
                        },
                        gap: {
                            xs: '16px',
                            lg: '0',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: {
                                xs: '14px',
                                lg: '32px',
                            },
                        }}
                    >
                        {HearderMenuData.map((item, index) => (
                            <Link
                                key={item.id}
                                onClick={(e) =>
                                    handleClick(e, item.id, item.route)
                                }
                                sx={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Typography
                                    color={'info.main'}
                                    sx={{
                                        fontSize: {
                                            xs: '10px',
                                            lg: '14px',
                                        },
                                        fontWeight: 'bold',
                                        lineHeight: '20px',
                                        letterSpacing: '0.32px',
                                        '&:hover': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                        '&:focus': {
                                            color: 'secondary.main',
                                            transition:
                                                'color 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: {
                                xs: '24px',
                                lg: '32px',
                            },
                        }}
                    >
                        {ContactData.map((contact) => (
                            <Link
                                key={contact.id}
                                href={contact.href}
                                target='_blank'
                            >
                                <CustomeSvgIcon
                                    id={contact.id}
                                    width={{ xs: '14px', lg: '16px' }}
                                    height={{ xs: '14px', lg: '16px' }}
                                    children={contact.value_default()}
                                />
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        color: 'primary.contrastText',
                        fontWeight: 'bold',
                        textAlign: {
                            xs: 'center',
                            lg: 'left',
                        },
                        marginTop: {
                            xs: '0',
                            lg: '42px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: {
                                xs: '8px',
                                lg: '10px',
                            },
                        }}
                    >
                        Designed by{' '}
                        <Link
                            sx={{
                                '&:hover': {
                                    color: 'secondary.main',
                                    transition: 'color 0.3s ease-in-out',
                                },
                            }}
                            href='https://au.linkedin.com/in/kepha-leung-467a01151'
                            target='_blank'
                        >
                            Kepha Leung
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            fontSize: {
                                xs: '8px',
                                lg: '10px',
                            },
                        }}
                    >
                        Developed by{' '}
                        <Link
                            sx={{
                                '&:hover': {
                                    color: 'secondary.main',
                                    transition: 'color 0.3s ease-in-out',
                                },
                            }}
                            href='https://www.linkedin.com/in/zuguang-tong-aa7041229'
                            target='_blank'
                        >
                            Zuguang Tong
                        </Link>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
});
export default Footer;
