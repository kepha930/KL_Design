import { FC, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Link, Box, useMediaQuery } from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import Light from '@components/widgets/Light';
import { useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';

const SelectedWorks: FC<{
    hrefId?: string;
}> = memo(({ hrefId }) => {
    const KL_Theme = theme;
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    return (
        <Box
            id={hrefId}
            sx={{
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0px 32px 0 0',
                    lg: '0px 64px 0 0',
                },
                backgroundImage: `url('/images/bg/${
                    lessThanLg ? 'mobile' : 'desktop'
                }_work.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 0%',
                paddingBottom: {
                    xs: '20px',
                    lg: '50px',
                },
                display: 'flex',
                justifyContent: 'center',
                paddingX: {
                    xs: '28px',
                    lg: '70px',
                },
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
                            xs: '32px 0px 0',
                            lg: '72px 0px 0',
                        },
                    }}
                >
                    <Box
                        sx={{
                            padding: {
                                xs: '0 20% 24px',
                                lg: '0 0 40px',
                            },
                        }}
                    >
                        <Typography
                            variant={lessThanLg ? 'h2' : 'd1'}
                            sx={{
                                color: 'secondary.main',
                                textAlign: 'center',
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
    const KL_Theme = theme;
    const lessThanLg = useMediaQuery(KL_Theme.breakpoints.down('lg'));
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClick = () => {
        dispatch({ type: 'app/setSelectedWorksIndex', payload: id - 1 });
        router.push("/works");
    };
    return (
        <Box>
            <Box
                sx={{
                    padding: {
                        xs: '32px 10px 24px',
                        lg: '64px 0 24px',
                    },
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row-reverse',
                    },
                    justifyContent: {
                        xs: 'flex-start',
                        lg: 'space-between',
                    },
                    borderTopColor: '#272727',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                }}
            >
                <Typography
                    color={'primary.contrastText'}
                    variant={lessThanLg ? 'h1' : 'd3'}
                >{`0${id}`}</Typography>
                <Box>
                    <Link
                        underline='none'
                        color={'secondary.dark'}
                        onClick={handleClick}
                    >
                        <Typography variant={lessThanLg ? 'h3':'h1'}>{title}</Typography>
                    </Link>
                    <Typography
                        color={'primary.contrastText'}
                        variant={lessThanLg ? 'body1' : 'label1'}
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
