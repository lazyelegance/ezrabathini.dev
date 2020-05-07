import preset from '@rebass/preset'

const theme = {
  ...preset,
  text: {
    ...preset.text,
    custom: {
      fontFamily: 'monospace',
      fontWeight: 'normal',
      fontSize: [20, 20, 30],
      textAlign: 'left',
    },
  },
  colors: {
    ...preset.colors,
    primary: '#000000',
    secondary: '#ffffff',
    steel: '#868a91',
    brightMagenta: '#fd23df',
    robinsEgg: '#65f5fe',
    dodgerBlue: '#3d83fc',
    sicklyYellow: '#d8ed32',
    grapefruit: '#fd5f57',
    mango: '#febb2f',
    algaeGreen: '#27c93f',
    algaeGreenTwo: '#1ec740',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'AndaleMono, monospace',
  },
}

export default theme
