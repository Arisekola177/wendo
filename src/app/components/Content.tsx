import Image from 'next/image'
import phone from '../assets/Group 250.svg'
import frame26 from '../assets/Frame 26.png'
import frame28 from '../assets/Frame 28.png'
import wendy from '../assets/wendyai.png'
import people from '../assets/people.svg'
import phonecall from '../assets/phonecall.svg'

const Content = () => {
  return (
    <div className="w-full bg-gray-100 relative md:px-2">
         <div className="flex flex-col gap-4 items-center justify-center py-8 md:py-16">
             <div className="bg-gray-200 p-4 rounded-3xl shadow-lg xs:mt-5 md:mt-10">
                <p className="font-medium xs:text-xs md:text-sm">1000X Support rate</p>
             </div>
             
             <div className='block md:hidden px-4'>
             <p className="font-medium w-full text-center sm:w-[350px] mx-auto xs:text-sm sm:text-xl  sml:text-2xl">Your voice models are native speakers, providing genuine and accurate <span className="text-[#AEE9A4]">accent</span></p>
             </div>
             <div className='hidden md:block'>
             <p className="font-semibold md:text-2xl lgl:text-3xl xl:text-4xl">Your voice models are native speakers, <br /> providing genuine and accurate <span className="text-[#AEE9A4]">accent</span></p>
             </div>
             <div className="bg-white xs:rounded-none md:rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 xl:w-10/12 w-full xs:p-2 sm:p-3 md:p-6 relative">
                  <div className="bg-pink-50 rounded-2xl shadow-md overflow-hidden relative  ">
                    <div className='xl:w-[600px] xl:h-[480px] md:w-[350px] md:h-[350px] xs:w-[220px] sm:w-[300px] xs:h-[240px] mx-auto mt-10 md:pt-20 xs:pt-10  '>
                    <Image src={phone} alt='phone'  />
                    </div>
                    <div className='flex flex-col items-center gap-1 justify-center absolute xs:top-20 md:top-24 left-0 right-0 xl:top-28 '>
                    <div className='flex items-center gap-1'>
                      <div className='xl:w-[58px] xl:h-[58px] xs:w-[28px] xs:h-[28px] sm:w-[36px] sm:h-[36px] mx-auto'>
                         <Image src={frame26} alt='frame26' />
                      </div> 
                      <div className='bg-white rounded-xl shadow-lg xs:p-1 sm:p-2 md:p-3'>
                          <p className='sml:text-xs xs:text-[8px]'>Hello,welcome to bla bla</p>
                      </div> 
                    </div> 
                    <div className='bg-white rounded-xl shadow-lg xs:p-1 sm:p-2 md:p-3 ml-6'>
                    <p className='sml:text-xs xs:text-[8px]'>Wendo,like human</p>
                    </div>
                    </div>
                  </div>
                  <div className='flex flex-col xs:gap-6 md:gap-16 py-6 '>
                          <p className='xl:text-3xl lgl:text-2xl  xs:text-lg text-[#1E1E1E] sml:text-xl font-semibold'>Effortless and Immediate  <br className='xs:hidden md:block' /> Customer Connections</p>
                          <p className='text-[#6F6E6E] xs:text-xs  md:text-sm  lgl:text-lg sml:text-lg w-full md:w-[300px] lgl:w-[400px]'>Wendo ensures customers get instant attention, enhancing satisfaction and reducing frustration.</p> 
                          <div className='flex items-center gap-8'>
                                 <div className='flex items-center gap-1 md:gap-2'>
                                     <div className='w-[2px] xs:h-10 md:h-20 bg-gray-400' />
                                     <p className='sml:text-xs xs:text-[8px] w-full md:w-[150px] lgl:w-[200px] p-2'> Our models are trained to capture the richness and diversity of African accents.</p>
                                 </div>
                                 <div className='flex items-center gap-1 md:gap-2'>
                                     <div className='w-[2px] xs:h-10 md:h-20 bg-gray-400' />
                                     <p className='sml:text-xs xs:text-[8px] w-full md:w-[150px] lgl:w-[200px] p-2'> Our models are trained to capture the richness and diversity of African accents.</p>
                                 </div>
                          </div>
                  </div>
             </div>
             <div className="bg-white xs:rounded-none md:rounded-2xl shadow-md flex xs:flex-col-reverse md:flex-row items-center justify-around xs:gap-4 xl:gap-8 xl:w-10/12 w-full p-3 md:p-6  relative">
                 
                  <div className='flex flex-col xs:gap-6 xl:gap-8 xs:py-6 md:py-0'>
                          <p className='xl:text-3xl lgl:text-2xl  xs:text-lg text-[#1E1E1E] sml:text-xl font-semibold'>Culturally Aligned Quality<br className='xs:hidden md:block' /> Engagements</p>
                          <p className='text-[#6F6E6E] xs:text-xs md:text-sm  sml:text-lg w-full md:w-[300px] lgl:w-[400px]'>Wendo tailors interactions to fit your company's culture and standard operating procedures (SOPs), ensuring consistent and high-quality customer interactions that adhere to your brand guidelines.</p> 
                      
                  </div>
                  <div className="bg-pink-50 rounded-2xl shadow-md py-8 xs:px-8 sml:px-4  ">
                    <div className='xl:w-[396px] xl:h-[396px] lgl:w-[280px] lgl:h-[280px] md:w-[260px] md:h-[260px] w-full mx-auto  '>
                    <Image src={people} alt='phone' className='w-full'  />
                    </div>
                    <div className='flex flex-col items-start gap-1 justify-start absolute xs:top-28 sm:top-40 sml:top-48 xs:right-12 xl:top-60 lgl:right-24 xl:right-32'>
                    <div className='flex items-center gap-1'>
                      <div className='bg-white rounded-xl shadow-lg  xs:p-2 md:p-3'>
                          <p className='sml:text-xs xs:text-[8px]'>please select an Accent</p>
                      </div> 
                      <div className='xl:w-[58px] xl:h-[58px] xs:w-[28px] xs:h-[28px] sm:w-[36px] sm:h-[36px]'>
                         <Image src={frame26} alt='frame26' />
                      </div>
                    </div> 
                    <div className='bg-white rounded-xl shadow-lg xs:p-2 md:p-3'>
                    <p className='sml:text-xs xs:text-[8px]'>Native African intonation</p>
                    </div>
                    <div className='bg-white rounded-xl shadow-lg xs:p-2 md:p-3 ml-2'>
                    <p className='sml:text-xs xs:text-[8px]'>Nigerian</p>
                    </div>
                    </div>
                  </div>
             </div>
             <div className="xl:w-10/12 w-full xs:px-1 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 justify-between mt-3 relative">
            
             <div className='bg-white p-4 xs:col-span-1 md:col-span-2 rounded-xl w-full xl:w-[500px] xl:h-[550px] shadow-md flex items-center justify-center xs:py-16 md:py-4 xl:py-16 relative mx-auto'>
                    <div className='flex w-full xl:w-[390px] xl:h-[380px] bg-yellow-600 rounded-lg mx-auto items-center justify-center relative'>
                    <Image src={phonecall} alt='phonecall' />
                    </div>
                     <div className='flex items-center justify-center absolute xs:bottom-10 md:bottom-20 lgl:bottom-5 xl:bottom-12 left-0 right-0'>
                        <div className='sm:w-[50px] sm:h-[50px] xs:w-[40px] xs:h-[40px]'>
                        <Image src={frame28} alt='frame28 '/>
                        </div>
                        <div className='bg-[#FFF6EF] rounded-3xl shadow-lg xs:p-2 sm:p-4'>
                          <p className='sml:text-xs xs:text-[8px] sm:text-[10px] font-normal'>Hold on, Transferring call</p>
                      </div> 
                    </div>
                    <div className='xl:w-[120px] xl:h-[120px] xs:w-[60px] xs:h-[70px] sm:w-[80px] sm:h-[90px] sml:w-[100px] sml:h-[100px] bg-[#FFF6EF] rounded-md mx-auto absolute lgl:top-4 md:top-10 xs:top-8 xs:left-3 sml:left-5 xl:left-10 -rotate-12'>
                         <div className='flex flex-col h-full items-center justify-center'>
                            <Image src={wendy} alt='wendy' className='md:w-[53px] md:h-[53px] xs:w-[38px] xs:h-[38px] ' />
                            <p className='sml:text-xs xs:text-[10px] uppercase font-medium mt-3'>wendo ai</p>
                         </div>
                    </div>
                </div>

              <div className='bg-white xs:col-span-1 md:col-span-3 rounded-xl md: w-full xl:w-[689px] xs:pt-16 md:pt-8 xl:pt-16 shadow-md mx-auto overflow-hidden'>
                <div className='flex flex-col items-center justify-center w-full md:w-[450px] mx-auto gap-8  '>
                      <h4 className="font-semibold text-center xs:text-2xl xl:text-4xl sml:text-3xl">Seamless Escalation<br /> to <span className="text-[#00E676]">Human </span>Agents</h4>  
                      <p className='text-[#6F6E6E] xs:text-[10px] sm:text-xs md:text-sm sml:text-lg xl:text-lg xs:pt-3 md:pt-6 w-full px-6 md:w-[350px] xl:w-[400px]'>Wendo transfers complex cases to human agents with context, avoiding repetitive questioning. This streamlines the transition process,
                         saving time and enhancing the customer experience.</p> 
                         <div className='flex justify-center gap-1'>
                       <div className='sml:w-[50px] sml:h-[50px] xs:w-[40px] xs:h-[40px]'>
                         <Image src={frame26} alt='frame26' />
                      </div>
                     <div className='flex flex-col gap-4'>
                           <div className='bg-[#00E676] rounded-xl xs:p-2 sm:p-4 xs:w-[160px] sm:w-[200px] md:w-[270px] '>
                            <p className='sml:text-xs xs:text-[10px]'>Na gode. Don Allah ka ba ni bayanin da kake son sabuntawa.</p>
                           </div>
                           <div className='bg-[#00E676] -mb-5 rounded-xl xs:p-2 sm:p-4 xs:w-[160px] sm:sm:w-[200px] md:w-[270px] '>
                           <p className='sml:text-xs xs:text-[10px]'>Don't worry. I can help you reset your password. Could you please provide your username or email associated with the account?</p>
                           </div>
                     </div>
                     </div>
                        </div>
                 </div>
             
                   
              
             </div>
        </div>
    </div>
  )
}

export default Content