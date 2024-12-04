import React from "react";
import Footer from "./components/Footer";
// import Link from "next/link";
import Image from "next/image";
import side from '../public/assets/1.svg'
import Carousel from './components/slider/Slider'
const Home: React.FC = () => {
  const DATA = [
    { image: 'https://picsum.photos/seed/random101/500/500' },
    { image: 'https://picsum.photos/seed/random102/500/500' },
    { image: 'https://picsum.photos/seed/random103/500/500' },
  ];
  const NEW = [
    { image: 'https://picsum.photos/seed/random101/500/500' },
    { image: 'https://picsum.photos/seed/random102/500/500' },
    { image: 'https://picsum.photos/seed/random103/500/500' },
  ];
  const TOOLS = [
    { image: 'https://picsum.photos/seed/random101/500/500' },
    { image: 'https://picsum.photos/seed/random102/500/500' },
    { image: 'https://picsum.photos/seed/random103/500/500' },
  ]
  return (
  <>
  <div className="container">
<div className="card">
  <div className="header py-4">
    <h4 className="text-green-300 text-center">Welcome to LD Cars</h4>
  </div>
  <div className="main">
   <div className="grid grid-cols-2 gap-4">
    <div className="grid-cols-1">
<div className="head justify-between w-full h-full px-6 py-6 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
  <div className="text-center">
    <h2 className="py-4">LD</h2>
    <h3 className="py-2 ">LD through Leon-shops provide a gift to their clients, 
      Where you can buy More products and Win other products. 
      We wish you bonne chance to those who will Win This Prize. 
      Everyone can also win to shop on Discount of 15% of Orginal price</h3>    
  </div>
</div>
    </div>
    {/*  */}
    <div className="grid-cols-2">
      <div className="main justify-between w-full h-full">
<Image src={side} alt="" className="w-full h-[200px]" />
</div>
    </div>
    </div>
  </div>
</div>
{/*  */}
<div className="card h-[600px]">
<div
  className="back relative overflow-hidden h-full w-full rounded-lg bg-cover bg-no-repeat p-12 text-center"
>
  <div
    className="hooverImage absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    >
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">LD</h2>
        <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Call to action
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<div className="card">
<main className="flex min-h-screen w-full flex-col items-center justify-center text-center">
  <div className="grid grid-cols-3 gap-4">
    <div className="first">
      <h2 className="text-center">NEW FEATURED CARS</h2>
      <Carousel data={DATA} />
      </div>
      {/*  */}
      <div className="first">
        <h2 className="text-center">NEW UPCOMMING CARS</h2>
      <Carousel data={NEW} />
      </div>
      {/*  */}
      <div className="first">
      <h2 className="text-center">NEW FEATURED TOOLKITS</h2>
      <Carousel data={TOOLS} />
      </div>
      {/*  */}
      </div>
    </main>
</div>

{/*  */}
<br />
{/*  */}
{/* footer */}
<div className="card">
  <Footer/>
</div>

  </div>
  
  </>
  );
};

export default Home;
