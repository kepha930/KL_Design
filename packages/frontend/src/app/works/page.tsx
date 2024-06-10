'use client';
import {
    FC,
    memo,
    Suspense,
    useState,
    useEffect,
    useRef,
    MouseEvent,
} from 'react';
import {
    Box,
    Typography,
    useMediaQuery,
    ImageList,
    ImageListItem,
    IconButton,
    Backdrop,
    Fade,
} from '@mui/material';
import { SelectedWorksData } from '@data/siteData';
import { useAppSelector, useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';
import CloseSvg from '@root/public/images/close.svg';
import OpenSvg from '@root/public/images/open.svg';

const KL_theme = theme();

const WorkPage: FC<{
    handleOpen: (e: MouseEvent) => void;
}> = memo(({ handleOpen }) => {
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    const curWorkIndex = useAppSelector(
        (state) => state.app.selectedWorksIndex
    );
    const data = SelectedWorksData[curWorkIndex];
    const details = data.details;
    return (
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
                    xs: '24px',
                    lg: '40px',
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {
                        xs: '16px',
                        lg: '32px',
                    },
                    padding: {
                        xs: '0px 30px 20px',
                        lg: '0px 0px 40px',
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
                        paddingX: {
                            xs: '12%',
                            lg: '24%',
                        },
                        textShadow: '5px 8px 19.8px rgba(0, 0, 0, 0.19)',
                        letterSpacing: {
                            xs: '-0.32px',
                            lg: '-1.02px;',
                        },
                        lineHeight: {
                            xs: '38px',
                            lg: '82px',
                        },
                    }}
                >
                    {details.title}
                </Typography>
                <Typography
                    color={{
                        xs: KL_theme.palette.primary.light,
                        lg: KL_theme.palette.info.main,
                    }}
                    sx={{
                        width: '100%',
                        fontWeight: {
                            xs: '700',
                            lg: '700',
                        },
                        fontFamily: {
                            lg: 'Denton Test',
                        },
                        textShadow: '13px 13px 29.7px rgba(0, 0, 0, 0.26)',
                        textAlign: 'center',
                        fontSize: {
                            xs: '16px',
                            lg: '28px',
                        },
                        lineHeight: {
                            xs: '20px',
                            lg: '34px',
                        },
                        letterSpacing: {
                            xs: '-0.32px',
                            lg: '-0.28px',
                        },
                    }}
                >
                    {details.desc}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: {
                        xs: '0 28px 0px',
                        lg: '0 0px 0px',
                    },
                }}
            >
                <ImageList cols={1} variant='quilted'>
                    <ImageListItem
                        key={1}
                        cols={1}
                        rows={1}
                        onClick={handleOpen}
                    >
                        <img
                            src={data.entryImg[lessThanLg ? 'xs' : 'lg']}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                        />
                    </ImageListItem>
                </ImageList>
            </Box>
        </Box>
    );
});

const Page: FC = memo(() => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [curChildPhoto, setCurChildPhoto] = useState('');
    const [nextWorkTitle, setNextWorkTitle] = useState('');
    const curWorkIndex = useAppSelector(
        (state) => state.app.selectedWorksIndex
    );
    const handleOpen = (e: MouseEvent) => {
        const target = e.target as HTMLImageElement;
        setCurChildPhoto(target.src);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch({ type: 'app/setActiveHeaderTab', payload: 'works' });
    }, []);
    useEffect(() => {
        let nextIndex =
            curWorkIndex === SelectedWorksData.length - 1
                ? 0
                : curWorkIndex + 1;
        setNextWorkTitle(SelectedWorksData[nextIndex].details.title);
        setShow(false);
        const timeout = setTimeout(() => {
            setShow(true);
        }, 0);

        return () => clearTimeout(timeout);
    }, [curWorkIndex]);
    return (
        <Fade in={show} timeout={1000} key={curWorkIndex}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <WorkPage handleOpen={handleOpen} />
                <DetailsContainer
                    id={curWorkIndex + 1}
                    handleOpen={handleOpen}
                />
                <Box
                    sx={{
                        height: {
                            xs: '191px',
                            lg: '274px',
                        },
                        width: '100%',
                        backgroundImage: {
                            xs: `url(/images/bg/mobile_work_page_bg_bottom.png)`,
                            lg: `url(/images/bg/desktop_work_page_bg_bottom.png)`,
                        },
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0% 0%',
                        padding: {
                            xs: '32px 30px 72px',
                            lg: '52px 70px 104px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderBottomColor: '#272727',
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: {
                                    lg: 'Denton Test',
                                },
                                fontWeight: '700',
                                fontSize: {
                                    xs: '14px',
                                    lg: '16px',
                                },
                                lineHeight: {
                                    xs: '16px',
                                    lg: '20px',
                                },
                                letterSpacing: {
                                    xs: '0.28px',
                                    lg: '0.32px',
                                },
                            }}
                            color={KL_theme.palette.primary.light}
                        >
                            Next Client Work
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: '660',
                                fontSize: {
                                    xs: '32px',
                                    lg: '36px',
                                },
                                lineHeight: {
                                    xs: '38px',
                                    lg: '44px',
                                },
                                letterSpacing: {
                                    xs: '-0.32px',
                                    lg: '-0.36px',
                                },
                            }}
                            color={KL_theme.palette.secondary.dark}
                        >
                            {nextWorkTitle}
                        </Typography>
                    </Box>
                </Box>
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
        </Fade>
    );
});

const DetailsContainer: FC<{
    id: number;
    handleOpen: (e: MouseEvent) => void;
}> = memo(({ id, handleOpen }) => {
    const [processesHeight, setProcessesHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const onHeightChange = (height: number) => {
        setProcessesHeight(height);
    };
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                minHeight: `${processesHeight}px`,
                paddingTop: {
                    xs: isExpanded
                        ? `calc(${processesHeight}px - 20px)`
                        : `600px`,
                    lg: isExpanded
                        ? `calc(${processesHeight}px - 30px)`
                        : `700px`,
                },
                transition: 'padding-top 0.5s ease-in-out',
            }}
        >
            <DesignProcess
                id={id}
                onHeightChange={onHeightChange}
                handleOpen={handleOpen}
            />
            <Execution
                id={id}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                handleOpen={handleOpen}
            />
        </Box>
    );
});

const DesignProcess: FC<{
    id: number;
    onHeightChange: (height: number) => void;
    handleOpen: (e: MouseEvent) => void;
}> = memo(({ id, onHeightChange, handleOpen }) => {
    const processesRef = useRef<HTMLDivElement>(null);
    const data = SelectedWorksData.find((item) => item.id === id);
    const details = data?.details;
    const processes = details?.processes || [];
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                onHeightChange(entry.target.clientHeight);
            }
        });

        if (processesRef.current) {
            observer.observe(processesRef.current);
        }

        return () => {
            if (processesRef.current) {
                observer.unobserve(processesRef.current);
            }
        };
    }, [onHeightChange]);
    return (
        <Box
            ref={processesRef}
            sx={{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: 'auto',
                borderRadius: {
                    xs: '0 24px 0 0',
                    lg: '0 32px 0 0',
                },
                backgroundColor: KL_theme.palette.info.main,
                boxShadow: '13px 13px 29.7px 0px rgba(0, 0, 0, 0.26)',
                padding: {
                    xs: '56px 27px 86px',
                    lg: '64px 70px 140px',
                },
            }}
        >
            <Box
                sx={{
                    paddingX: {
                        xs: '8px',
                        lg: '0',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        paddingBottom: {
                            xs: '24px',
                            lg: '40px',
                        },
                        borderBottomColor: KL_theme.palette.primary.main,
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                    }}
                >
                    <Typography
                        color={KL_theme.palette.primary.contrastText}
                        sx={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            fontFamily: 'Denton Test',
                            fontWeight: '900',
                            fontSize: {
                                xs: '64px',
                                lg: '80px',
                            },
                            lineHeight: {
                                xs: '52px',
                                lg: '64px',
                            },
                            letterSpacing: {
                                xs: '-0.64px',
                                lg: '-0.8px',
                            },
                        }}
                    >{`0${data?.id}`}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            marginBottom: {
                                xs: '24px',
                                lg: '0',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: {
                                    xs: '8px',
                                    lg: '16px',
                                },
                            }}
                        >
                            <Typography
                                color={KL_theme.palette.warning.main}
                                sx={{
                                    fontFamily: 'Denton Test',
                                    fontWeight: '700',
                                    fontSize: {
                                        xs: '20px',
                                        lg: '28px',
                                    },
                                    lineHeight: {
                                        xs: '20px',
                                        lg: '34px',
                                    },
                                    letterSpacing: {
                                        xs: '-0.2px',
                                        lg: '-0.28px',
                                    },
                                }}
                            >
                                Date:
                            </Typography>
                            <Typography
                                color={KL_theme.palette.primary.main}
                                sx={{
                                    fontWeight: '700',
                                    letterSpacing: {
                                        xs: '-0.28px',
                                        lg: '-0.32px',
                                    },
                                    lineHeight: {
                                        xs: '16px',
                                        lg: '20px',
                                    },
                                }}
                            >
                                {details?.date}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: {
                                    xs: '8px',
                                    lg: '16px',
                                },
                            }}
                        >
                            <Typography
                                color={KL_theme.palette.warning.main}
                                sx={{
                                    fontFamily: 'Denton Test',
                                    fontWeight: '700',
                                    fontSize: {
                                        xs: '20px',
                                        lg: '28px',
                                    },
                                    lineHeight: {
                                        xs: '20px',
                                        lg: '34px',
                                    },
                                    letterSpacing: {
                                        xs: '-0.2px',
                                        lg: '-0.28px',
                                    },
                                }}
                            >
                                Client:
                            </Typography>
                            <Typography
                                color={KL_theme.palette.primary.main}
                                sx={{
                                    fontWeight: '700',
                                    letterSpacing: {
                                        xs: '-0.28px',
                                        lg: '-0.32px',
                                    },
                                    lineHeight: {
                                        xs: '16px',
                                        lg: '20px',
                                    },
                                }}
                            >
                                {details?.client}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: {
                                    xs: '8px',
                                    lg: '16px',
                                },
                            }}
                        >
                            <Typography
                                color={KL_theme.palette.warning.main}
                                sx={{
                                    fontFamily: 'Denton Test',
                                    fontWeight: '700',
                                    fontSize: {
                                        xs: '20px',
                                        lg: '28px',
                                    },
                                    lineHeight: {
                                        xs: '20px',
                                        lg: '34px',
                                    },
                                    letterSpacing: {
                                        xs: '-0.2px',
                                        lg: '-0.28px',
                                    },
                                }}
                            >
                                Service Provided:
                            </Typography>
                            <Typography
                                color={KL_theme.palette.primary.main}
                                sx={{
                                    fontWeight: '700',
                                    letterSpacing: {
                                        xs: '-0.28px',
                                        lg: '-0.32px',
                                    },
                                    lineHeight: {
                                        xs: '16px',
                                        lg: '20px',
                                    },
                                }}
                            >
                                {details?.service}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: {
                                    xs: '8px',
                                    lg: '16px',
                                },
                            }}
                        >
                            <Typography
                                color={KL_theme.palette.warning.main}
                                sx={{
                                    fontFamily: 'Denton Test',
                                    fontWeight: '700',
                                    fontSize: {
                                        xs: '20px',
                                        lg: '28px',
                                    },
                                    lineHeight: {
                                        xs: '20px',
                                        lg: '34px',
                                    },
                                    letterSpacing: {
                                        xs: '-0.2px',
                                        lg: '-0.28px',
                                    },
                                }}
                            >
                                Software:
                            </Typography>
                            <Typography
                                color={KL_theme.palette.primary.main}
                                sx={{
                                    fontWeight: '700',
                                    letterSpacing: {
                                        xs: '-0.28px',
                                        lg: '-0.32px',
                                    },
                                    lineHeight: {
                                        xs: '16px',
                                        lg: '20px',
                                    },
                                }}
                            >
                                {details?.software}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: {
                                xs: '100%',
                                lg: '40%',
                            },
                            gap: {
                                xs: '8px',
                                lg: '24px',
                            },
                            position: {
                                xs: 'static',
                                lg: 'absolute',
                            },
                            right: {
                                lg: '18%',
                            },
                            bottom: {
                                lg: '40px',
                            },
                        }}
                    >
                        <Typography
                            color={KL_theme.palette.warning.main}
                            sx={{
                                fontFamily: 'Denton Test',
                                fontWeight: {
                                    xs: '700',
                                    lg: '660',
                                },
                                fontSize: {
                                    xs: '20px',
                                    lg: '28px',
                                },
                                lineHeight: {
                                    xs: '20px',
                                    lg: '34px',
                                },
                            }}
                        >
                            The Brief
                        </Typography>
                        <Typography
                            color={KL_theme.palette.primary.main}
                            sx={{
                                fontWeight: 'normal',
                                lineHeight: '20px',
                            }}
                        >
                            {details?.brief}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        textAlign: {
                            xs: 'center',
                            lg: 'left',
                        },
                        padding: {
                            xs: '36px 0 40px',
                            lg: '40px 0',
                        },
                        fontFamily: 'Denton Test',
                        fontWeight: '700',
                        fontSize: {
                            xs: '32px',
                            lg: '36px',
                        },
                        lineHeight: {
                            xs: '38px',
                            lg: '44px',
                        },
                        letterSpacing: {
                            xs: '-0.32px',
                            lg: '-0.36px',
                        },
                    }}
                    color={KL_theme.palette.secondary.main}
                >
                    Design Process
                </Typography>
                <ImageList
                    cols={1}
                    gap={lessThanLg ? 16 : 24}
                    variant='quilted'
                >
                    {processes.map((img) => (
                        <ImageListItem
                            key={img.id}
                            cols={1}
                            rows={1}
                            onClick={handleOpen}
                        >
                            <img
                                src={lessThanLg ? img.url.xs : img.url.lg}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
});

const Execution: FC<{
    id: number;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: (e: MouseEvent) => void;
}> = memo(({ id, isExpanded, setIsExpanded, handleOpen }) => {
    const data = SelectedWorksData.find((item) => item.id === id);
    const details = data?.details;
    const photos = details?.execution?.photos || [];
    const lessThanLg = useMediaQuery(KL_theme.breakpoints.down('lg'));
    const toggleExpand = () => setIsExpanded(!isExpanded);
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: {
                        xs: '-43px',
                        lg: '-110px',
                    },
                    left: '0',
                    width: '100%',
                    height: {
                        xs: '88px',
                        lg: '160px',
                    },
                    background: {
                        xs: 'linear-gradient(0deg, #141414 0%, rgba(238, 229, 216, 0.50) 100%)',
                        lg: 'linear-gradient(0deg, rgba(20, 20, 20, 0.60) 0%, rgba(238, 229, 216, 0.30) 100%)',
                    },
                    zIndex: 0,
                }}
            ></Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    borderRadius: {
                        xs: '0px 24px 0 0',
                        lg: '0px 32px 0 0',
                    },
                    backgroundColor: KL_theme.palette.warning.main,
                    boxShadow: '13px 13px 29.7px 0px rgba(0, 0, 0, 0.26)',
                    // boxShadow: '0 -20px 20px -10px rgba(20, 20, 20, 0.6), 0 -40px 40px -20px rgba(20, 20, 20, 0.3)',
                    padding: {
                        xs: '27px 40px',
                        lg: '64px 70px',
                    },
                    zIndex: 1,
                }}
            >
                <Typography
                    color={KL_theme.palette.secondary.main}
                    sx={{
                        position: 'absolute',
                        top: {
                            xs: '-43px',
                            lg: '-70px',
                        },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontWeight: 700,
                        textAlign: 'center',
                        lineHeight: 1.25,
                        letterSpacing: {
                            xs: '0.28px',
                            lg: '0.32px',
                        },
                        textShadow: '13px 13px 29.7px rgba(0, 0, 0, 0.26)',
                    }}
                >{`${
                    isExpanded ? 'Close' : 'Open'
                } Design Process`}</Typography>
                <IconButton
                    children={isExpanded ? CloseSvg() : OpenSvg()}
                    onClick={toggleExpand}
                    sx={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 0,
                        width: {
                            xs: '40px',
                            lg: '52px',
                        },
                        height: {
                            xs: '40px',
                            lg: '52px',
                        },
                        zIndex: 2,
                    }}
                />
                <Box
                    sx={{
                        paddingX: {
                            xs: '8px',
                            lg: '0',
                        },
                        zIndex: 1,
                    }}
                >
                    <Typography
                        color={KL_theme.palette.secondary.main}
                        sx={{
                            textAlign: {
                                xs: 'center',
                                lg: 'left',
                            },
                            fontFamily: 'Denton Test',
                            fontWeight: {
                                xs: '700',
                                lg: '660',
                            },
                            fontSize: {
                                xs: '32px',
                                lg: '36px',
                            },
                            marginBottom: {
                                xs: '40px',
                                lg: '40px',
                            },
                        }}
                    >
                        Execution
                    </Typography>
                    <Typography
                        color={KL_theme.palette.info.main}
                        sx={{
                            textAlign: 'left',
                            fontFamily: 'Denton Test',
                            fontWeight: {
                                xs: '700',
                                lg: '660',
                            },
                            fontSize: {
                                xs: '20px',
                                lg: '28px',
                            },
                            lineHeight: {
                                xs: '20px',
                                lg: '34px',
                            },
                            marginBottom: {
                                xs: '16px',
                                lg: '24px',
                            },
                        }}
                    >
                        {data!.details.execution.title}
                    </Typography>
                    <Typography
                        color={KL_theme.palette.primary.light}
                        sx={{
                            textAlign: 'left',
                            fontWeight: 'normal',
                            fontSize: {
                                xs: '16px',
                                lg: '14px',
                            },
                            width: {
                                xs: '100%',
                                lg: '40%',
                            },
                            marginBottom: {
                                xs: '24px',
                                lg: '64px',
                            },
                        }}
                    >
                        {data!.details.execution.desc}
                    </Typography>
                </Box>
                <ImageList
                    cols={1}
                    gap={lessThanLg ? 16 : 24}
                    variant='quilted'
                >
                    {photos.map((img) => (
                        <ImageListItem key={img.id} onClick={handleOpen}>
                            <img
                                src={lessThanLg ? img.url.xs : img.url.lg}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
});

export default Page;
