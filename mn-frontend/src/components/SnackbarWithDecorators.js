import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';

export default function SnackbarWithDecorators({ startDecorator, color, message }) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        variant="soft"
        color={color}
        autoHideDuration="2000"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={startDecorator}
        endDecorator={
          <Button
            onClick={() => setSnackbarOpen(false)}
            size="sm"
            variant="soft"
            color={color}
            autoHideDuration={3000} // 3 seconds
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
