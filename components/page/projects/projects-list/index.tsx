import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import ProjectItem from 'components/common/project-item'

import ProjectGrid1 from 'assets/project/project-grid-01.jpg'
import ProjectGrid2 from 'assets/project/project-grid-02.jpg'
import ProjectGrid3 from 'assets/project/project-grid-03.jpg'
import ProjectGrid4 from 'assets/project/project-grid-04.jpg'
import ProjectGrid5 from 'assets/project/project-grid-05.jpg'
import ProjectGrid6 from 'assets/project/project-grid-06.jpg'

export default function ProjectList() {
	return (
		<Container>
			<Grid container sx={{ py: 8 }} rowSpacing={4}>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid1}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid2}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid3}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid4}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid5}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid6}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid4}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid5}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={4}>
					<ProjectItem
						image={ProjectGrid6}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="/project-details"
						author="EKU"
						href="/project-details"
					/>
				</Grid>
				<Grid item xs={12} textAlign="center">
					<Button variant="contained" disabled>
						<ExpandCircleDownIcon sx={{ mr: 1 }} />
						Нэмж үзэх
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}
