import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { deleteMeeting, deleteMeetingAttendees } from '../utils/Client';
import SnackbarWithDecorators from './SnackbarWithDecorators';

export default function ConfirmDeleteButton({ meetingID, loadMeetingData }) {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleDelete = () => {
    deleteMeeting(meetingID).then(res => {
      deleteMeetingAttendees(meetingID).then(res => {
        loadMeetingData();
        setOpen(false);
        setSnackbarOpen(true);
      });
    }).finally(() => {
      setSnackbarOpen(false);
    });
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="danger"
        startDecorator={<DeleteRoundedIcon />}
        size="sm"
        onClick={() => setOpen(true)}
      >
        Discard
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to discard this note?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => handleDelete()}>
              Discard Note
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      {
        snackbarOpen && (
          <SnackbarWithDecorators message="Your note was deleted successfully." />
        )
      }
    </React.Fragment>
  );
}
