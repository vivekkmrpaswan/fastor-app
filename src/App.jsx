import { Route, Routes } from 'react-router-dom'
import SignUp from './screens/SignUp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  )
}
