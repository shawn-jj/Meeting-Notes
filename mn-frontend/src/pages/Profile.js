import * as React from 'react';

import ProfileCard from '../components/ProfileCard';
import SidebarWithHeader from '../components/SidebarWithHeader';

export default function Profile() {
  return (
    <SidebarWithHeader
      pageName="My profile"
    >

      <ProfileCard />

    </SidebarWithHeader>
  )
}
