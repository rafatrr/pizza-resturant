"use client"
import Countdown from 'react-countdown';
import React from 'react'


const endingDate = new Date("2025-12-10")
const CountDown = () => {
  return (
    <Countdown className='text-5xl font-bold text-yellow-300' date={endingDate}/>
  )
}

export default CountDown
