import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import Keypad from "../components/Keypad";
import PrimaryButton from "../components/PrimaryButton";
import { BackArrow } from "../components/Icons";

export default function SignUp() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState("");

  return (
    <div className="phone">
      <StatusBar />

      <div className="flex-1 px-5 pt-3.5 flex flex-col">
        <button
          type="button"
          aria-label="Back"
          className="text-brand w-6 h-6 mt-0.5"
          onClick={() => navigate(-1)}
        >
          <BackArrow />
        </button>

        <h1 className="mt-5.5 text-[24px] leading-7.5 font-bold">
          Sign Up to Fastor
        </h1>
        <p className="mt-2.5 text-[14px] leading-5.25 text-subtle">
          Let us know your mobile number and we will send you an OTP for
          verification.
        </p>

        <div className="mt-[52px] h-[48px] rounded-[6px] border border-[#C7C7C7] bg-[#F5F5F5] flex items-center px-5 text-[16px]">
          <span className="text-[16px] leading-[12px] font-bold text-[#292E39]">
            +91
          </span>
          <span className="ml-3 w-px h-[14px] bg-[#FB7632]" />
          <span className="ml-[44px] text-[#292E39]">-</span>
          <input
            autoFocus
            type="tel"
            inputMode="none"
            maxLength={10}
            value={digits}
            onChange={(e) =>
              setDigits(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="00000"
            aria-label="Mobile number"
            className="ml-2 flex-1 min-w-0 bg-transparent outline-none text-[#292E39] caret-[#FB7632] placeholder:text-[#A4A5B2]"
          />
        </div>

        <div className="mt-auto pb-[10px]">
          <PrimaryButton onClick={() => navigate("/otp")}>
            Get OTP
          </PrimaryButton>
          <p className="mt-[10px] text-center text-[9px] text-subtle">
            By clicking, I accept the{" "}
            <span className="font-semibold text-ink">
              Terms &amp; Conditions
            </span>{" "}
            and <span className="font-semibold text-ink">Privacy Policy</span>
          </p>
        </div>
      </div>

      <Keypad
        onDigit={(d) => setDigits((v) => (v.length < 10 ? v + d : v))}
        onBackspace={() => setDigits((v) => v.slice(0, -1))}
      />
    </div>
  );
}
