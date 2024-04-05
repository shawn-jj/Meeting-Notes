# Meeting-Notes
A tool to take and manage your meeting notes

# Preview
![preview](/assets/preview-v070-1.jpg "Meetings-no-select")
![preview](/assets/preview-v080-1.jpg "Meetings")
![preview](/assets/preview-v090.jpg "Edit-meeting")
![preview](/assets/preview-v0100.jpg "People")

# Next step

- Implement login and register function with security
- Implement view more recent meetings in people page
- Store/display meeting notes in reach text instead of plain text

# Work done

- Implemented recent meetings display in people page to show 4 recent meetings
- Refactored people page
- Implemented filter on people page
- Implemented automatically fill in the current date and time when creating meeting notes
- Added snackbar prompt when add/edit/delete meeting notes
- Removed HTML form in meetingForm
- Implemented meeting notes display in descending date order
- Implemented add meeting attendees function
- Implemented add/edit/delete meeting notes function
- Handled meeting notes without attendees
- Reload data when save a meeting note without reload the page by passing loadMeetingData(), and reload attendees
- Added input for selecting meeting date and time
- Added tooltips to display name of attendee avatars
- Implemented UI for new note and edit note
- Refactored meetings page again to increase display area
- Refactored meetings page
- Displayed people in people filter 
- Displayed people data as cards
- Split the APIs of People and Meetings, restructured corresponding Controller, Service and DAO
- Added Start time and end time entries to the meetings database, updated corresponding RowMapper
- Added role and password entries to the people database, updated corresponding RowMapper
- Re-add the SidebarWithHeader component to increase code reusability
- Created people page, as well as its mobile display
- Created my profile page, as well as its mobile display
- Refined design of frontend using another UI library (Joy UI)
- Separate AvatarGroup component from MeetingCard
- Refactored the frontend using another UI library (Material UI)
- Created page urls and linked pages (React Router)
- Created dashboard page
- Displayed attendees as AvatarGroup
- Displayed meeting notes as collapsible paragraphs 
- Displayed meeting data as cards
- Refined design of frontend
- Installed UI library ~~(Chakra UI)~~
- Tried to use web template but failed
- Created some backend APIs
- Connected frontend with backend (Axios)
- Connected backend with database (Spring Data JDBC)
- Created frontend (npm, React)
- Created database (MySQL)
- Created backend (Maven, SpringBoot)
