export default function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`w-full h-[48px] rounded-[6px] bg-brand text-white text-[16px] font-medium tracking-[1.5px] active:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
