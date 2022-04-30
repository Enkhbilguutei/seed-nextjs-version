import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import LinearProgress, {
	linearProgressClasses
} from '@mui/material/LinearProgress'
import { shadows } from '@mui/system'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { display, textAlign } from '@mui/system'

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}))

export default function projectDetails() {
	return (
		<Grid item xs={12}>
			<Button
				variant="contained"
				sx={{
					boxShadow: '0px 10px 30px 0px'
				}}
			>
				Кино
			</Button>
			<Typography
				variant="h4"
				sx={{ alignItems: 'Left', my: 3, fontWeight: 'bold' }}
			>
				Single Ladies IV
			</Typography>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant="dot"
			>
				<Avatar alt="Munkhtulga Ah" src="/assets/author-thumbs/01.jpg"></Avatar>
			</StyledBadge>
			<Typography variant="caption" sx={{ ml: 2, fontWeight: 'bold' }}>
				Бат-Амгалан
			</Typography>
			<CalendarMonthIcon sx={{ fontSize: '16px', ml: 2, color: '#127F06' }} />
			<Typography variant="caption" sx={{ color: '#333', ml: 1 }}>
				2022 оны 2 сарын 2
			</Typography>
			<Grid container sx={{ mt: 2 }} spacing={2}>
				<Grid item xs={4}>
					<Card
						sx={{
							mt: 0,
							mx: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
								20сая₮
							</Typography>
							<Typography variant="body2">Дэмжлэг авсан</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card
						sx={{
							mt: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
								10
							</Typography>
							<Typography variant="body2">Дэмжигчид</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={4}>
					<Card
						sx={{
							mx: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
								17
							</Typography>
							<Typography variant="body2">Өдөр үлдсэн</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Typography
				variant="h4"
				sx={{ fontWeight: 'bold', fontSize: '18px', pt: 5 }}
			>
				250сая₮ дэмжлэг авахаас
			</Typography>
			<Grid textAlign={'right'}>
				<Typography sx={{ fontWeight: 'bold', pb: '5px' }}>50%</Typography>
			</Grid>
			<LinearProgress variant="determinate" value={60} sx={{ mb: 5 }} />

			<Grid container sx={{ my: 5 }} justifyContent="space-between">
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					20k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					70k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					100k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					250k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					500k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 10, width: '15%' }}
				>
					500k₮
				</Button>
			</Grid>
			<Button
				variant="contained"
				sx={{
					fontWeight: 'bold',
					borderRadius: '18px',
					width: '35%'
				}}
			>
				Төсөл дэмжих
				<ArrowRightAltIcon
					sx={{
						fontSize: '22px'
					}}
				/>
			</Button>
		</Grid>
	)
}
