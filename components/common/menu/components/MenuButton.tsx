import Button from '@mui/material/Button';

export default function (props: any) {
    return (
        <Button {...props} sx={{
            color: 'primary.contrastText',
            borderBottom: '3px solid white',
            textTransform: 'initial',
            mx: 1,
            '&:hover': {
                color: 'primary.main',
                backgroundColor: 'transparent'
            },
            '&.active': {
                color: 'primary.main',
                borderColor: 'primary.main',
                backgroundColor: 'transparent'
            }
        }} />
    )
}