import React from "react";

const Page1 = () => {
  return (
    <>
      <>
        <div className=" h-full  w-full  flex gap-3  relative justify-between items-center bg-gray-100 ">
          {/* <div className=' flex justify-start  flex-col px-10 py-10 h-[66vh] gap-5 rounded-md  w-[90vw] bg-cover obje' style={{backgroundImage:"url(/FMCG-bg-img.jpg)"}}>
   <h1 className='text-2xl font-medium text-white'>Biggest catalouge <br /> 90,000 + FMCG items <br /> 4,00,000 + Medicines <br /> with Pictures & API content</h1>
   <h2 className='text-lg font-normal text-white'>
    Find in-stock alternatives in real-time while billing <br /> and reduce customer bounce rate.
   </h2>
   <button class=  "bg-white ease-in duration-150 h-12 w-36  font-medium text-cyan-400 py-2 px-4 rounded hover:text-white hover:bg-blue-500 ">
  Know more
</button>
    </div> */}

          <div className="  h-[80vh] flex   flex-col gap-6 py-28 items-start px-14 justify-start w-full">
            <h1 className=" text-6xl w-[48vw] font-semibold">
              The Digital front door to healthcare is finally here
            </h1>
            <p className="text-3xl  w-1/2">
              Detect early signs of diseases like cancer from scans using deep
              learning.
            </p>
          </div>

          <div className="absolute bottom-0 right-20">
            <img className="object-contain" src="/preview.png" alt="" />
          </div>
        </div>
      </>
    </>
  );
};

export default Page1;
