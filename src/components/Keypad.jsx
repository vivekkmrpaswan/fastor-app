import { BackspaceIcon } from './Icons'

const ROWS = [
  [['1', ''], ['2', 'ABC'], ['3', 'DEF']],
  [['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO']],
  [['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ']],
]

const keyClass =
  'h-[46px] rounded-[5px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.3)] flex flex-col items-center justify-center active:bg-gray-200 select-none'

function Key({ digit, letters, onPress }) {
  return (
    <button type="button" className={keyClass} onClick={() => onPress(digit)}>
      <span className="text-[24px] leading-5.5 font-normal">{digit}</span>
      {letters && (
        <span className="text-[9px] leading-2.5 font-semibold tracking-[2px]">{letters}</span>
      )}
    </button>
  )
}

export default function Keypad({ onDigit, onBackspace }) {
  return (
    <div className="bg-keypad px-1.5 pt-1.5 pb-6.5 grid gap-2">
      {ROWS.map((row, i) => (
        <div key={i} className="grid grid-cols-3 gap-1.5">
          {row.map(([d, l]) => (
            <Key key={d} digit={d} letters={l} onPress={onDigit} />
          ))}
        </div>
      ))}
      <div className="grid grid-cols-3 gap-1.5">
        <div />
        <Key digit="0" letters="" onPress={onDigit} />
        <button
          type="button"
          aria-label="Backspace"
          className="h-11.5 flex items-center justify-center active:opacity-60"
          onClick={onBackspace}
        >
          <BackspaceIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  )
}
