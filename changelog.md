# Description

This change log records the update history

# Next step

- Implement github action to autimatic deploy process
- Implement auto scaling group of EC2 instance(s) on ECS
- Implement register function
- Refactore people page into groups page
- Store/display meeting notes in reach text instead of plain text

# Work done

- Deolyed the frontend to AWS Amplify through Github repository
- Run the docker image on EC2 instance
- Created an Elastic Container Service (ECS) cluster with an EC2 instance running on it
- Created AWS Elastic Beanstalk application to host ECS
- Created and connected to MySQL database on EC2 instance based on AWS RDS
- Packaged the backend source code into docker image, and pushed it to docker hub (jib, maven package)
- Moved update history to changelog.md
- Created landing page, and linked it to login page
- Implemented logout function
- Implemented display user information on sidebar
- Implement automatic page switching before/after user logs in (React Router)
  - If a non-logged-in user accesses the website, jump to the login page.
  - If a logged-in user accesses the login page, jump to main pages.
- Implemented remember user or not using localStorage/sessionStorage to store user data
- Implemented store/fetch data of logged in user to/from local storage
- Implemented login function
- Created login page
- Add exception handling for clinet requests
- Optimized text and button display in people page
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


# Known bug
- Having trouble to run the AWS EC2 instance
  - The instance dies after a while
- loadMeetingData is not a function at MeetingForm.js:81:1
  - Temporary fix: disable loadMeetingData() when saving the edited note
  - Refreshing the page to reload data