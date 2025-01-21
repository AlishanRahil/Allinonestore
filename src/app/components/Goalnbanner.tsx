import React from 'react';
import Image from 'next/image';
import head from '../Assets/headphone.png';
import watchj from '../Assets/smartwatch2-removebg-preview-cH1j5U7r.png';
import Link from 'next/link';

const Banner2 = () => {
  return (
    <div className="min-h-[500px] flex justify-center items-center py-12">
      <div className="container p-5 bg-green-500 rounded-mdl" data-aos="zoom-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-md">
          {/* Left Section */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">50% Off</p>
            <p className="uppercase lg:text-6xl text-3xl font-bold">Great Quality</p>
            <p className="text-lg font-semibold">10 Dec To 31 Dec</p>
          </div>

          {/* Middle Section */}
          <div>
            <Image
              alt=""
              src={watchj}
              className="h-full flex items-center scale-125 w-[250px] md:w-[340px] mx-auto object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center gap-6 p-6 sm:p-8">
            <p className="text-2xl font-bold">All in One Store</p>
            <p className="uppercase text-3xl lg:text-6xl font-bold">Winter Sale</p>
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque ad sed asperiores
              amet fugiat voluptate tempora quos sapiente facere. Praesentium neque error libero saepe
              iusto nihil non, numquam maxime.
            </p>
            <div>
              <Link href={'./products'} className="bg-white px-10 py-3 rounded-2xl text-black">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
