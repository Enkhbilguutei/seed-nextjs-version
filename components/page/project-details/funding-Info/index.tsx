import { Button, Grid, Typography, Box } from '@mui/material'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import Batamgalan from '/assets/author-thumbs/03.jpg'

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
			<Box justifyItems="center" alignItems="center" sx={{ display: 'flex' }}>
				<Image alt="Munkhtulga Ah" src={Batamgalan} width="48" height="48" />

				<Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
					Бат-Амгалан
				</Typography>
				<Typography variant="h6" sx={{ color: '#333', ml: 3 }}>
					<CalendarMonthIcon
						sx={{ fontSize: '16px', mr: 1, color: '#127F06' }}
					/>
					2021 оны 12 сарын 4
				</Typography>
			</Box>

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
								125 сая₮
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
								28
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
				<Typography>50%</Typography>
			</Grid>
			<LinearProgress variant="determinate" value={60} sx={{ mb: 5 }} />

			<Grid container sx={{ my: 5 }} justifyContent="space-between">
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					10k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					70k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					100k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					250k₮
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					500k₮
				</Button>
			</Grid>
			<Button
				variant="contained"
				sx={{
					fontWeight: 'bold',
					borderRadius: '0px',
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
