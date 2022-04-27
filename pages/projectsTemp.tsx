import { projects } from 'json/projects/data'
import { InferGetStaticPropsType } from 'next'

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
import { Container } from '@mui/material'

export const getStaticProps = async () => {
	return {
		props: {
			projectsList: projects
		}
	}
}

export default function ProjectsDataFetch({
	projectsList
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Container>
			<Grid container>
				{projectsList.map((projectsList) => (
					<Grid item xs={3} key={projectsList.id}>
						<Card sx={{ height: '500px', mx: 2, boxShadow: 0 }}>
							<CardMedia
								src={projectsList.image}
								sx={{
									overflow: 'hidden',
									height: '250px',
									backgroundImage: `url('` + projectsList.image + `')`,
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
										label={
											projectsList.category ? projectsList.category : 'Таг'
										}
										color="primary"
										sx={{ px: 1, py: 3, fontSize: '1rem' }}
									/>
								</Box>
								<Link
									href={projectsList.authorLink ? projectsList.authorLink : ''}
								>
									<a>
										<Grid container alignItems="center">
											<Grid item sx={{ mr: 2 }}>
												<Avatar alt="Remy Sharp" src="">
													A
												</Avatar>
											</Grid>
											<Grid item>
												<b>{projectsList.author ? projectsList.author : ''}</b>
											</Grid>
										</Grid>
									</a>
								</Link>
								<Link href={projectsList.href ? projectsList.href : ''}>
									<a>
										<Typography variant="h6" sx={{ my: 3 }}>
											{projectsList.title ? projectsList.title : ''}
										</Typography>
									</a>
								</Link>

								{/* Progress */}

								<Typography variant="caption">
									<CalendarMonthIcon sx={{ fontSize: 13 }} /> 2022 оны 04 сарын
									23
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
