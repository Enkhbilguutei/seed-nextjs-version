import PageLayout from 'layout/page-layout'
import Container from '@mui/material/Container'
import { Box, Grid } from '@mui/material'

import BlogDetails from 'components/page/blog-details'
import NewsLatest from 'components/page/blogs/news-latest'
import PopularTags from 'components/page/blogs/popular-tags'
import CTA from 'components/page/blogs/cta'

import { avatar } from 'components/page/blog-details/avatar'

export default function Character() {
	return (
		<PageLayout>
			<Box sx={{ backgroundColor: '#edf9f3', py: 8 }}>
				<Container>
					<Grid container spacing={4}>
						<Grid item xs={8} sx={{ textAlign: 'center' }}>
							<img src={avatar[3].photoUrl} alt="" />
							<div>
								<h1>{avatar[3].name}</h1>
								<p>Affiliation: {avatar[3].affiliation}</p>
							</div>
						</Grid>
						<Grid item xs={4}>
							<Grid container rowSpacing={4}>
								<Grid item xs={12}>
									<NewsLatest />
								</Grid>
								<Grid item xs={12}>
									<PopularTags />
								</Grid>
								<Grid item xs={12}>
									<CTA />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</PageLayout>
	)
}

export async function getStaticProps({ params }: any) {
	const blogId = params.blogId.replace(/\-/g, '+')

	return {
		props: {
			character: avatar[0]
		}
	}
}

export async function getStaticPaths() {
	return {
		paths: avatar.map((avatar) => {
			const blogId = avatar.name.toLowerCase().replace(/ /g, '-')
			return {
				params: {
					blogId
				}
			}
		}),
		fallback: false
	}
}
