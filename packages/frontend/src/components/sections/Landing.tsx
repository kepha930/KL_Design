import { FC, MouseEvent, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Typography,
    Link,
    Box,
    Slide,
} from '@mui/material';
import { LandingMenuData } from '@data/siteData';
import BrandLogo from '@components/widgets/BrandLogo';
import { useAppDispatch } from '@lib/hooks';

const Landing: FC = memo(() => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClick = (e: MouseEvent, id: number, route: string) => {
        // console.log('id', id);
        if(id !== 4) dispatch({ type: 'app/setSelectedWorksIndex', payload: id - 1 });
        router.push(route);
    };
    const [slideChecked, setSlideChecked] = useState([
        false,
        false,
        false,
        false,
    ]);
    useEffect(() => {
        const menuLength = LandingMenuData.length;
        const newChecked = Array(menuLength).fill(false);
        LandingMenuData.forEach((_, index) => {
            setTimeout(() => {
                newChecked[index] = true;
                if (index === menuLength - 1) {
                    setSlideChecked(newChecked);
                }
            }, index * 100); // 500ms delay between each link
        });
    }, []);
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: {
                    xs: '0',
                    lg: '150px 0 0',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: {
                            xs: '80px 0 15px',
                            lg: '0 20%',
                        },                    
                    }}
                >
                    <BrandLogo />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: {
                            xs: '0 0 30px',
                            lg: '100px 20% 0',
                        },
                        gap: {
                            xs: '12px',
                            lg: '0',
                        },
                    }}
                >
                    {LandingMenuData.map((item, index) => {
                        return (
                            <Slide
                                in={slideChecked[index]}
                                direction='right'
                                timeout={1000}
                                key={item.id}
                                mountOnEnter
                                unmountOnExit
                            >
                                <Link
                                    key={item.id}
                                    onClick={(e) => handleClick(e, item.id, item.route)}
                                    color='primary.light'
                                    underline='none'
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
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
                            </Slide>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
});

export default Landing;
