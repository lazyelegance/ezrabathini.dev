import React from 'react'
import { Box, Flex } from 'rebass'

const Dot = ({ color }: { color: string }) => (
  <Box
    sx={{
      width: [15, 15, 30],
      height: [15, 15, 30],
      borderWidth: [7.5, 7.5, 15],
      borderColor: color,
      borderStyle: 'solid',
      borderRadius: [7.5, 7.5, 15],
      margin: [2, 2, 10],
    }}></Box>
)

Dot.defaultProps = {
  color: 'grapefruit',
}

function Dots() {
  return (
    <Flex px={[10, 30, 40]} py={[30, 60, 100]} bg="primary">
      <Dot color="grapefruit" />
      <Dot color="mango" />
      <Dot color="algaeGreen" />
    </Flex>
  )
}

export default Dots
