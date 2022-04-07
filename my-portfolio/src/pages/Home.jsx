import React from 'react';

// import ResponsiveAppBar from '../components/AppBar';
import Homepage from './Homepage';
import MessageFil from './MessageFil';
// import NewHome from './NewHome';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

export default function Home() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Homepage />
      <MessageFil />
      <Profile />
      <Skills />
      <Projects />
    </>

  );
}
