import { Link } from 'react-router-dom'
import pic from '../assets/images/frame-harirak-iPwHUd19R38-unsplash.jpg'
import {motion} from 'framer-motion'
import { FadeIn } from "../variants"

const ContactUsPage = () => {
  return (
   <>
   
   

    <motion.div 
     variants={FadeIn('up',.2)}
     initial="hidden" 
     whileInView={'show'}
     viewport={{once:false,amount:0.2}}
     
    
    
    
    className="p-5 xsm:p-10">

       
        <div className="text-center space-y-3 mb-10">
            <h2 className="font-bold text-5xl">Contact Us</h2>
            <p className=" text-center text-xl text-slate-500 ">Anything you need to address?...Give it here!!! Reach out to us on any of these platforms.</p>
        </div>

        
        <div className="lg:flex   lg:justify-center">

          
            <div className=" w-[100%] lg:w-fit ">
              <img className=' lg:h-[70vh]' src={pic} alt="" />
            </div>

            
            <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-[600px]">

                <div className="bg-[#353535] text-white p-4 text-center space-y-3 lg:pt-10 ">
                    <h2 className="font-bold">CONTACT US</h2>
                    <p className="">Visit any one of our social media platforms.</p>
                    <div className="icon space-x-2">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </div>
                </div>

                <div className="bg-[#353535] text-white p-4 text-center space-y-3 lg:pt-10">
                    <div className="icon h-12 w-12 ring-4 text-3xl ring-[white] pt-1 rounded-[50%] m-auto">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h2 className="font-bold">EMAIL</h2>
                    <div className="">
                        <a href="">Hello@company.com</a>
                        <a href="">support@company.com</a>
                    </div>
                </div>


                <div className="bg-[#353535] text-white p-4 text-center space-y-3 lg:pt-10">
                    <div className="icon h-12 w-12 ring-4 text-3xl ring-[white] pt-1 rounded-[50%] m-auto">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <h2 className="font-bold">ADDRESS</h2>
                    <div className="">
                        121 Rock Street 21 Avenue, New York, NY 92102-9000
                    </div>
                </div>

                <div className="bg-[#353535] text-white p-4 text-center space-y-3 lg:pt-10">
                    <div className="icon h-12 w-12 ring-4 text-3xl ring-[white] pt-1 rounded-[50%] m-auto">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <h2 className="font-bold">CALL US</h2>
                    <div className="">
                        1(123) 456-789 1(123) 456-789
                    </div>
                    
                </div>
                
                
            </div>
            
           
            
        </div>
        <div className="flex"> <Link to='/' className=' text-center text-xl text-slate-500 ml-16 mt-10 p-10 md:flex md:justify-center' ><i className="fa-solid fa-arrow-left"></i>Back to Home</Link></div>
       

       
    </motion.div>

   </>
  )
}

export default ContactUsPage
