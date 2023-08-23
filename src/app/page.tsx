"use client"
import { AppBar, Button, Toolbar, Typography, styled } from "@mui/material";

const Stack = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2)
}))

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar><Typography variant="h5">MUI Demo</Typography></Toolbar>
      </AppBar>
      <Stack>
        <Button>Primary contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Primary disabled</Button>
      </Stack>
    </>
  );
}
