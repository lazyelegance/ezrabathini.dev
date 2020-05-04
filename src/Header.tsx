import React from 'react'
import { Flex, Box, Text } from 'rebass'

export default function Header() {
  return (
    <Flex
      sx={{
        backgroundColor: 'primary', // theme.colors.primary
      }}>
      <Box px={[10, 30, 40]} py={[30, 60, 100]}>
        <Text py={10} fontFamily="monospace" fontSize={[10, 30, 40]} fontWeight="normal" color="slateGrey" textAlign="left">
          {'Hi, I am'}
        </Text>
        <Text fontFamily="monospace" fontSize={[30, 50, 100]} fontWeight="bold" color="denim" textAlign="left">
          Ezra
        </Text>
        <Text pt={10} fontFamily="monospace" fontSize={[10, 30, 40]} fontWeight="normal" color="darkPeach" textAlign="left">
          {'Mobile Developer.'}
        </Text>
        <Text py={10} fontFamily="monospace" fontSize={[10, 25, 30]} fontWeight="normal" color="steel" textAlign="left">
          {'Based in Auckland, NZ'}
        </Text>
      </Box>
    </Flex>
  )
}
