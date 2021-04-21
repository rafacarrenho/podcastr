const MyPallet = {
  white: '#fff',
  whiteDark: '#fafafa',
  primaryLight: '#00CC1F',
  primary: '#00b11b',
  primaryDark: '#008F15',
  greyLight: '#dbdddb',
  grey: '#bdbfbd',
  greyDark: '#636664',
  blackLight: '#292b29',
  black: '#171B17',
  blackDark: '#171917',
  redLight: '#e04141',
  red: '#D82B2B',
  redDark: '#C30101',
  yellowLight: '#F8ED62',
  yellow: '#E9D700',
  yellowDark: '#DAB600',
  blueLight: '#01AEB2',
  blue: '#0A93C9',
  blueDark: '#0A5CBF'
}

export const lightTheme = {
  theme: 'light',
  colors: {
    header: MyPallet.white,
    details: MyPallet.greyLight,
    background: MyPallet.primary,
    backgroundDark: MyPallet.blueDark,
    backgroundSecondary: MyPallet.whiteDark,
    backgroundSecondaryDark: MyPallet.greyLight,
    text: MyPallet.blackLight,
    darkMode: MyPallet.blackDark,
    reverseColorText: MyPallet.white,
    ...MyPallet
  }
}

export const darkTheme = {}
