'use client';
import { FC, memo, useState, MouseEvent, useEffect } from 'react';
import {
    Box,
    Typography,
    ImageList,
    ImageListItem,
    Backdrop,
    Fade,
} from '@mui/material';
import { PhotographyPageData } from '@data/siteData';
import { useAppSelector, useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';

const Page: FC = memo(() => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [curChildPhoto, setCurChildPhoto] = useState('');
    const curPhotoIndex = useAppSelector((state) => state.app.photographyIndex);
    const data = PhotographyPageData[curPhotoIndex];
    const KL_theme = theme();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch({ type: 'app/setActiveHeaderTab', payload: 'photography' });
    }, []);
    useEffect(() => {
        setShow(false);
        const timeout = setTimeout(() => {
            setShow(true);
        }, 0);
        return () => clearTimeout(timeout);
    }, [curPhotoIndex]);
    const handleOpen = (e: MouseEvent) => {
        const target = e.target as HTMLImageElement;
        setCurChildPhoto(target.src);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fade in={show} timeout={1000} key={curPhotoIndex}>
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
                        xs: '64px',
                        lg: '104px',
                    },
                    marginTop: {
                        xs: '0',
                        lg: '-110px',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        padding: {
                            xs: '0px 30px 20px',
                            lg: '0px 0px 64px',
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
                                xs: '0 0px 20px',
                                lg: '0 0 0px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.secondary.main}
                            sx={{
                                width: '100%',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontFamily: 'Denton Test',
                                fontSize: {
                                    xs: '32px',
                                    lg: '102px',
                                },
                                textShadow:
                                    '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                            }}
                        >
                            {data.title}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        padding: {
                            xs: '0 28px 0px',
                            lg: '0 70px 0px',
                        },
                    }}
                >
                    <ImageList cols={2} gap={4} variant='quilted'>
                        {data.collection.map((item, index) => (
                            <ImageListItem
                                key={item.id}
                                cols={item.cols}
                                rows={item.rows}
                                onClick={handleOpen}
                            >
                                <img
                                    src={item.url}
                                    loading='lazy'
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Backdrop
                        open={open}
                        onClick={handleClose}
                        sx={{
                            backgroundColor: '#000',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                    >
                        <img
                            src={curChildPhoto}
                            style={{
                                objectFit: 'contain',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Backdrop>
                </Box>
            </Box>
        </Fade>
    );
});
export default Page;
