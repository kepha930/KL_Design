import { FC, memo, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const About: FC<{
    hrefId?: string;
}> = memo(({
    hrefId
}) => {
    useEffect(() => {}, []);
    return (
        <Box
            id={hrefId}
            sx={{
                width: '100%',
                height: 'auto',
                padding: {
                    xs: '32px 20px',
                    lg: '167px 64px',
                },
                display: 'flex',
                justifyContent: 'center',
            }}
        >            
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                    minHeight: {
                        xs: '293px',
                        lg: '320px',
                    },
                    padding: {
                        xs: '32px 20px',
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
                    justifyContent: 'center',
                    gap: {
                        xs: '32px',
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
                        sx={{
                            color: 'secondary.main',
                            fontWeight: 'bold',
                            textAlign: {
                                xs: 'center',
                                lg: 'left',
                            },
                            fontFamily: 'Denton Test',
                            fontSize: {
                                xs: '32px',
                                lg: '40px',
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
