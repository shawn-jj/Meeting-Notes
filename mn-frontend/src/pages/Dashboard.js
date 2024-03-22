import React from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chart from '../components/Chart';
import SidebarWithHeader from '../components/SidebarWithHeader';
import MeetingDataGrid from '../components/MeetingDataGrid';
import MeetingStatistics from '../components/MeetingStatistics';

export default function Dashboard() {
  return (
    <div>
      <SidebarWithHeader pageName={"Dashboard"}>

        {/* Today's meeting */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>

        {/* Meetings this week */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <MeetingStatistics />
          </Paper>
        </Grid>

        {/* Recent meetings */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 470,
            }}>
            <MeetingDataGrid />
          </Paper>
        </Grid>

      </SidebarWithHeader>
    </div>
  )
}
