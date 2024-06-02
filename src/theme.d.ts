// import { ThemeOptions } from "@mui/material/styles";

import { PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
  interface Palette {
    textDark?: PaletteColor
    textLight?: PaletteColor
  }
  interface PaletteOptions {
    textDark?: PaletteColorOptions
    textLight?: PaletteColorOptions
  }
}
