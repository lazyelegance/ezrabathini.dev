import React from 'react'
import { Box, Text } from 'rebass'

function Description() {
  return (
    <Box px={10}>
      <Box display="inline-block">
        <Text py={10} fontFamily="monospace" fontSize={[5, 10, 20]} fontWeight="bold" color="secondary" textAlign="left">
          {'Mobile Developer.'}
        </Text>
        <Text py={10} fontFamily="monospace" fontSize={[5, 10, 20]} fontWeight="bold" color="primary" textAlign="left">
          {'Auckland, New Zealand.'}
        </Text>
      </Box>
    </Box>
  )
}

export default Description
