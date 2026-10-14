import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import Keypad from '../components/Keypad'
import PrimaryButton from '../components/PrimaryButton'
import { BackArrow } from '../components/Icons'

export default function Otp() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  const boxes = Array.from({ length: 6 }, (_, i) => code[i] ?? '')

  const Box = ({ value, active }) => (
    <div
      className={`w-9 h-[46px] border rounded-[4px] flex items-center justify-center text-[20px] ${
        active ? 'border-gray-400' : 'border-gray-300'
      }`}
    >
      {value || (active ? <span className="w-px h-[18px] bg-brand caret-blink" /> : '')}
    </div>
  )

  return (
    <div className="phone">
      <StatusBar />

      <div className="flex-1 px-5 pt-[14px] flex flex-col">
        <button
          type="button"
          aria-label="Back"
          className="text-brand w-6 h-6 mt-[2px]"
          onClick={() => navigate(-1)}
        >
          <BackArrow className="w-[22px] h-[22px]" />
        </button>

        <h1 className="mt-[28px] text-[24px] leading-[30px] font-bold">6-digit code</h1>
        <p className="mt-[10px] text-[14px] leading-[21px] text-subtle">
          Please enter the code we&apos;ve sent to
        </p>
        <p className="text-[14px] leading-[1.5] font-bold text-[#292E39]">+91 12345 67890</p>

        <div className="mt-[34px] flex items-center gap-[10px]">
          {boxes.slice(0, 3).map((v, i) => (
            <Box key={i} value={v} active={i === code.length} />
          ))}
          <span className="w-[5px] h-px bg-ink mx-[6px]" />
          {boxes.slice(3).map((v, i) => (
            <Box key={i + 3} value={v} active={i + 3 === code.length} />
          ))}
        </div>

        <p className="mt-[14px] text-[14px]">
          I didn&apos;t receive a code <span className="text-brand">(00:30)</span>
        </p>

        <div className="mt-auto pb-[28px]">
          <PrimaryButton onClick={() => navigate('/home')}>Continue</PrimaryButton>
        </div>
      </div>

      <Keypad
        onDigit={(d) => setCode((v) => (v.length < 6 ? v + d : v))}
        onBackspace={() => setCode((v) => v.slice(0, -1))}
      />
    </div>
  )
}