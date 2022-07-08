import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useChekcAuth } from '../hooks'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

  const { status } = useChekcAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        status==='authenticated'
        ? <Route path='/*' element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login'/>} />
      
    </Routes>
  )
}