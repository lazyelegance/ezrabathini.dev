import React from 'react'
import { join } from 'ramda'
import { Text } from 'rebass'
import Section from './Section'

const skills = ['blue', 'red', 'fdlsjfds', 'yell']

export default function Skills() {
  return (
    <Section title={'Key Skills'}>{skills.length > 0 ? <Text variant="custom" color="sicklyYellow">{`[${join(', ', skills)}]`}</Text> : <div></div>}</Section>
  )
}
