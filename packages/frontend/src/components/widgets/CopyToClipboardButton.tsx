import { useState, FC, memo } from 'react';
import { IconButton, Snackbar, SvgIcon } from '@mui/material';
import CopySvg from '@root/public/images/contact/copy.svg';
import CustomeSvgIcon from '@components/widgets/CustomeSvgIcon';

const CopyToClipboardButton: FC<{
    text: string;
    width?: object;
    height?: object;
    onClick?: () => void;
}> = memo(({ text, width, height }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(text);
    };
    return (
        <>
            <IconButton
                sx={{
                    width: width,
                    height: height,
                    padding: 0,
                }}
                onClick={handleClick}
                color='primary'
            >
                <CustomeSvgIcon
                    id={0}
                    key={0}
                    children={CopySvg()}
                    width={{ xs: '32px', lg: '40px' }}
                    height={{ xs: '32px', lg: '40px' }}
                />
            </IconButton>
            <Snackbar
                message='Copied to clibboard'
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open}
            />
        </>
    );
});

export default CopyToClipboardButton;
