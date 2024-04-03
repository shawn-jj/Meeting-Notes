import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import MeetingForm from './MeetingForm';

export default function MeetingFormButton({ color, variant, startDecorator, size, name, people, attendees, meeting, loadDataOfMeeting }) {
  const [open, setOpen] = React.useState(false);

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
          loadDataOfMeeting={loadDataOfMeeting}
        />

      </Drawer>
    </React.Fragment>
  );
}
