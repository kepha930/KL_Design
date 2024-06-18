import { FC, memo, useEffect } from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import theme from '@root/theme';
const KL_theme = theme;
const About: FC<{
    hrefId?: string;
}> = memo(({
    hrefId
}) => {
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    return (
        <Box
            id={hrefId}
            sx={{
                width: "100%",
                height: 'auto',
                padding: {
                    xs: '32px 27px',
                    lg: '80px 64px 64px',
                },
                display: 'flex',
                justifyContent: 'center',
            }}
        >            
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        lg: '946px',
                    },
                    maxWidth: '1400px',
                    minHeight: {
                        xs: '293px',
                        lg: '274px',
                    },
                    padding: {
                        xs: '32px 27px',
                        lg: '64px 189px 64px 96px',
                    },
                    borderRadius: {
                        xs: '0px 24px',
                        lg: '0px 48px',
                    },
                    backgroundColor: 'info.main',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row',
                    },
                    justifyContent: {
                        xs: 'center',
                        lg: 'flex-start',
                    },
                    gap: {
                        xs: '24px',
                        lg: '70px',
                    },
                }}
            >
                <Box
                    sx={{
                        flexWrap: 'nowrap',
                        flexShrink: 0,
                    }}
                >
                    <Typography
                        variant={lessThanLg? 'h2' : 'h1'}
                        sx={{
                            color: 'secondary.main',
                            textAlign: {
                                xs: 'center',
                                lg: 'left',
                            },
                        }}
                    >
                        About Me
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: {
                            xs: 'center',
                            lg: 'flex-end',
                        },
                        maxWidth: '426px',
                        paddingTop: {
                            xs: 0,
                            lg: '14px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: {
                                xs: '8px',
                                lg: '12px',
                            },
                        }}
                    >
                        <Typography
                            variant='body2'
                            sx={{
                                width: {
                                    xs: '100%',
                                    lg: '100%',
                                },
                                color: 'primary.contrastText',
                            }}
                        >
                            I am a{' '}
                            <Box component={'span'} color={'primary.dark'}>
                                designer, photographer
                            </Box>{' '}
                            and a film camera geek.{' '}
                        </Typography>
                        <Typography
                            variant='body2'
                            sx={{
                                width: {
                                    xs: '100%',
                                    lg: '100%',
                                },
                                color: 'primary.contrastText',
                            }}
                        >
                            I help businesses to advance their{' '}
                            <Box component={'span'} color={'primary.dark'}>
                                branding
                            </Box>{' '}
                            by creating{' '}
                            <Box component={'span'} color={'primary.dark'}>
                                functional designs
                            </Box>{' '}
                            in{' '}
                            <Box component={'span'} color={'primary.dark'}>
                                various industries.
                            </Box>{' '}
                        </Typography>
                        <Typography
                            variant='body2'
                            sx={{
                                width: {
                                    xs: '100%',
                                    lg: '100%',
                                },
                                color: 'primary.contrastText',
                            }}
                        >
                            In my spare time, I am again searching for my next
                            Hasselblad while watching cinematography tutorials.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});

export default About;
