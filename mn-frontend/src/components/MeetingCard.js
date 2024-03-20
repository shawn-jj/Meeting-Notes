'use client'

import React, { useEffect, useState } from 'react'
import { 
  Stack, 
  Text, 
  Button,
  Collapse,
  Avatar, 
  AvatarGroup,
} from '@chakra-ui/react'
import { loadAttendeesByMeetingID } from "../services/Client.js"

export default function MeetingCard({meetingID, meetingName, meetingNote, meetingDate}) {
  
  // Variables for collapsible paragraphs 
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  // Variables for getting attendees
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {

    loadAttendeesByMeetingID(meetingID).then(res => {
      setAttendees(res.data)
    });

  }, []);
  
  return (
    <Stack p="4" boxShadow="sm" m="4" borderRadius="lg" backgroundColor="white">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{meetingName}</Text>
        <Text>{meetingDate}</Text>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        
        {/* Collapsible paragraphs to display meeting notes*/}
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          <Collapse startingHeight={20} in={show}>
            {meetingNote}
          </Collapse>
          <Button size='sm' onClick={handleToggle} mt='1rem'>
            Show {show ? 'Less' : 'More'}
          </Button>
        </Text>

        {/* Attendees images */}
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          Attendees
          <AvatarGroup size='sm' max={2}>
            {
              attendees.map( (attendee, index) => (
                <Avatar key={index} name={attendee.name} src='' /> // edit src to add image
              ))
            }
          </AvatarGroup>
        </Text>
        
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="cyan">
            View Details
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}