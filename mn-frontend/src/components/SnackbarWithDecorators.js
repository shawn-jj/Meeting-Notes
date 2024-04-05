import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

export default function SnackbarWithDecorators({ message }) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        variant="soft"
        color="success"
        autoHideDuration="2000"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setSnackbarOpen(false)}
            size="sm"
            variant="soft"
            color="success"
            autoHideDuration="3000" // 3 seconds
          >
            Dismiss
          </Button>
        }
      >
        {message}
      </Snackbar>
    </React.Fragment>
  );
}
