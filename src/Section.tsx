import * as React from 'react'
import { Flex, Box, Text } from 'rebass'

export default function Section({ title, children }) {
  return (
    <Flex
      sx={{
        backgroundColor: 'primary',
      }}>
      <Box p={[10, 30, 40]}>
        <Text py={10} variant="custom" color="dodgerBlue">
          {`// ${title}`}
        </Text>
        {children}
      </Box>
    </Flex>
  )
}
