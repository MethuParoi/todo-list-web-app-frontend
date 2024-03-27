import React from 'react'
import home from '../assets/home.svg';
import notification from '../assets/notification.svg';
import analytics from '../assets/analytics.svg';
import userProfile from '../assets/userProfile.svg';
import tasks from '../assets/tasks.svg';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <div className="py-7 pl-7 w-full h-screen bg-zinc-800 text-white">

      <NavItems props1={home} props2={"Todo"} />

      <NavItems props1={tasks} props2={"Tasks"} />

      <NavItems props1={notification} props2={"Notifications"} />

      <NavItems props1={analytics} props2={"Analytics"} />

      <NavItems props1={userProfile} props2={"Profile"} />

      
    </div>
  );
}

export default Navbar