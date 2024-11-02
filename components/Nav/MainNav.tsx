import { CiGlobe } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

export default function MainNav() {
  return (
    <div className="wrapper flex items-center justify-between">
      <div className="-translate-x-4 flex gap-3 items-center">
        <img
          src="https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg"
          alt=""
        />
        <img
          src="https://www.citi.com/CBOL/IA/Angular/assets/fdic.svg"
          alt=""
        />
      </div>

      <div className="flex gap-12 items-center">
        <div className="text-center flex flex-col items-center text-xs font-normal gap-0.5">
          <SlLocationPin className="text-3xl"/>
          <p>ATM / BRANCH</p>
        </div>
        <div className="text-center flex flex-col items-center text-xs font-normal gap-0.5">
          <CiGlobe className="text-3xl"/>
          <p>ESPANOL</p>
        </div>
      </div>
    </div>
  );
}
