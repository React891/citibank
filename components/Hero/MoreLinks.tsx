export default function MoreLinks() {
  const financialServices = [
    {
      name: "Credit Cards",
      icon: "icon-background1", // Replace with actual icon path or source
    },
    {
      name: "Checking Solutions",
      icon: "icon-background2", // Replace with actual icon path or source
    },
    {
      name: "Mortgage",
      icon: "icon-background3", // Replace with actual icon path or source
    },
    {
      name: "Personal Loans",
      icon: "icon-background4", // Replace with actual icon path or source
    },
    {
      name: "Investing Options",
      icon: "icon-background5", // Replace with actual icon path or source
    },
    {
      name: "Small Business",
      icon: "icon-background6", // Replace with actual icon path or source
    },
  ];

  return (
    <div className="wrapper -translate-y-10 bg-white">
      <div className=" h-28 border rounded-2xl flex justify-around">
        {financialServices.map((el) => (
          <div className="flex text-sm font-semibold items-center justify-center flex-col">
            <div className={`${el.icon} relative rounded-full`}>
              {/* <div className="h-full w-full absolute top-0 left-0 rounded-full text-white hover:bg-[#002256]/50"></div> */}
            </div>

            <p className="text-[#056DAE] cursor-pointer hover:text-[#215779] duration-300">
              {el.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
