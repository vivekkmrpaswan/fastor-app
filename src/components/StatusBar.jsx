import MobileSignal from "../assets/mobilesignal.svg";
import Wifi from "../assets/wifi.svg";
import Battery from "../assets/battery.svg"

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-8 pt-[14px] h-[44px] shrink-0 text-[15px] font-bold">
      <span>9:41</span>
      <div className="flex items-center gap-[5px]">
        <img src={MobileSignal} alt="mobile signal" />
        <img src={Wifi} alt="wifi" />
        <img src={Battery} alt="battery" />
      </div>
    </div>
  )
}
