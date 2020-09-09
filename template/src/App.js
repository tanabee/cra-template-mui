import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function App() {
  const { spacing } = useTheme()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">cra-template-mui</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: spacing(2) }}>
        <Typography style={{ marginBottom: spacing(1) }} variant="h1">
          h1. Heading
        </Typography>
        <Typography style={{ marginBottom: spacing(1) }} variant="h2">
          h2. Heading
        </Typography>
        <Typography style={{ marginBottom: spacing(1) }} variant="h3">
          h3. Heading
        </Typography>
        <Typography style={{ marginBottom: spacing(1) }} variant="body1">
          body1. text
        </Typography>
        <Typography style={{ marginBottom: spacing(1) }} variant="body2">
          body2. text
        </Typography>
        <Typography style={{ marginBottom: spacing(1) }} variant="caption" component="p">
          caption. text
        </Typography>
        <a href="https://github.com/tanabee/cra-template-mui">tanabee/cra-template-mui</a>
      </div>
    </div>
  )
}
