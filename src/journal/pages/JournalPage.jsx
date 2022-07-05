import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { JornalLayout } from '../layout/JornalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JornalLayout>
      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView  */}
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position:'fixed',
          right:50,
          bottom: 50,
        }}
      >
      <AddOutlined sx={{fontSize:30}}/>

      </IconButton>

    </JornalLayout>
  )
}
