import React from 'react'
import { Flex, Box, Text } from 'rebass'

export default function Header() {
  return (
    <Flex
      sx={{
        backgroundColor: 'primary',
      }}>
      <Box px={[10, 30, 40]} py={[10, 30, 40]}>
        <Text py={10} variant="custom" color="brightMagenta">
          {'Hi, I am Ezra'}
        </Text>
        <Text pt={10} variant="custom" color="robinsEgg">
          {'Front End Developer.'}
        </Text>
        <Text py={10} variant="custom" color="robinsEgg">
          {'Based in Auckland, NZ'}
        </Text>
      </Box>
    </Flex>
  )
}
