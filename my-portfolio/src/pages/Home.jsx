import React from 'react';
import ResponsiveAppBar from '../components/AppBar';
import NewHome from './NewHome';
import Profile from './Profile';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <NewHome />
      <Profile />
      <h2>Home</h2>
    </>

  );
}
