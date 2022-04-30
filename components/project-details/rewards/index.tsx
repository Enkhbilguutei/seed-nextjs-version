import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ProjectRewards from '/assets/project/project-rewards.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function projectDetails() {
	return (
		<Grid>
			<Grid item xs={12} sx={{ px: 3, mx: 'auto' }}>
				<Box
					width="70%"
					textAlign={'center'}
					sx={{
						backgroundColor: '#edf9f3',
						mx: 'auto',
						py: 6,
						my: 10,
						pt: '3px'
					}}
				>
					<Typography
						variant="h4"
						sx={{ fontWeight: 'bold', fontSize: '24px', pt: 2, pb: 2, pr: 5 }}
					>
						Шагнал, урамшуулал
					</Typography>
					<Grid>
						<Image src={ProjectRewards} alt="RewardsZurag" />
					</Grid>
					<Typography
						variant="h4"
						sx={{ fontWeight: 'bold', fontSize: '18px' }}
					>
						200k₮ ба түүнээс дээш
					</Typography>
					<Grid textAlign={'left'} sx={{ px: 4 }}>
						<Typography variant="caption">
							Хэрэв та энэ төслийг дэмжсэн тохиолдолд танд урамшуулал бэлэглэх
							болно
						</Typography>
					</Grid>
					<Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
						2022 оны 5 сарын 2
					</Typography>
					<Typography variant="caption">Хүргэгдэх хугацаа</Typography>
					<Grid>
						<AccountCircleIcon />
						<Typography>10 дэмжигчид</Typography>
						<EmojiEventsIcon />
						<Typography>42 урамшуулал үлдсэн</Typography>
					</Grid>
					<Button
						sx={{ backgroundColor: '#127f06', borderRadius: '20px' }}
						variant="contained"
					>
						Урамшууллаа сонгох
						<ArrowRightAltIcon
							sx={{
								fontSize: '22px'
							}}
						/>
					</Button>
				</Box>
			</Grid>
		</Grid>
	)
}
