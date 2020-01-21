import Typography from "typography"

const options = {
  baseFontSize: "12px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Lato",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "san-serif"],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
