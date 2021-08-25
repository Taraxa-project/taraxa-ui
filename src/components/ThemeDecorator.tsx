import { ThemeProvider } from "@material-ui/core"
import React from "react"
import theme from "./theme"

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator