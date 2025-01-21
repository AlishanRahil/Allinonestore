
// 'use client'
// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const getdata =  async ({id}:{id:string}) => {
//       const fetchdata = await fetch(`https://fakestoreapi.com/products/${id}`)
//       const respons = fetchdata.json();
//        return respons

    
// };


// const Postdetails = async ({params} : any) => {
//     const gettingdata = await getdata({id:params.id});
// //    console.log(gettingdata)

//  // not rendering again and again thats why we give empty array to useeffect

// return (
//     <>
//     <div className=" lg:grid-cols-3 max-w-4xl mx-auto mt-10 bg-white shadow-lg p-6 hover:bg-gray-500" data-aos = 'flip-left'>
      
//          <h1 className="text-center text-xl font-bold mb-5">ProductId:{gettingdata.id}</h1>
//          <img src={gettingdata.image} alt="" width={300} height={100} className=" flex items-center justify-center mx-auto" />
//          <p className=" mt-14 font-bold text-lg mb-4 ">Title:{gettingdata.title}</p>
//          <p className="text-lg font-bold text-black mb-5">Description: {gettingdata.description}</p>
//          <p className=' font-bold  text-lg  mb-5'>Price:{`$`+gettingdata.price}</p> 

//          <Link className=" bg-blue-500 py-2 px-4 hover:bg-blue-700 text-white rounded-lg"  href={'/products'}>Back To Products List</Link>

//     </div>


// {/*  */}

//     </>
// )
    
// }

// export default Postdetails;





'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const getdata = async ({ id }: { id: string }) => {
  const fetchdata = await fetch(`https://fakestoreapi.com/products/${id}`);
  const respons = await fetchdata.json();
  return respons;
};

const Postdetails = async ({ params }: any) => {
  const gettingdata = await getdata({ id: params.id });

  return (
    <>
      <motion.div
        className="lg:grid-cols-3 max-w-4xl mx-auto mt-10 bg-white shadow-lg p-6 hover:bg-gray-500"
        data-aos="flip-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-center text-xl font-bold mb-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ProductId: {gettingdata.id}
        </motion.h1>

        <motion.img
          src={gettingdata.image}
          alt="Product Image"
          width={300}
          height={100}
          className="flex items-center justify-center mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="mt-14 font-bold text-lg mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Title: {gettingdata.title}
        </motion.p>

        <motion.p
          className="text-lg font-bold text-black mb-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Description: {gettingdata.description}
        </motion.p>

        <motion.p
          className="font-bold text-lg mb-5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Price: {`$` + gettingdata.price}
        </motion.p>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Link
            className="bg-blue-500 py-2 px-4 hover:bg-blue-700 text-white rounded-lg"
            href="/products"
          >
            Back To Products List
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Postdetails;
