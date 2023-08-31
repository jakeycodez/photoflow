import React from 'react'
import { styled } from 'styled-components'
import { brandFont } from '../styles/fonts'

const Text = styled.p`
  ${brandFont}
  font-weight: 500;
 
`

function Home() {
  return (
    <Text></Text>
  )
}

export default Home