import Input from "../Shared/Input";
import { PiScanBold } from "react-icons/pi";

export default function AuthSection() {
  return (
    <div className="w-96 rounded-2xl shaddow overflow-hidden">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <Input />
          <Input />
        </div>
        <div className="flex mb-5 items-center gap-2 text-xs mt-4">
          <div className="h-6 w-6 rounded border-2 border-blue-500 grid place-content-center"></div>
          <p>Remember User ID</p>
        </div>
        <button className="w-full bg-[#056DAE] mt-3 text-white font-semibold rounded-md shadow-md py-2.5">
          Sign On
        </button>
        <div className="flex mt-4 text-sm items-center justify-between gap-4">
          <div className="flex gap-2">
            <span className="text-[#056DAE] underline">Register</span>
            <span>/</span>
            <span className="text-[#056DAE] underline">Activate</span>
          </div>
          <div className="flex gap-2">
            <span>Forgot</span>
            <span className="text-[#056DAE] underline">User ID</span>
            <span>or</span>
            <span className="text-[#056DAE] underline">Password</span>
          </div>
        </div>
      </div>
      <p className="py-3.5 bg-[rgb(240_245_247)] gap-1 flex items-center justify-center">
        <PiScanBold className="text-[#056DAE] text-xl"/>
        <span className="font-bold text-[#056DAE]">Passwordless Sign On</span>
      </p>
    </div>
  );
}
