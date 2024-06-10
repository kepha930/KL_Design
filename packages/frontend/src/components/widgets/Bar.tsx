import { FC, memo } from 'react';
import { Box, Toolbar, Button, SvgIcon } from '@mui/material';
import theme from '@root/theme';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import TabArrowLeft from '@root/public/images/tab_arrow_left.svg';
import TabArrowRight from '@root/public/images/tab_arrow_right.svg';

const KL_Theme = theme();
const Bar: FC<{
    contentLength: number;
    name: string;
    tabColor?: string;
}> = memo(
    ({ contentLength, name, tabColor = KL_Theme.palette.warning.dark }) => {
        // console.log("Bar", name)
        let curIndex: number = 0;
        switch (name) {
            case 'photography':
                curIndex = useAppSelector(
                    (state) => state.app.photographyIndex
                );
                break;
            case 'selectedWorks':
                curIndex = useAppSelector(
                    (state) => state.app.selectedWorksIndex
                );
                break;
            default:
                break;
        }
        const dispatch = useAppDispatch();
        const handleNext = () => {
            if(name === 'photography'){
                dispatch({
                    type: 'app/setPhotographyIndex',
                    payload: curIndex === contentLength - 1 ? 0 : curIndex + 1,
                });

            }else if(name === 'selectedWorks'){
                dispatch({
                    type: 'app/setSelectedWorksIndex',
                    payload: curIndex === contentLength - 1 ? 0 : curIndex + 1,
                });

            }
        };
        return (
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1400px',
                    height: 'auto',
                    paddingTop: {
                        xs: '30px',
                        lg: '80px',
                    },
                    paddingX: {
                        xs: '28px',
                        lg: '0px',
                    },
                    ".MuiToolbar-root": {
                        paddingLeft: 0,
                        paddingRight: 0,
                    }
                }}
            >
                <Toolbar
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }}
                >
                    <Button
                        href='/'
                        startIcon={
                            <SvgIcon
                                sx={{
                                    width: {
                                        xs: '12px',
                                        lg: '16px',
                                    },
                                    height: {
                                        xs: '12px',
                                        lg: '16px',
                                    },
                                    path: {
                                        stroke: tabColor,
                                    },
                                }}
                                children={TabArrowLeft()}
                            />
                        }
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            width: {
                                xs: '86px',
                                lg: '120px',
                            },
                            height: {
                                xs: '24px',
                                lg: '40px',
                            },
                            boxSizing: 'border-box',
                            textAlign: 'center',
                            color: tabColor,
                            padding: {
                                xs: '4px 16px',
                                lg: '10px 24px',
                            },
                            borderRadius: {
                                xs: '0 12px',
                                lg: '0 20px',
                            },
                            borderColor: tabColor,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={handleNext}
                        endIcon={
                            <SvgIcon
                                sx={{
                                    width: {
                                        xs: '12px',
                                        lg: '16px',
                                    },
                                    height: {
                                        xs: '12px',
                                        lg: '16px',
                                    },
                                    path: {
                                        stroke: tabColor,
                                    },
                                }}
                                children={TabArrowRight()}
                            />
                        }
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            width: {
                                xs: '86px',
                                lg: '120px',
                            },
                            height: {
                                xs: '24px',
                                lg: '40px',
                            },
                            textAlign: 'center',
                            color: tabColor,
                            padding: {
                                xs: '4px 16px',
                                lg: '10px 24px',
                            },
                            borderRadius: {
                                xs: '0 12px',
                                lg: '0 20px',
                            },
                            borderColor: tabColor,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                        }}
                    >
                        Next
                    </Button>
                </Toolbar>
            </Box>
        );
    }
);

export default Bar;
