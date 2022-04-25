import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#127f06',
			light: '#51af3d',
			dark: '#005100',
			contrastText: '#333333'
		}
	},
	typography: {
		h6: {
			fontSize: '1rem'
		},
		caption: {
			fontSize: '14px'
		}
	},
	shape: {
        borderRadius: 0,
    },
	components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})

export default lightTheme
