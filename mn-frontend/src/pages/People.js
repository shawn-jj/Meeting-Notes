import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';

import SearchIcon from '@mui/icons-material/Search';

import PeopleCard from '../components/PeopleCard';
import SidebarWithHeader from '../components/SidebarWithHeader';
import { loadPeople } from '../utils/Client';

export default function People() {

  // Variables for getting people
  const [people, setPeople] = useState([]);
  const [peopleDisplay, setPeopleDisplay] = useState([]);

  useEffect(() => {

    loadPeople().then(res => {
      setPeople(res.data);
    }).catch(err => {
      console.log(err);
    });
    
  }, []);

  const peopleSearchBar = () => (
    <React.Fragment>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: { xs: '120px', md: '160px' },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for people</FormLabel>
          <Autocomplete
            multiple
            placeholder="Search"
            startDecorator={<SearchIcon />}
            options={people}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setPeopleDisplay(value)}
            isOptionEqualToValue={(option, value) => option.peopleID === value.peopleID}
          />
        </FormControl>
      </Box>
    </React.Fragment>
  );

  return (
    <SidebarWithHeader
      pageName="People"
      PageAdditionalComponent={peopleSearchBar()}
    >

      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
          overflowY: "auto"
        }}
      >
        {
          // display selected people
          peopleDisplay.length != 0 && (peopleDisplay.map((person, index) => (
            <PeopleCard
              key={index}
              person={person}
            />
          )))
        }
        {
          // when no one is selected, display all people
          peopleDisplay.length == 0 && (people.map((person, index) => (
            <PeopleCard
              key={index}
              person={person}
            />
          )))
        }
      </List>

    </SidebarWithHeader>
  )
}
