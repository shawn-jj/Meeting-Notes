import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Textarea from '@mui/joy/Textarea';

export default function MeetingFormButton({ color, variant, startDecorator, size, name, people, attendees, meeting }) {
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
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>{name}</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />


          <DialogContent
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel>Meeting Topic</FormLabel>
              <Input 
                value={meeting == null ? "" : meeting.meetingTopic}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Meeting Date</FormLabel>
              <Input 
                value={meeting == null ? "" : meeting.meetingDate}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input 
                value={meeting == null ? "" : meeting.location}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Start Time</FormLabel>
              <Input 
                value={meeting == null ? "" : meeting.startTime}
              />
            </FormControl>

            <FormControl>
              <FormLabel>End Time</FormLabel>
              <Input 
                value={meeting == null ? "" : meeting.endTime}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel>Attendees</FormLabel>
              <Autocomplete
                multiple
                options={people}
                getOptionLabel={(option) => option.name}
                value={attendees}
              />
            </FormControl>

            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel>Meeting Note</FormLabel>
              <Textarea
                minRows={10}
                size="md"
                variant="outlined"
                value={meeting == null ? "" : meeting.meetingNote}
              />
            </FormControl>


          </DialogContent>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row-reverse"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
