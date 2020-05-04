import React from 'react'
import { Flex, Box, Text } from 'rebass'

export default function Section({ title, background }: { title: string; background: 'Primary' | 'Secondary' }) {
  return (
    <Flex
      sx={{
        backgroundColor: background === 'Primary' ? 'primary' : 'secondary',
      }}>
      <Box p={[10, 30, 40]}>
        <Text py={10} fontFamily="monospace" fontSize={[10, 30, 50]} fontWeight="normal" color="denim" textAlign="left">
          {title}
        </Text>
        <Text py={10} fontFamily="monospace" fontSize={[10, 25, 30]} fontWeight="normal" color="steel" textAlign="left">
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        </Text>
      </Box>
    </Flex>
  )
}
Section.defaultProps = {
  background: 'Primary',
}
