import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function MeetingStatistics() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Meetings this week
      </Typography>

      <Typography component="p" variant="h3">
        4
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        25 March - 29 March
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View meetings
        </Link>
      </div>
    </React.Fragment>
  );
}