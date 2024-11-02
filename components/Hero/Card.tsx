import React from "react";

type Props = {
  card: {
    name: string;
    imageSrc: string;
    altText: string;
    description: string;
    linkText: string;
  };
};

export default function Card({ card }: Props) {
  return (
    <div className="border rounded-lg p-4 my-12 flex flex-col">
      <p className="mb-2 text-sm">{card.altText}</p>
      <div className="mb-4">
        <img src={card.imageSrc} className=" rounded-lg" alt="" />
      </div>
      <h2 className="mb-4 text-xl font-extrabold">{card.name}</h2>
      <p className="mb-5">
        {card.description}
      </p>
      <div className="flex mt-auto gap-5 items-center">
        <button className="bg-[#056dae] px-[60px] py-2.5 rounded-lg text-white font-semibold">
          Apply Now
        </button>
        <p className="underline text-xs font-semibold tracking-wider text-[#056DAE]">
          <sup>*</sup>Pricing and Information
        </p>
      </div>
    </div>
  );
}
