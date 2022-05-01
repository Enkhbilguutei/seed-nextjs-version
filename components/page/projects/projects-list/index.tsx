import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import ProjectItem from 'components/common/project-item'

import { Projects } from 'api/project'

export default function ProjectList() {
	let showPerPage = 9

	return (
		<Container>
			<Grid container sx={{ py: 8 }} rowSpacing={4}>
				{Projects.map((Projects, index) => {
					if (index + 1 <= showPerPage) {
						return (
							<Grid item xs={4} key={index + 1}>
								<ProjectItem
									title={Projects.title}
									category={Projects.category}
									author={Projects.author}
									authorImg={Projects.authorImg}
									authorLink={`/users/${Projects.author
										.replace(/\s+/g, '-')
										.toLowerCase()}`}
									image={Projects.image}
									alt={Projects.title}
									href={Projects.url}
									date={Projects.date}
									needed={Projects.needed}
									collected={Projects.collected}
								/>
							</Grid>
						)
					}
				})}
				<Grid item xs={12} textAlign="center">
					<Button variant="contained">
						<ExpandCircleDownIcon sx={{ mr: 1 }} />
						Нэмж үзэх
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}
