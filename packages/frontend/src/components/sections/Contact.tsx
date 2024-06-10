import { FC, memo } from 'react';
import { Typography, Link, Button, Box, List, ListItem, SvgIcon, useMediaQuery } from '@mui/material';
import { ContactData } from '@data/siteData';
import Light from '@components/widgets/Light';
import CopyToClipboardButton from '@components/widgets/CopyToClipboardButton';
import CustomeSvgIcon from '@components/widgets/CustomeSvgIcon';
import theme from '@root/theme';

const Contact: FC<{
    hrefId?: string;
}> = memo(({hrefId}) => {
    const KL_theme = theme();
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down("lg"));
    const arrowSvg = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='41'
            viewBox='0 0 35 41'
            fill='none'
        >
            <path
                d='M0.501727 40.0415C0.524659 40.3167 0.766334 40.5212 1.04152 40.4983L5.52598 40.1246C5.80117 40.1016 6.00566 39.86 5.98273 39.5848C5.9598 39.3096 5.71812 39.1051 5.44293 39.128L1.45675 39.4602L1.12457 35.474C1.10164 35.1988 0.859961 34.9943 0.584773 35.0173C0.309584 35.0402 0.10509 35.2819 0.128022 35.5571L0.501727 40.0415ZM1.38169 40.323L34.3817 1.32297L33.6183 0.677029L0.618307 39.677L1.38169 40.323Z'
                fill='#BFC0C4'
            />
        </svg>
    );
    return (
        <Box
            id={hrefId}
            sx={{
                marginTop: '-20px',
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 32px',
                    lg: '0px 64px',
                },
                backgroundImage:
                    `url('/images/bg/${lessThanLg?'mobile':'desktop'}_contact.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 0%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    padding: {
                        xs: '32px 28px',
                        lg: '72px 10% 40px',
                    },
                    width: '100%',
                    maxWidth: '1400px',
                }}
            >
                <Box
                    sx={{
                        padding: {
                            xs: '0 21%',
                            lg: '0 0',
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: 'secondary.main',
                            fontWeight: 'bold',
                            textAlign: {
                                xs: 'center',
                                lg: 'center',
                            },
                            fontFamily: 'Denton Test',
                            fontSize: {
                                xs: '32px',
                                lg: '102px',
                            },
                            textShadow: '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                        }}
                    >
                        Let's Talk
                    </Typography>
                </Box>
                <Light />
                {/* Name */}
                <Box>
                    <Box>
                        <Typography
                            color='info.main'
                            sx={{
                                fontSize: {
                                    xs: '32px',
                                    lg: '36px',
                                },
                                fontFamily: 'Denton Test',
                            }}
                        >
                            Kepha
                        </Typography>
                        <Typography
                            color='primary.light'
                            sx={{
                                fontSize: {
                                    xs: '16px',
                                    lg: '18px',
                                },
                            }}
                        >
                            noun
                        </Typography>
                        <List
                            sx={{
                                color: 'primary.contrastText',
                                listStyleType: 'disc',
                                listStylePosition: 'inside',
                                paddingX: '0',
                                fontWeight: {
                                    xs: 'bold',
                                    lg: 'normal',
                                },
                                fontSize: {
                                    xs: '14px',
                                    lg: '18px',
                                },
                            }}
                        >
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    paddingX: '0',
                                }}
                            >
                                a designer creates functional designs
                            </ListItem>
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    paddingX: '0',
                                }}
                            >
                                a person creates creative solutions
                            </ListItem>
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    padding: '0',
                                }}
                            >
                                a team-spirited person
                            </ListItem>
                        </List>
                    </Box>
                    <Typography
                        color={'primary.light'}
                        sx={{
                            fontFamily: 'Denton Test',
                            fontWeight: 'bold',
                            letterSpacing: '-1.02px',
                            fontSize: '102px',
                            marginBottom: {
                                xs: '32px',
                                lg: '0',
                            },
                            textAlign: {
                                xs: 'center',
                                lg: 'right',
                            },
                        }}
                    >
                        /ki:fa:/
                    </Typography>
                </Box>
                {/* Contact */}
                <Box>
                    <Box sx={{}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    lg: 'row',
                                },
                                gap: {
                                    xs: '16px',
                                    lg: '24px',
                                },
                            }}
                        >
                            {/* clipboard */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: {
                                        xs: 'row-reverse',
                                        lg: 'row',
                                    },
                                    gap: {
                                        xs: '8px',
                                        lg: '16px',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        lineHeight: '2rem'
                                    }}
                                    color={'info.main'}
                                >
                                    kphaleung@gmail.com
                                </Typography>
                                <Box
                                    sx={{
                                        position: 'relative',
                                    }}
                                >
                                    <CopyToClipboardButton
                                        text='kphaleung@gmail.com'
                                        width={{ xs: '32px', lg: '50px' }}
                                        height={{ xs: '32px', lg: '40px' }}
                                    />
                                    {/* clipboard float*/}
                                    <Box
                                        sx={{
                                            display: 'inline-block',
                                            justifyContent: 'center',
                                            width: '200px',
                                            position: 'absolute',
                                            top: '-140%',
                                            left: '15%',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: 'secondary.contrastText',
                                                textAlign: 'center',
                                                fontSize: {
                                                    xs: '10px',
                                                    lg: '13px',
                                                },
                                                fontWeight: 'bold',
                                                letterSpacing: '0.2px',
                                                textShadow:
                                                    '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            *click to copy my email*
                                        </Typography>
                                        <SvgIcon
                                            sx={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '10%',
                                            }}
                                            children={arrowSvg}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            {/* contact array */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: {
                                        xs: '16px',
                                        lg: '24px',
                                    },
                                    padding: {
                                        xs: '24px 0 0',
                                        lg: '0',
                                    },
                                }}
                            >
                                {ContactData.map((contact) => (
                                    <Link key={contact.id} href={contact.href} target="_blank">
                                        <CustomeSvgIcon
                                            id={contact.id}
                                            width={{ xs: '32px', lg: '40px' }}
                                            height={{ xs: '32px', lg: '40px' }}
                                            children={contact.value_circle()}
                                        />
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});

export default Contact;
