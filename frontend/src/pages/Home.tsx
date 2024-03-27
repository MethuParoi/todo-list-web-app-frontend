import React from 'react'
import Background from '../components/Background'
import Foreground from '../components/Foreground'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Background />

      <div className="grid grid-cols-4 gap-4">
        <div>
          <Navbar />
        </div>
        <div className="pt-10 px-24">
          <div className="text-white text-[2rem] pb-8 font-semibold">TO DO</div>
          <Foreground />
        </div>

        <div className="pt-10 px-24">
          <div className="text-white text-[2rem] pb-8 font-semibold">DOING</div>
          <Foreground />
        </div>

        <div className="pt-10 px-24">
          <div className="text-white text-[2rem] pb-8 font-semibold">DONE</div>
          <Foreground />
        </div>
      </div>
    </div>
  );
}

export default Home