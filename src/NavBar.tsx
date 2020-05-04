import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'

export default function NavBar() {
  return (
    <Flex p={4} color="white" bg="primary" alignItems="center">
      <Text p={2} fontWeight="bold"></Text>
      <Box mx="auto" />
      <Link variant="nav" color="red" href="https://github.com/lazyelegance">
        Github
      </Link>
      <Link variant="nav" color="red" href="mailto:ezrabathini@gmail.com">
        Email
      </Link>
      <Link variant="nav" color="red" href="#!">
        Logo
      </Link>
    </Flex>
  )
}
