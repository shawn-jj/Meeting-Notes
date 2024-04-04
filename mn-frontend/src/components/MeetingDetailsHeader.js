import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { toggleMeetingDetails } from '../utils/DrawerConfig';
import ConfirmDeleteButton from './ConfirmDeleteButton';
import MeetingFormButton from './MeetingFormButton';

export default function MeetingDetailsHeader({ meeting, people, attendees, loadMeetingData }) {

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.body',
      }}
      py={{ xs: 2, md: 2 }}
      px={{ xs: 1, md: 2 }}
    >

      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">

        {/* Back button for mobile */}
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
          }}
          onClick={() => toggleMeetingDetails()}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <div>
          <Typography
            fontWeight="lg"
            fontSize="lg"
            component="h2"
            noWrap
          >
            {meeting.meetingTopic}
          </Typography>
          <Typography level="body-sm">{meeting.meetingDate} {meeting.startTime.substring(0, 5)}-{meeting.endTime.substring(0, 5)}</Typography>
        </div>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">

        {/* Edit button */}
        <MeetingFormButton
          color="primary"
          variant="outlined"
          startDecorator={<EditRoundedIcon />}
          size="sm"
          name="Edit"
          meeting={meeting}
          people={people}
          attendees={attendees}
        />

        {/* Delete button */}
        <ConfirmDeleteButton 
          meetingID={meeting.meetingID}
          loadMeetingData={loadMeetingData}
        />

      </Stack>
    </Stack>
  );
}