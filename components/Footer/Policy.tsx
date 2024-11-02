import Link from "next/link";
import { footerPolicyLinks } from "./data";

export default function Policy() {
  return (
    <div className="">
      <div style={{paddingInline: '0px'}} className="wrapper2 text-xs text-white border-y border-gray-500 my-5 py-5 flex gap-5 items-center">
        <p className="font-semibold">© 2024 Citigroup Inc</p>
        <div className=" flex gap-10">
          {footerPolicyLinks.map((el, key) => (
            <Link href={el.url}>{el.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
