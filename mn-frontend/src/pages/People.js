import React, { useEffect, useState } from 'react'

import Autocomplete from '@mui/joy/Autocomplete';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Sheet from '@mui/joy/Sheet';

import SearchIcon from '@mui/icons-material/Search';

import PeopleCard from '../components/PeopleCard';
import SidebarWithHeader from '../components/SidebarWithHeader';
import { loadPeople } from '../utils/Client';

export default function People() {

  // Variables for getting people
  const [people, setPeople] = useState([]);

  useEffect(() => {

    loadPeople().then(res => {
      setPeople(res.data)
    })

  }, []);

  const peopleSearchBar = () => (
    <React.Fragment>
      {/* For mobile display */}
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: { xs: 'flex', sm: 'none' },
          my: 1,
          gap: 1,
        }}
      >
        <Autocomplete
          sx={{ flexGrow: 1 }}
          multiple
          placeholder="Search"
          startDecorator={<SearchIcon />}
          limitTags={3}
          options={people}
          getOptionLabel={(option) => option.name}
        />
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
          <FormLabel>Search for people</FormLabel>
          <Autocomplete
            multiple
            placeholder="Search"
            startDecorator={<SearchIcon />}
            limitTags={5}
            options={people}
            getOptionLabel={(option) => option.name}
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

      {
        people.map((person, index) => (
          <PeopleCard key={index} {...person} />
        ))
      }

    </SidebarWithHeader>
  )
}
