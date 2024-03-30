/**
 * Sidebar Config
 */
export function openSidebar() {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
  }
  
  export function closeSidebar() {
    if (typeof window !== 'undefined') {
      document.documentElement.style.removeProperty('--SideNavigation-slideIn');
      document.body.style.removeProperty('overflow');
    }
  }
  
  export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const slideIn = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--SideNavigation-slideIn');
      if (slideIn) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }
  }

  /**
   * MeetingDetails Config
   */
  export function openMeetingDetails() {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.setProperty('--MeetingDetails-slideIn', '0');
    }
  }
  
  export function closeMeetingDetails() {
    if (typeof window !== 'undefined') {
      document.documentElement.style.removeProperty('--MeetingDetails-slideIn');
      document.body.style.removeProperty('overflow');
    }
  }
  
  export function toggleMeetingDetails() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const slideIn = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--MeetingDetails-slideIn');
      if (slideIn) {
        closeMeetingDetails();
      } else {
        openMeetingDetails();
      }
    }
  }