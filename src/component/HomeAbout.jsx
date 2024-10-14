import React from 'react'
import { animationVariants } from '../constants/animationVariants'
import { motion } from 'framer-motion'
import { Button } from 'flowbite-react'
const HomeAbout = () => {
  return (
   <>
   <div className="flex flex-col md:flex-row py-3 md:py-8 px-10 gap-4 md:gap-10">
    <div className="">
        <motion.div
         initial="initial"
         whileInView="animate"
         variants={animationVariants.zoomOut}
         viewport={{ once: true, amount: 0.2 }}
        >
        <h2 className="text-5xl max-md:text-4xl font-bold title-font">
        Delivering exceptional real estate developments &nbsp;
        <span className="text-red-500 title-font">for over two decades</span>
        </h2>
        </motion.div>
    </div>
    <div className="">
        <motion.div initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}>
   <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                itaque nesciunt similique dolore illum eaque repellat eligendi
                nemo odit fugit in, impedit ad excepturi architecto dolores
                quaerat accusantium! Sapiente, repellendus!
              </p>
              <Button outline gradientDuoTone='purpleToPink' className='font-semibold mt-4 md:mt-8'>About Us</Button>
        </motion.div>
    </div>
   </div>

   </>
  )
}

export default HomeAbout