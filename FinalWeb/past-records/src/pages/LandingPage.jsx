/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import Navbar from "../assets/components/Navbar"
import Guitarist from '../assets/images/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg'
import {motion} from 'framer-motion'
import { FadeIn } from "../variants"


const LandingPage = () => {
  return (
    <>
     <header>
        <Navbar></Navbar>
        </header>
     

      <main>
        
      <section id="content1">
        <motion.div
        variants={FadeIn('up',.2)}
        initial="hidden" 
        whileInView={'show'}
        viewport={{once:false,amount:0.2}}
        
        className="container flex flex-col-reverse items-center p-4 mx-auto mt-5 space-y-0 md:space-y-o md:flex-row">

            {/* Left item */}
            <div className="flex flex-col p-auto mb-32 space-y-12 mt-12 md:w-1/2 md:mt-32">
            
            <h1
          
             className="max-w-md text-4xl font-bold text-center mt-4 md:text-7xl md:text-left " >Welcome to Past RECords.</h1>

            <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">An entertainment foundation for the future... </p>
            
            <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">
            At Past Records, we believe every young artist has a story worth telling and a melody worth sharing. Our mission is to create a dynamic space where talent meets opportunity, offering aspiring musicians the resources, mentorship, and platforms they need to thrive. Whether it&apos;s the first strum of a guitar or the debut of a homegrown track, we are here to amplify your voice and guide you toward a fulfilling career in music. Together, let’s shape the future of sound and inspire the world—one note at a time.
            </p>

            <div className="flex justify-center md:justify-start">
            
         <Link to='/About' className=" p-3 px-6 pt-2 text-white bg-slate-600 rounded-full baseline mx--7 "> About Our Initiative</Link>

            </div>
            </div>

            <div className="w-full">
                <img src={Guitarist} alt="Guitarist"  />
            </div>

           
           
            
        </motion.div>

      </section>

     
      </main>
    </>

       

   
    
  )
}

export default LandingPage
