import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ProjectDetailsHeader from '/assets/project/project-details.jpg'
import Card from '@mui/material/Card'

export default function projectDetails() {
	return <Image src={ProjectDetailsHeader} alt="ProjectDetailsZurag" />
}
