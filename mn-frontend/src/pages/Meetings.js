import * as React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MeetingTable from '../components/MeetingTable';
import MeetingList from '../components/MeetingList';


export default function Meetings() {

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

        <Header /> {/* The Header is for Mobile  */}
        <Sidebar currentPage="Meetings"/>

        {/* Page header */}
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2" component="h1">
              Meetings
            </Typography>

            <Button
              color="primary"
              startDecorator={<AddRoundedIcon />}
              size="sm"
            >
              Add a new meeting
            </Button>
          </Box>

          {/* Display meeting data */}
          <MeetingTable />
          <MeetingList /> {/* The MeetingList is for Mobile  */}

        </Box>
      </Box>
    </CssVarsProvider>
  )
}