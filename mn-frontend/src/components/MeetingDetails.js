import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import MeetingDetailsHeader from './MeetingDetailsHeader';


export default function MeetingDetails({ meeting }) {

  // Havn't selected a meeting to read
  if (meeting.meetingID == null) {
    return (
      <Sheet
        sx={{
          height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.level1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            minHeight: 0,
            px: 2,
            py: 50,
            overflowY: 'scroll',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography level="title-lg">Select an item to read</Typography>
          <Typography level="body-md">Nothing is selected</Typography>

        </Box>
      </Sheet>
    )
  }


  else {
    return (
      <Sheet
        sx={{
          height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.level1',
        }}
      >
        <MeetingDetailsHeader
          meetingTopic={meeting.meetingTopic}
          meetingDate={meeting.meetingDate}
        />
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            minHeight: 0,
            px: 2,
            py: 3,
            overflowY: 'scroll',
            flexDirection: 'column',
          }}
        >
  
          <Typography>{meeting.meetingNote}</Typography>
  
        </Box>
      </Sheet>
    )
  }


}