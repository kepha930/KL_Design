'use client';
import { Box } from '@mui/material';
import BackgroundSetter from '@components/widgets/BackgroundSetter';

export default function PhotographyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id={"photography"}
        >
            <BackgroundSetter />
            {children}
        </Box>
    );
}
