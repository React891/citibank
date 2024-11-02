import { VscTelescope } from "react-icons/vsc";

export default function Feedback() {
  return (
    <div className="flex justify-between w-[95%] pt-14 mx-auto items-center">
        <img src="https://online.citi.com/CBOL/IA/Angular/assets/citiredesign-footer.svg" className="translate-y-4" alt="" />
        <p className="px-6 py-3 rounded-t-lg text-[13px] bg-gray-600 text-white fixed bottom-1 right-10"><VscTelescope className="inline "/> Feeback</p>
    </div>
  )
}
