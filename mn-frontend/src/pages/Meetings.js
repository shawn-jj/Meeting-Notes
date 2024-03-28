import * as React from 'react';

import Button from '@mui/joy/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import MeetingTable from '../components/MeetingTable';
import MeetingList from '../components/MeetingList';
import SidebarWithHeader from '../components/SidebarWithHeader';


export default function Meetings() {

  const addMeetingButton = () => (
    <React.Fragment>
      <Button
        color="primary"
        startDecorator={<AddRoundedIcon />}
        size="sm"
      >
        Add a new meeting
      </Button>
    </React.Fragment>
  );

  return (
    <SidebarWithHeader
      pageName="Meetings"
      HeaderAdditionalComponent={addMeetingButton()}
    >

      {/* Display meeting data */}
      <MeetingTable />
      <MeetingList /> {/* The MeetingList is for Mobile  */}

    </SidebarWithHeader>
  )
}