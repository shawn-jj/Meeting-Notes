import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function InputBoxPeople() {
  return (
    <FormControl size="sm">
      <FormLabel>Attendees</FormLabel>
      <Autocomplete
        multiple
        placeholder="Select attendees"
        limitTags={5}
        options={peopleList}
        getOptionLabel={(option) => option.name}
      />
    </FormControl>

  );
}

const peopleList = [
  { name: 'people1', email: 123 },
  { name: 'people2', email: 123 },
  { name: 'people3', email: 123 },
];
