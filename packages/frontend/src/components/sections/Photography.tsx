import { FC, memo } from 'react';
import {
    Typography,
    Box,
    useMediaQuery,
    ImageList,
    ImageListItem,
    Button,
} from '@mui/material';
import { PhotographyData } from '@data/siteData';
import Light from '@components/widgets/Light';
import theme from '@root/theme';

const Photography: FC<{
    hrefId?: string;
}> = memo(({ hrefId }) => {
    const KL_Theme = theme();
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    return (
        <Box
            id={hrefId}
            sx={{
                marginTop: '-20px',
                paddingBottom: {
                    xs: '20px',
                    lg: '0',
                },
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 32px',
                    lg: '0px 64px',
                },
                backgroundImage: `url('/images/bg/${
                    lessThanLg ? 'mobile' : 'desktop'
                }_photo.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 0%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                }}
            >
                <Box
                    sx={{
                        padding: {
                            xs: '32px 28px 24px',
                            lg: '72px 10% 40px',
                        },
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
                                textShadow:
                                    '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                            }}
                        >
                            Photography
                        </Typography>
                    </Box>
                    <Light />
                </Box>
                <Box
                    sx={{
                        padding: {
                            xs: '0 28px 32px',
                            lg: '72px 20% 40px',
                        },
                        borderRadius: {
                            xs: '16px 0',
                            lg: '32px 0',
                        },
                    }}
                >
                    <ImageList cols={3} gap={4} variant='quilted'>
                        {PhotographyData.map((item, index) => {
                            return (
                                <ImageListItem
                                    key={item.id}
                                    cols={item.cols}
                                    rows={item.rows}
                                >
                                    <img
                                        src={item.url}
                                        loading='lazy'
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                    <Box
                        sx={{
                            textAlign: 'center',
                            marginTop: {
                                xs: '24px',
                                lg: '40px',
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: {
                                    xs: '8px 16px',
                                    lg: '10px 24px',
                                },
                                textTransform: 'none',
                                borderWidth: '1px',
                                borderColor: '#fff',
                                borderStyle: 'solid',
                                borderRadius: {
                                    xs: '0 12px',
                                    lg: '0 16px',
                                },
                                boxShadow:
                                    '5px 8px 19.8px 0px rgba(0, 0, 0, 0.19)',
                                '&:hover': {
                                    borderColor: 'secondary.main',
                                    color: 'secondary.main',
                                    transition:
                                        'color,borderColor 0.3s ease-in-out',
                                },
                                '&:focus': {
                                    borderColor: 'secondary.main',
                                    color: 'secondary.main',
                                    transition:
                                        'color,borderColor 0.3s ease-in-out',
                                },
                            }}
                            href='/photography'
                        >
                            View More
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});

export default Photography;
