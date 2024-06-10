import { FC, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Link, Box, useTheme, useMediaQuery } from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import Light from '@components/widgets/Light';
import { useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';

const SelectedWorks: FC<{
    hrefId?: string;
}> = memo(({ hrefId }) => {
    const KL_Theme = theme();
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    return (
        <Box
            id={hrefId}
            sx={{
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 32px',
                    lg: '0px 64px',
                },
                backgroundImage: `url('/images/bg/${
                    lessThanLg ? 'mobile' : 'desktop'
                }_work.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 0%',
                paddingBottom: {
                    xs: '20px',
                    lg: '0',
                },
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
                            xs: '32px 28px',
                            lg: '72px 10% 40px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            padding: {
                                xs: '0 20%',
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
                            Selected Client Works
                        </Typography>
                    </Box>
                    <Light />
                </Box>
                <Box>
                    {SelectedWorksData.map((work) => (
                        <Work
                            key={work.id}
                            id={work.id}
                            title={work.title}
                            description={work.desc}
                            href={work.name}
                            image={work.entryImg[lessThanLg ? 'xs' : 'lg']}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
});

const Work: FC<{
    id: number;
    title: string;
    description: string;
    image?: string;
    href?: string;
    onClick?: () => void;
}> = memo(({ id, title, description, image, href }) => {
    const theme = useTheme();
    const lessThanLg = useMediaQuery(theme.breakpoints.down('lg'));
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClick = () => {
        dispatch({ type: 'app/setSelectedWorksIndex', payload: id - 1 });
        router.push("/works");
    };
    return (
        <Box
            sx={{
                padding: {
                    xs: '0 27px',
                    lg: '0 70px',
                },
            }}
        >
            <Box
                sx={{
                    padding: {
                        xs: '32px 10px 24px',
                        lg: '64px 0 24px',
                    },
                    borderTopColor: '#272727',
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row-reverse',
                    },
                    justifyContent: {
                        xs: 'flex-start',
                        lg: 'space-between',
                    },
                }}
            >
                <Typography
                    color={'primary.contrastText'}
                    sx={{
                        fontSize: {
                            xs: '36px',
                            lg: '80px',
                        },
                        fontWeight: 'bold',
                        fontFamily: 'Denton Test',
                    }}
                >{`0${id}`}</Typography>
                <Box>
                    <Link
                        underline='none'
                        color={'secondary.dark'}
                        sx={{
                            fontSize: {
                                xs: '28px',
                                lg: '40px',
                            },
                            fontWeight: 'bold',
                            fontFamily: 'Denton Test',
                        }}
                        onClick={handleClick}
                    >
                        {title}
                    </Link>
                    <Typography
                        color={'primary.contrastText'}
                        sx={{
                            fontSize: '16px',
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    paddingBottom: {
                        xs: '24px',
                        lg: '64px',
                    },
                }}
            >
                <Link underline='none' onClick={handleClick}>
                    <img
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                        src={image}
                    />
                </Link>
            </Box>
        </Box>
    );
});

export default SelectedWorks;
