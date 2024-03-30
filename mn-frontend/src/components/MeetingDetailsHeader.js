import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { toggleMeetingDetails } from '../utils/DrawerConfig';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function MeetingDetailsHeader({meetingTopic, meetingDate}) {

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
            {meetingTopic}
          </Typography>
          <Typography level="body-sm">{meetingDate}</Typography>
        </div>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">
        <Button
          startDecorator={<EditRoundedIcon />}
          color="primary"
          variant="outlined"
          size="sm"
        >
          Edit
        </Button>
        <Button
          startDecorator={<DeleteRoundedIcon />}
          color="danger"
          variant="outlined"
          size="sm"
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
}