// import { ThemeOptions } from "@mui/material/styles";

import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
  interface Palette {
    textDark?: PaletteColor
    textLight?: PaletteColor
    pink: PaletteColor
    teal: PaletteColor
  }
  interface PaletteOptions {
    textDark?: PaletteColorOptions
    textLight?: PaletteColorOptions
    pink: PaletteColorOptions
    teal: PaletteColorOptions
  }
}
