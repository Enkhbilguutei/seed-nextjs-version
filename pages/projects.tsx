import Box from '@mui/material/Box'
import PageLayout from 'layout/page-layout'

import ProjectsList from 'components/page/projects/projects-list'

export default function ProjectsPage() {
	return (
		<PageLayout>
			<Box sx={{ backgroundColor: '#edf9f3' }}>
				<ProjectsList />
			</Box>
		</PageLayout>
	)
}
