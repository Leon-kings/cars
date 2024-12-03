import React from "react";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import side from '../public/assets/1.svg'
const Home: React.FC = () => {
  return (
    <div className="container py-4">
       {/* Animation Video Container */}
       <div className="page-video-container absolute inset-0 z-50 flex items-center justify-center bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
              <source src="/Y.mp4" type="video/mp4" />
              Your browser does not support the video tag.
        </video>
       </div>
         {/*  */}
         {/*  */}
      {/* heading */}
      <div className="relative">
      <div style={{ backgroundImage: `url(${'https://wallpapercat.com/w/full/b/c/3/5818107-1920x1080-desktop-hd-cool-car-wallpaper-photo.jpg'})`, backgroundSize: 'cover',height:'80vh',width:'100%' }}>
         <div className="headingtext">
        
            <div className="front">
              {/* space to fit a car */}
              <p className="title "></p>
              <p className="title"></p>
              {/* space to fit a car ends*/}
              <h2 className="title text-center p-4 py-8 text-white">GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>

              <h4 className="title text-center justify-center text-green-300 py-20">
                Leon is happy to serve you Your favourate Cars ,
                Choose The Best Cars You want and Your repairment Kits.
              </h4>
              <div className="stitle justify-center p-5">
                <Link href={'/contact'}>
                  <button className="button p-2 bg-blue-500 text-center">Contact us</button>
                </Link>
              </div>
            </div>

        </div>
         </div>
<Image src={side} alt="" />
      </div>
      {/*  */}
      {/*  */}
      <div className="container">
 
      </div>
      {/* footer side */}
     <div className="container py-4">
    <Footer/>
     </div>
     {/*  */}
     {/*  */}
  </div>
  );
};

export default Home;
