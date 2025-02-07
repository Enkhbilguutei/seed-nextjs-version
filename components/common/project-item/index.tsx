import Link from 'next/link'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface IProps {
	title?: string
	category?: string
	author?: string
	authorImg?: string
	authorLink?: string
	image?: string
	alt?: string
	href?: string
	date?: string
	needed?: number
	collected?: number
}

export default function ProjectItem(props: IProps) {
	const {
		title,
		category,
		author,
		authorImg,
		authorLink,
		image,
		href,
		date,
		needed,
		collected
	} = props

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0
	})

	let percent = Math.round(
		((collected ? collected : 0) / (needed ? needed : 100)) * 100
	)
	if (percent > 100) percent = 100

	return (
		<Box>
			<Card sx={{ height: '530px', mx: 2, boxShadow: 0 }}>
				<CardMedia
					src={image}
					sx={{
						overflow: 'hidden',
						height: '250px',
						backgroundImage: `url('` + image + `')`,
						backgroundAttachment: 'relative',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				></CardMedia>
				<CardContent sx={{ mt: 5, px: 4, position: 'relative' }}>
					<Box
						sx={{
							position: 'absolute',
							left: '20px',
							top: '-40px',
							transform: 'translateY(-50%)',
							px: 2,
							py: 1,
							color: 'white'
						}}
					>
						<Chip
							label={category ? category : 'Tag'}
							color="primary"
							sx={{ px: '3px', fontSize: '0.9rem' }}
						/>
					</Box>
					<Link href={authorLink ? authorLink : ''}>
						<a>
							<Grid container alignItems="center">
								<Grid item sx={{ mr: 2 }}>
									<Avatar
										alt={author ? author : 'A'}
										src={authorImg ? authorImg : ''}
									/>
								</Grid>
								<Grid item>
									<b>{author ? author : ''}</b>
								</Grid>
							</Grid>
						</a>
					</Link>
					<Link href={href ? href : ''}>
						<a>
							<Typography
								variant="h6"
								sx={{
									mt: 3,
									mb: 1,
									fontWeight: 'bold',
									fontSize: '15px',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: '1',
									WebkitBoxOrient: 'vertical'
								}}
							>
								{title ? title : ''}
							</Typography>
							<Grid container sx={{ width: '100%' }}>
								<Grid item xs={9}>
									<Typography
										variant="caption"
										sx={{
											fontSize: '14px',
											fontWeight: 'bold'
										}}
									>
										{`${formatter.format(collected ? collected : 0)} ₮`}
										<Typography variant="caption" sx={{ ml: 1 }}>
											дэмжлэг авсан
										</Typography>
									</Typography>
								</Grid>
								<Grid
									item
									xs={3}
									sx={{
										textAlign: 'right'
									}}
								>
									<Typography
										variant="caption"
										sx={{
											fontSize: '14px',
											fontWeight: 'bold'
										}}
									>
										{`${percent}%`}
									</Typography>
								</Grid>
							</Grid>
							<LinearProgress
								variant="determinate"
								value={percent}
								sx={{ mt: 1, mb: 2 }}
							/>
						</a>
					</Link>

					{/* Progress */}

					<Typography variant="caption">
						<CalendarMonthIcon sx={{ fontSize: 13, mr: 1 }} />
						{date ? date : 'Он сар байхгүй байна'}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	)
}
