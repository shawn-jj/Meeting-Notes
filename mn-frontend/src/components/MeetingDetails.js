import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';

import MeetingDetailsHeader from './MeetingDetailsHeader';
import AvatarGroupWithNumber from './AvatarGroupWithNumber';

export default function MeetingDetails({ meeting, people, attendees, loadMeetingData }) {

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
          meeting={meeting}
          people={people}
          attendees={attendees}
          loadMeetingData={loadMeetingData}
        />

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            minHeight: 0,
            pl: 1,
            pt: 1,
            flexDirection: 'column',
          }}
        >

          <Card
            variant="outlined"
            sx={{
              px: 3,
              py: 3,
              maxHeight: 'max-content',
              maxWidth: '100%',
              height: '100%',
              overflowY: 'scroll',
            }}
          >

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >

            
              <Typography level="title-md">
                Attendees:
                <Box>
                <AvatarGroupWithNumber
                  people={attendees}
                  maxNum="30"
                />
                </Box>
              </Typography>

              <Box>
                <Typography level="title-md">
                  Location:
                </Typography>

                <Typography level="body-md">
                  {meeting.location}
                </Typography>
              </Box>
            </Grid>

            <Typography level="title-md">
              Notes:
            </Typography>
            <Typography> {meeting.meetingNote} </Typography>

          </Card>
        </Box>
      </Sheet>
    )
  }


}