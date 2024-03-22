import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { loadAttendeesByMeetingID } from "../services/Client.js"

export default function MeetingCard({ meetingID, meetingName, meetingNote, meetingDate }) {

  // Variables for getting attendees
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {

    loadAttendeesByMeetingID(meetingID).then(res => {
      setAttendees(res.data)
    });

  }, []);

  // Generates the color based on the name of the person
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  // Avatar style config
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 24,
        height: 24,
      },
      children: name.includes(' ') ? name.split(' ')[0][0] + name.split(' ')[1][0] : name.split(' ')[0][0],
    };
  }

  // Calculate displayed avatars
  function clampAvatars(avatars, options = { max: 5 }) {
    const { max = 5, total } = options;
    let clampedMax = max < 2 ? 2 : max;
    const totalAvatars = total || avatars.length;
    if (totalAvatars === clampedMax) {
      clampedMax += 1;
    }
    clampedMax = Math.min(totalAvatars + 1, clampedMax);
    const maxAvatars = Math.min(avatars.length, clampedMax - 1);
    const surplus = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
    return { avatars: avatars.slice(0, maxAvatars).reverse(), surplus };
  }

  // Config max attendees to display
  const { avatars, surplus } = clampAvatars(attendees, {
    max: 5,
    total: attendees.length,
  });

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={meetingName}
          subheader={meetingDate}
        />


        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {
              // Limit the length of meeting notes
              meetingNote.length > 250 ? meetingNote.substring(0, 250) + "..." : meetingNote
            }
          </Typography>

        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="Flag">
            <OutlinedFlagIcon />
          </IconButton>

          {/* Attendees images */}
          <AvatarGroup>
            {
              avatars.map((avatar, index) => (
                <Avatar key={index} {...stringAvatar(avatar.name)} />
              ))
            }
            {!!surplus && <Avatar sx={{ width: 24, height: 24 }}>+{surplus}</Avatar>}
          </AvatarGroup>

          <Button variant="contained" sx={{ marginLeft: 'auto' }}>View</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
