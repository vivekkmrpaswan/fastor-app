import { Route, Routes } from 'react-router-dom'
import SignUp from './screens/SignUp'
import Otp from './screens/Otp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  )
}
