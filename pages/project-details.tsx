import PageLayout from 'layout/page-layout'
import FundingInfo from 'components/project-details/funding-Info'
import MainDetails from 'components/project-details/Main-details'
import Rewards from 'components/project-details/rewards'
import Comments from 'components/project-details/comments'
import { Container, Grid } from '@mui/material'

export default function projectDetails() {
	return (
		<PageLayout>
			<Container sx={{ my: 5 }}>
				<Grid container spacing={10}>
					<Grid item xs={6}>
						<MainDetails />
					</Grid>
					<Grid item xs={6}>
						<FundingInfo />
						<Rewards />
					</Grid>
				</Grid>
			</Container>
		</PageLayout>
	)
}
