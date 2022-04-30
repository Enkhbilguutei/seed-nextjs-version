import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ProjectRewards from '/assets/project/project-rewards.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
export default function projectDetails() {
	return (
		<Grid item xs={12}>
			<Box alignItems={'center'} sx={{ backgroundColor: '#edf9f3', my: 10 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', my: 5 }}>
					Шагнал, урамшуулал
				</Typography>
				<Image src={ProjectRewards} alt="ProjectRewardsZurag" />
				<Typography
					variant="h4"
					sx={{ fontWeight: 'bold', mt: 3, fontSize: '18px' }}
				>
					200k₮ ба түүнээс дээш
				</Typography>
				<Typography variant="caption">
					Хэрэв та энэ төслийг дэмжсэн тохиолдолд танд урамшуулал бэлэглэх болно
				</Typography>
				<Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
					2022 оны 5 сарын 2
				</Typography>
				<Typography variant="caption">Хүргэгдэх хугацаа</Typography>
				<AccountCircleIcon />
				<EmojiEventsIcon />
				<Button sx={{ backgroundColor: '#127f06' }} variant="contained">
					Урамшууллаа сонгох
				</Button>
				\\\\\\
			</Box>
		</Grid>
	)
}
