import Navbar from "../assets/components/Navbar"
import pic1 from "../assets/images/adrian-korte-5gn2soeAc40-unsplash.jpg"
import pic2 from "../assets/images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg"
import pic3 from "../assets/images/frank-septillion-Qrspubmx6kE-unsplash.jpg"

const Programs = () => {
  return (
    <>
    <main>
    <div>
      
      <header>
        <Navbar></Navbar>
        </header>
     

    
      <section id="content1">
        <div className="container flex flex-col-reverse items-center p-4 mx-auto mt-5 space-y-0 md:space-y-o md:flex-row">

            {/* Left item */}
            <div className="flex flex-col p-auto mb-32 space-y-12 mt-12 md:w-1/2 md:mt-32">
            
            <h1 className="max-w-md text-4xl font-bold text-center mt-4 md:text-7xl md:text-left " >Adopt A Musician.</h1>

            <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">The Adopt-A-Musician Program is an income-based scholarship program that assists underserved youth and their parents with the costs associated with instrument rental, instrument purchase, or private instruction. The goal is to remove the financial roadblocks which deter these budding musicians from exploring the opportunities and benefits afforded via the vehicle of quality music education. </p>

            

            <div className="flex justify-center md:justify-start">
            <a href="" className=" p-3 px-6 pt-2 text-white bg-slate-600 rounded-full baseline mx--7 ">
        Enroll Now
         </a>

            </div>

            </div>

            <div className="w-full">
                <img src={pic1} alt="Guitarist" loading="lazy" />
            </div>

           
           
            
        </div>

      </section>

    </div>
    <div>
      
      
     

    
      <section id="content2">
        <div className="container flex flex-col-reverse items-center p-4 mx-auto mt-5 space-y-0 md:space-y-o md:flex-row">

            {/* Left item */}
            <div className="flex flex-col p-auto mb-32 space-y-12 mt-12 md:w-1/2 md:mt-32">
            
            <h1 className="max-w-md text-4xl font-bold text-center mt-4 md:text-7xl md:text-left " >School And Community Based Programs.</h1>

            <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">Year-round instruction designed to provide quality music education to students at schools and community centers that do not offer instrumental music programs. Some of our customized courses include the following .</p>

            <div className="flex justify-center md:justify-start">
            <a href="" className=" p-3 px-6 pt-2 text-white bg-slate-600 rounded-full baseline mx--7 ">
        Enroll Now
         </a>

            </div>
            </div>

            <div className="w-full">
                <img src={pic2} alt="Guitarist" loading="lazy" />
            </div>

           
           
            
        </div>

      </section>
      <section id="content3">
        <div className="container flex flex-col-reverse items-center p-4 mx-auto mt-5 space-y-0 md:space-y-o md:flex-row">

            {/* Left item */}
            <div className="flex flex-col p-auto mb-32 space-y-12 mt-12 md:w-1/2 md:mt-32">
            
            <h1 className="max-w-md text-4xl font-bold text-center mt-4 md:text-7xl md:text-left " >Absolute Percussion!!!</h1>

            <p className="max-w-sm text-center text-xl text-slate-500 md:text-left">Sponsored by Zedra all children were provided with a free bucket and spade.   

These lively workshops focused on pulse and rhythm using phonetics and body percussion. Expect plenty of musical fun and games, co-ordination challenges, multi-layered rhythms and music from around the world.  

Workshops take place on 2nd to 4th Nov 2024 and 18th to 20th Jan 2025 and last 30 mins to 60 mins. It was aimed at Key Stage 2 and the start of Key Stage 3. Many of the schools performed this piece at Jersey Sings Across the Bay 2022.</p>

            <div className="flex justify-center md:justify-start">
            <a href="" className=" p-3 px-6 pt-2 text-white bg-slate-600 rounded-full baseline  mx--7 ">
        Enroll Now
         </a>

            </div>
            </div>

            <div className="w-full">
                <img src={pic3} alt="Guitarist" loading="lazy" />
            </div>

           
           
            
        </div>

      </section>

    </div>
    </main>
    </>
    
    
  )
}

export default Programs
