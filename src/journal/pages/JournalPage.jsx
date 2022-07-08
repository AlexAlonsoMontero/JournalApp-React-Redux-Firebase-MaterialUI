import { AddOutlined, ConstructionOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JornalLayout } from '../layout/JornalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {

  const { active } = useSelector(state => state.journal)

  const { isSaving } = useSelector(state => state.journal);
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JornalLayout>
      {!!active
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,

        }}
        disabled={isSaving}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JornalLayout>
  )
}
