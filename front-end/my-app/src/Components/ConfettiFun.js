import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function ConfettiFun() {
  const { width, height } = useWindowSize(400)
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}