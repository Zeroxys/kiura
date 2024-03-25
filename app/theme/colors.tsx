
type PaletteItem = {
  lightest: string;
  light: string;
  base: string;
  dark: string;
};

export type PaletteType = {
  gray:   PaletteItem;
  blue:   PaletteItem;
  green:  PaletteItem;
  cyan:   PaletteItem;
  black: PaletteItem;
  white: PaletteItem;
};

function Palette(): PaletteType {
  return {
    black: {
      lightest:'',
      light:'',
      base:'rgb(52 49 49)',
      dark:'#000'
    },
    white: {
      lightest:'',
      light:'',
      base:'#fff',
      dark:''
    },
    gray: {
      lightest:'',
      light:'#e5e5e5',
      base:'#1f306e',
      dark:''
    },
    blue: {
      lightest:'',
      light:'',
      base:'#173B48',
      dark:''
    },
    green: {
      lightest: '',
      light: '',
      base: '#4CC671',
      dark: ''
    },
    cyan: {
      lightest:'',
      light: '',
      base:'#0594A4',
      dark: ''
    }
  }
}


export const colors = Palette()
