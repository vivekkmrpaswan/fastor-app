import Back from "../assets/backarrow.svg";
import Phone from "../assets/phoneIcon.svg";
import Wallet from "../assets/walletIcon.svg";
import BackSpace from "../assets/backspaceIcon.svg";
import Less from "../assets/lessIcon.svg";
import Add from "../assets/addIcon.svg";
import Radio1 from "../assets/radio1Icon.svg";
import Radio2 from "../assets/radio2Icon.svg";

export const BackArrow = () => (
  <img src={Back} alt="backarrow" />
)

export const PhoneIcon = () => (
 <img src={Phone} alt="PhoneIcon" />
)

export const WalletIcon = () => (
  <img src={Wallet} alt="WalletIcon" />
)

export const BackspaceIcon = () => (
  <img src={BackSpace} alt="backspace" />
)

export const MinusCircle = () => (
  <img src={Less} alt="minusIcon" />
)

export const PlusCircle = () => (
  <img src={Add} alt="addIcon" />
)

export const RadioIcon = ({ checked }) => (
  <img
    src={checked ? Radio2 : Radio1}
    alt={checked ? "Selected" : "Not selected"}
  />
);

