import * as React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import Autocomplete from '@mui/joy/Autocomplete';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import SearchIcon from '@mui/icons-material/Search';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import PeopleCard from '../components/PeopleCard';

export default function People() {
  // Temp
  const peopleList = [
    { name: 'people1', email: 123 },
    { name: 'people2', email: 123 },
    { name: 'people3', email: 123 },
  ];

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

        <Header /> {/* The Header is for Mobile  */}
        <Sidebar currentPage="People" />

        {/* Page header */}
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2" component="h1">
              People
            </Typography>
          </Box>

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
            <Autocomplete
              sx={{ flexGrow: 1 }}
              multiple
              placeholder="Search"
              startDecorator={<SearchIcon />}
              limitTags={3}
              options={peopleList}
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
                options={peopleList}
                getOptionLabel={(option) => option.name}
              />
            </FormControl>
          </Box>

          <PeopleCard />
          <PeopleCard />
          <PeopleCard />

        </Box>
      </Box>
    </CssVarsProvider>
  )
}
