/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

import Autocomplete from '@mui/joy/Autocomplete';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';


import MeetingTableItem from './MeetingTableItem';
import { loadMeetings, loadPeople } from "../utils/Client.js"

export default function MeetingTable() {

  // Variables for getting meetings
  const [meetings, setMeetings] = useState([]);
  // Variables for getting people
  const [people, setPeople] = useState([]);


  useEffect(() => {

    loadMeetings().then(res => {
      setMeetings(res.data)
    })

    loadPeople().then(res => {
      setPeople(res.data)
    })

  }, []);

  const [open, setOpen] = React.useState(false);

  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Filter by attendees</FormLabel>
        <Autocomplete
          multiple
          placeholder="Attendees"
          limitTags={3}
          options={people}
          getOptionLabel={(option) => option.name}
        />
      </FormControl>
    </React.Fragment>
  );

  return (
    <React.Fragment>

      {/* Search Bar */}
      {/* For mobile display */}
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: { xs: 'flex', sm: 'none' },
          my: 1,
          gap: 1,
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
              <Button color="neutral" variant="outlined" onClick={() => setOpen(false)}>
                Back
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>

      {/* For PC display */}
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: { xs: 'none', sm: 'flex' },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: { xs: '120px', md: '160px' },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for meeting</FormLabel>
          <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
        </FormControl>
        {renderFilters()}
      </Box>

      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: 'none', sm: 'initial' },
          width: '100%',
          borderRadius: 'sm',
          flexShrink: 1,
          overflow: 'auto',
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '4px',
            '--TableCell-paddingX': '8px',
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 150, padding: '12px 6px' }}>Meeting Topic</th>
              <th style={{ width: 150, padding: '12px 6px' }}>Date</th>
              <th style={{ padding: '12px 6px' }}>Meeting Notes</th>
              <th style={{ width: 150, padding: '12px 6px' }}>Attendees</th>
              <th style={{ width: 50, padding: '12px 6px' }}> </th>
            </tr>
          </thead>
          <tbody>
            {
              meetings.map((meeting, index) => (
                <MeetingTableItem key={index} {...meeting} />
              ))
            }
          </tbody>
        </Table>
      </Sheet>
    </React.Fragment>
  );
}