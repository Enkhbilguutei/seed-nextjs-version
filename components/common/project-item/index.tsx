import { StaticImageData } from 'next/image'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface IProps {
	title?: string
	category?: string
	author?: string
	authorLink?: string
	image?: StaticImageData
	alt?: string
	href?: string
}

export default function ProjectItem(props: IProps) {
	const { title, category, author, authorLink, image, href } = props

	return (
		<div>
			<Card sx={{ height: '500px', mx: 2, boxShadow: 0 }}>
				<CardMedia
					src={image?.src}
					sx={{
						overflow: 'hidden',
						height: '250px',
						backgroundImage: `url('` + image?.src + `')`,
						backgroundAttachment: 'relative',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				></CardMedia>
				<CardContent sx={{ mt: 5, px: 5, position: 'relative' }}>
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
						<Chip label={category ? category : 'Таг '} color='primary' sx={{ px: 1, py: 3, fontSize: '1rem' }} />
					</Box>
					<Link href={authorLink ? authorLink : ''}>
						<a>
							<Grid container alignItems="center">
								<Grid item sx={{ mr: 2 }}>
									<Avatar alt="Remy Sharp" src="">
										A
									</Avatar>
								</Grid>
								<Grid item>
									<b>{author ? author : ''}</b>
								</Grid>
							</Grid>
						</a>
					</Link>
					<Link href={href ? href : ''}>
						<a>
							<Typography variant="h6" sx={{ my: 3 }}>
								{title ? title : ''}
							</Typography>
						</a>
					</Link>

					{/* Progress */}

					<Typography variant="caption">
						<CalendarMonthIcon sx={{ fontSize: 13 }} /> 2022 оны 04 сарын 23
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}
