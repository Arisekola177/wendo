import Image from 'next/image'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'
import photo7 from '../assets/photo7.png'
import frame9 from '../assets/Frame 9.png'
import frame26 from '../assets/Frame 26.png'
import frame8727 from '../assets/Frame 8727.png'
import connecting from '../assets/Connector line.png'



const Trust = () => {
  return (
    <div className="w-full bg-[#3A1600]">
         <div className="hidden md:block xl:w-8/12 md:w-11/12 mx-auto py-16">
            <h4 className="text-4xl font-semibold text-[#FCB484]">
               Building Trust Through <br /> Relatable AI: Connecting with<br /> African Customers on a<br /> Personal Level
            </h4>
      
            <div className="bg-[#2B1000] rounded-3xl py-8 px-4 flex flex-col mt-10 gap-4 relative">
                 <div className="grid grid-cols-4 ">
                     <div  className='col-span-1 bg-[#3A1600] -ml-20 -mt-20 '/>
                     <div className="col-span-3 grid grid-cols-4 gap-4 py-8 px-4 bg-[#2B1000] ">
                     <div className="col-span-1">
                         <Image src={photo3} alt='photo1' />
                         </div>
                         <div className="col-span-2 xl:w-[280px] mx-auto relative">
                         <Image src={photo2} alt='photo1' />
                         <div className='sml:w-[50px] absolute -top-5 left-0 right-0 mx-auto sml:h-[50px] xs:w-[40px] xs:h-[40px]'>
                         <Image src={frame26} alt='frame26' />
                       </div>
                         <div className='bg-white rounded-3xl shadow-lg p-4 w-[180px] absolute -bottom-8 left-0 right-0 mx-auto'>
                          <p className='text-xs font-normal'>AI set: Old Nigerian Lady</p>
                        </div> 
                        <div className='absolute lgl:w-[500px] md:w-[350px] md:right-24 lgl:right-32 -bottom-[75px]'>
                        <Image src={connecting} alt='photo1' />
                        </div>
                         </div>
                         <div className="col-span-1">
                            <Image src={photo1} alt='photo1' />
                         </div>
                     </div>
                 </div>
                 <div className='bg-[#2B1000] grid grid-cols-4 gap-2 py-8'>
                    <div className='relative'>
                    <Image src={photo7} alt='photo1' />
                      <div className='absolute md:w-[80px]  mx-auto -bottom-2 left-0 right-0'>
                        <Image src={frame8727} alt='photo1' />
                        </div>
                    </div>
                    <div className='relative'>
                    <Image src={photo6} alt='photo1' />
                    
                    </div>
                    <div className='relative'>
                    <Image src={photo5} alt='photo1' />
                    </div>
                 <Image src={photo4} alt='photo1' />
                 </div>
            </div>
            <div className='mt-10 grid grid-cols-2 gap-4'>
               <div>
                   <h4 className='text-4xl font-semibold text-white'>Tangible Benefits for <br  className='md:hidden lg:block' />  Your Business</h4> 
                   <p className='text-sm w-[300px] text-[#FCB484] mt-6'>Unlock Enhanced Customer Experience and Drive Operational Efficiency with Cost-Effective Solutions</p>
               </div>
               <div className='flex flex-col  gap-4'>
                  <div className='bg-white rounded-3xl p-6 flex flex-col gap-3 '>
                         <div className='w-[49px] h-[48px]'>
                            <Image src={frame9} alt='frame9' />
                         </div>
                         <h4 className=' text-sm xl:text-lg font-medium text-[#6F6E6E]'>Boost Customer Satisfaction and Loyalty</h4> 
                         <p className='text-[#6F6E6E] text-xs '>Deliver high-quality, immediate responses to inquiries,<br className='md:hidden xl:block' /> enhancing the overall customer experience and increasing<br  className='md:hidden xl:block' /> satisfaction.</p>
                  </div>
                  <div className='bg-white rounded-3xl p-6 flex flex-col gap-3 '>
                         <div className='w-[49px] h-[48px]'>
                            <Image src={frame9} alt='frame9' />
                         </div>
                         <h4 className='text-sm xl:text-lg font-medium text-[#6F6E6E]'>Achieve Significant Cost Savings</h4> 
                         <p className='text-[#6F6E6E] text-xs '>Reduce operational costs with fewer human agents needed,<br  className='md:hidden xl:block' /> providing a cost-effective solution that leads to substantial<br  className='md:hidden xl:block' /> savings over time.</p>
                  </div>
               </div>
            </div>
        </div> 
             <div className='flex flex-col items-center justify-center py-16 md:hidden'>
              <h4 className='text-[#FCB484] text-center xs:text-2xl text-4xl font-semibold'>Built for the <br /> African Market</h4>

              <div  className='flex flex-col items-center mt-8 justify-center' >
                  <h4 className='text-lg font-medium text-white'>Speed</h4>
                  <p className='sm:text-xs text-center xs:text-[10px] w-full sm:w-[300px] pt-3 px-4 text-[#6F6E6E]'>Immediate customer engagement reduces frustration and enhances satisfaction by minimizing wait times.</p>
              </div>

              <div className='flex flex-col items-center mt-8 justify-center'>
                  <h4 className='text-lg font-medium text-white'>Quality</h4>
                  <p className='sm:text-xs text-center xs:text-[10px] w-full sm:w-[300px] pt-3 px-4 text-[#6F6E6E]'>Consistent and culturally appropriate engagements maintain high customer service standards, ensuring customers feel valued and understood.</p>
              </div>

              <div  className='flex flex-col items-center mt-8 justify-center'>
                  <h4 className='text-lg font-medium text-white'>Scale</h4>
                  <p className='sm:text-xs text-center xs:text-[10px] w-full sm:w-[300px] pt-3 px-4 text-[#6F6E6E]'>Easily expand your customer service capabilities to meet growing demands without compromising service quality.</p>
              </div>

            

              </div>
    </div>
  )
}

export default Trust