/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';

import ListDivider from '@mui/joy/ListDivider';
import MeetingListItem from './MeetingListItem';
import { loadMeetings } from "../utils/Client.js"


export default function MeetingList() {

  // Variables for getting meetings
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {

    loadMeetings().then(res => {
      setMeetings(res.data)
    })

  }, []);

  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <List
        size="sm"
        sx={{
          '--ListItem-paddingX': 0,
        }}
      >
        {
          meetings.map((meeting, index) => (
            <MeetingListItem key={index} {...meeting} />
          ))
        }
        <ListDivider />
      </List>
    </Box>
  );
}