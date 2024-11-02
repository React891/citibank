import AuthSection from "./AuthSection";
import CardList from "./CardList";
import { data } from "./data";
import EarnCashBack from "./EarnCashBack";
import MoreLinks from "./MoreLinks";

export default function Hero() {
  return (
    <div className="">
      <div className="bg pt-5 border-b pb-16">
        <div className="grid wrapper gap-5 grid-cols-[1fr_2fr]">
          <div className="flex items-center gap-10">
            <div className="space-y-6">
              <div className="">
                <p className="ml-1">
                  CITI SIMPLICITY CARD <sup>®</sup>{" "}
                </p>
                <p className="text-5xl mt-2 font-semibold">
                  Enjoy Our Lowest Balance Transfer Intro Rate
                </p>
              </div>
              <p>
                Get our lowest intro balance transfer rate available with the
                Citi Simplicity Card along with a low intro rate for purchases.
              </p>
              <button className="bg-[#056dae] px-10 py-3 rounded-md text-white font-semibold">
                Apply Now
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img
              className="h-[203px] w-[320px]"
              src="https://online.citi.com/JRS/banners/homepage2/HP_9505_Simplicity_Card_Hero.png"
              alt=""
            />
            <AuthSection />
          </div>
        </div>
      </div>
      <MoreLinks />
      <CardList />
      {data.map((data, key) => (
        <EarnCashBack data={data} track={key} key={key} />
      ))}
    </div>
  );
}
