import { BiSearch } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";

export default function SubNav() {
  const links = [
    "Credit Cards",
    "Banking",
    "Lending",
    "Investing",
    "Wealth Management",
    "Open an Account",
  ];

  return (
    <div className="h-[50px] bg-[rgb(240_245_247)] shadow-md">
      <div className="wrapper text-[rgb(4_32_143)] flex items-center justify-between h-full">
        <div className="flex -translate-x-4 h-full font-semibold items-center ">
          {links.map((link, key) => (
            <p
              className="h-full px-5 flex items-center duration-100 cursor-pointer hover:text-white hover:bg-gray-500 rounded-lg"
              key={key}
            >
              {link}{" "}
              <BsChevronRight
                className={`stroke-1 ml-2 mt-0.5 ${
                  key === links.length - 1 ? "inline-block" : "hidden"
                }`}
              />
            </p>
          ))}
        </div>
        <p className="h-full font-semibold px-3 flex items-center duration-100 cursor-pointer hover:text-white hover:bg-gray-500 text-base rounded-lg">
          <TfiSearch className={`stroke-1 mr-2 mt-0.5 `} />
          <span>How can we help?</span>
        </p>{" "}
      </div>
    </div>
  );
}
