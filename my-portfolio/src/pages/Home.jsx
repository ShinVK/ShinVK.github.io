import React from 'react';
import ResponsiveAppBar from '../components/AppBar';
import NewHome from './NewHome';
import Profile from './Profile';
import Skills from './Skills';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <NewHome />
      <Profile />
      <Skills />
    </>

  );
}
