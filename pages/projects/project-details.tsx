import PageLayout from 'layout/page-layout'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import FundingInfo from 'components/page/project-details/funding-Info'
import MainDetails from 'components/page/project-details/Main-details'
import Rewards from 'components/page/project-details/rewards'

import ProjectDetailsHeader from '/assets/project/project-details.jpg'

export default function projectDetails() {
	return (
		<PageLayout>
			<Container sx={{ my: 3 }}>
				<Grid
					container
					spacing={10}
					sx={{ display: 'flex' }}
					alignItems="center"
				>
					<Grid item xs={6}>
						<Image src={ProjectDetailsHeader} alt="ProjectDetailsZurag" />
					</Grid>
					<Grid item xs={6}>
						<FundingInfo />
					</Grid>
				</Grid>
				<Grid container spacing={5}>
					<Grid item xs={8}>
						<MainDetails />
					</Grid>
					<Grid
						item
						xs={4}
						sx={{ maxHeight: '1191px', overflowY: 'scroll', mt: 5 }}
					>
						<Rewards />
						<Rewards />
						<Rewards />
					</Grid>
				</Grid>
			</Container>
		</PageLayout>
	)
}
