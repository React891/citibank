import React from "react";
import { footerLinks } from "./data";
import Policy from "./Policy";
import LegalDisclosures from "./LegalDisclosures";
import Feedback from "./Feedback";

export default function Footer() {
  return (
    <div className="pt-10 pb-5 bg-[#333] ">
      <div  style={{paddingInline: '0'}} className="grid wrapper2 text-white grid-cols-6">
        {footerLinks.map((data, key) => (
          <div className="">
            <p className="text-sm font-semibold mb-5">{data.section}</p>
            <div className="flex flex-col gap-4">
                {data.links.map((el) => (
                    <p className="text-xs">{el.label}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Policy />
      <LegalDisclosures />
      <Feedback />
    </div>
  );
}
