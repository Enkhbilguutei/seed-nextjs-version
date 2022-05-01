import React from 'react'
import { useRouter } from 'next/router';
import PageLayout from 'layout/page-layout';
import { Typography } from '@mui/material';
import { Projects } from 'api/project';

export default function ProjectID() {
    const router = useRouter()
    const [projectData, setProjectData] = React.useState<any>(null);
    const { projectid } = router.query
    
    React.useEffect(() => {
        Projects.map((item: any) => {
            if (item._id === projectid)
                setProjectData(item);
        })
    }, [projectid])

    return (
        <PageLayout>
            <Typography variant='h4'>{projectData ? projectData.title : 'No data found'}</Typography>
        </PageLayout>
    )
}