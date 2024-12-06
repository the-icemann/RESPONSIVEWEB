import Navbar from "../assets/components/Navbar"
import Guitarist from '../assets/images/adi-goldstein-sdtnZ4LgbWk-unsplash.jpg'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { FadeIn } from "../variants"


const About = () => {
  return (
  <>

  <Navbar></Navbar>

  <main>

  <main>
        
        <section id="content1">
          <div className="container flex flex-col-reverse items-center p-4 mx-auto mt-5 space-y-0 md:space-y-o md:flex-row">
  
              {/* Left item */}
              <div className="flex flex-col p-auto mb-32 space-y-12 mt-12 md:w-1/2 md:mt-32">
              
              <h1 className="max-w-md text-4xl font-bold text-center mt-4 md:text-7xl md:text-left " >Who we are...</h1>
  
             
              
              <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">
               

At Past Records, we believe music is more than sound—it’s a journey, a voice, and a dream waiting to be realized. Our mission is simple yet profound: to discover and empower young talent, transforming raw passion into polished artistry.  

We are your partners in creativity, offering mentorship, resources, and platforms to help aspiring musicians turn their visions into reality. Whether you’re crafting your first melody, penning heartfelt lyrics, or stepping onto the stage for the first time, Past Records is here to guide your steps.  

Together, let’s break boundaries, amplify stories, and create a vibrant community where tomorrow’s musical legends begin their journey today.  
😊
              </p>
  
              <div className="flex justify-center md:justify-start">
            
  
              </div>
              </div>
  
              <div className="w-full">
                  <img src={Guitarist} alt="Guitarist" loading="lazy" />
              </div>
  
             
             
              
          </div>
  
        </section>
  
        <section id="content2">
          <motion.div className="container flex px-4 mx-auto mt-10 space-y-12 md:space-y-0 ">
  
  
  
  
              <div className="flex flex-col space-y-8  md:w-1/2 ">
              
                  <h2 className="max-w-md text-left text-darkGrayishBlue font-bold text-4xl md:text-center ">
  
                  Our services
                  </h2>
  
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
  
                    <div className="rounded-l-full bg-slate-500 md:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-500">
                          01
                        </div>
                        <h3 className="text-base font-bold md:mb-4 md:hidden">Talent Identification and Nurturing:</h3>
                      </div> 
                    </div>
                    
                    <div>
                      <h3 className="hidden mb-4 text-lg font-bold md:block">Talent Identification and Nurturing:</h3>
                      <p className="text-slate-500">
                      Identify and support young, aspiring musicians by providing them with resources, mentorship, and platforms to showcase their skills, enabling them to grow into accomplished professionals in their musical fields.
                      </p>
                    </div>
                  </div>
  
                  
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
  
                    <div className="rounded-l-full bg-slate-500 md:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-500">
                          02
                        </div>
                        <h3 className="text-base font-bold md:mb-4 md:hidden">Skill Development and Education:</h3>
                      </div> 
                    </div>
                    
                    <div>
                      <h3 className="hidden mb-4 text-lg font-bold md:block">Skill Development and Education:</h3>
                      <p className="text-slate-500">
                      Offer workshops, training sessions, and access to industry experts to help youth enhance their musical, production, and performance skills, fostering a comprehensive understanding of the music industry.
                      </p>
                    </div>
                  </div>
  
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
  
                    <div className="rounded-l-full bg-slate-500 md:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-500">
                          03
                        </div>
                        <h3 className="text-base font-bold md:mb-4 md:hidden">Community Building and Inspiration:</h3>
                      </div> 
                    </div>
                    
                    <div>
                      <h3 className="hidden mb-4 text-lg font-bold md:block">Community Building and Inspiration:</h3>
                      <p className="text-slate-500">
                      Create a vibrant, inclusive community where young talents can connect, collaborate, and inspire each other, fostering creativity and encouraging innovation in music across diverse genres.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
  
                    <div className="rounded-l-full bg-slate-500 md:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-500">
                          04
                        </div>
                        <h3 className="text-base font-bold md:mb-4 md:hidden">Empowering Entrepreneurial Spirit:</h3>
                      </div> 
                    </div>
                    
                    <div>
                      <h3 className="hidden mb-4 text-lg font-bold md:block">Empowering Entrepreneurial Spirit:</h3>
                      <p className="text-slate-500">
                      Equip young musicians with the knowledge and tools to navigate the business side of the music industry, including marketing, branding, and independent production, fostering self-reliance and sustainable careers.
                      </p>
                    </div>
                  </div>
                  
  
              
              </div>
          </motion.div>
  
  
  
          <div className="flex"> <Link to='/' className=' text-center text-xl text-slate-500 ml-16 mt-10 p-10 md:flex md:justify-center' ><i className="fa-solid fa-arrow-left"></i>Back to Home</Link></div>
        </section>
  
        </main>

  </main>


  </>
  )
}

export default About
