import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';

import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

import MeetingForm from './MeetingForm';
import SnackbarWithDecorators from './SnackbarWithDecorators';

export default function MeetingFormButton({ loadMeetingData, color, variant, startDecorator, size, name, people, attendees, meeting }) {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        color={color}
        variant={variant}
        startDecorator={startDecorator}
        size={size}
        onClick={() => setOpen(true)}
      >
        {name}
      </Button>

      <Drawer
        anchor="right"
        size="lg"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >

        <MeetingForm
          name={name}
          people={people}
          attendees={attendees}
          meeting={meeting}
          setOpen={setOpen}
          setSnackbarOpen={setSnackbarOpen}
          loadMeetingData={loadMeetingData}
        />
      </Drawer>
      {
        snackbarOpen && (
          <SnackbarWithDecorators
            startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
            color="success"
            message="Your note was saved successfully." 
          />
        )
      }
    </React.Fragment>
  );
}
