import React from 'react'
import { Text, Flex, Box } from 'rebass'
import Section from './Section'
import { map, sort, sortBy, prop, reverse } from 'ramda'

const workHistory = [
  {
    company: 'IBM India Pvt Ltd',
    start: 2007,
    end: 2010,
    role: 'Application Developer',
  },
  {
    company: 'IBM New Zealand',
    start: 2010,
    end: 2012,
    role: 'Senior System Enginner',
  },
  {
    company: 'Vodafone New Zealand',
    start: 2012,
    role: 'Application Developer',
  },
]

export default function WorkHistory() {
  return (
    <Section title={'Work History'}>
      <Flex flexDirection="column">
        {map((item) => {
          return <WorkHistoryItem item={item} />
        }, reverse(sort(prop('start'), workHistory)))}
      </Flex>
    </Section>
  )
}

function WorkHistoryItem({ item }) {
  return (
    <Box py={10}>
      <Text pl={50} py={10} variant="custom" color="brightMagenta">
        {item.company}
      </Text>
      <Text pl={50} py={10} variant="custom" color="white">
        {item.role}
      </Text>
      <Text pl={50} py={10} variant="custom" color="white">
        {`${item.start} to ${item.end || 'Present'}`}
      </Text>
      <Flex pl={50}>
        <Text py={10} pl={50} variant="custom" color="sicklyYellow">
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        </Text>
      </Flex>
    </Box>
  )
}
