type Props = {
  data: {
    title: string;
    subTitle: string;
    desc: string;
    btnText: string;
    img: string
  };
  track:number
};

export default function EarnCashBack({ data, track }: Props) {

  // const name = "Chisco'
  // const age = 20 
  // age = 30 
  // const 1message = `My name is ${name} and I am ${age} years old'
  // console.log("message")
  
  return (
    <div className={`  ${track == 0 && "bg-[#C5E4F1] py-14"}  ${track == 1 && "bg-[#f0f5f7] py-14"}  ${track == 2 && "bg-white pt-14"} `}>
      <div className={`grid grid-cols-2 items-center gap-12 wrapper2`}>
        <img
          src={data.img}
          alt=""
          className={`rounded-2xl ${track == 1 ? "order-2" : "order-1"}`}
        />
        <div className={`${track == 1 ? "order-1" : "order-2"}`}>
          <p className="mb-4">{data.subTitle}</p>
          <p className="text-4xl font-bold mb-3">{data.title}</p>
          <p>{data.desc}</p>
          <button className="bg-[#056dae] mt-4 px-[60px] py-2.5 rounded-lg text-white font-semibold">
            {data.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
