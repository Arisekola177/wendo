import Image from 'next/image'
import biz from '../assets/biz.png'
import vector from '../assets/Vector.png'
import wendo from '../assets/wendo.svg'
import frame9 from '../assets/Frame 9.png'
import frame8719 from '../assets/Frame 8719.png'
import group from '../assets/Group 252.png'

const Business = () => {
  return (
    <div className="bg-gray-100 w-full md:py-16">
        <div className="xl:w-8/12 md:w-11/12 mx-auto xs:hidden md:block">
        <div className='grid grid-cols-2 gap-4 py-16'>
             <div className="flex flex-col gap-4 md:mt-8 lgl:mt-16 xs:mt-20">
                  <h4 className="text-[#1E1E1E] font-medium text-2xl lg:text-3xl xl:text-4xl">Join the Fast-<br />Growing Businesses <br />Scaling Their Support<br /> with Wendo AI</h4>
                  <div className="flex flex-col gap-4 mt-10">
                      <div className="bg-white rounded-lg w-20 shadow-lg p-4 flex items-center justify-center">
                        <p className="text-xs font-medium">Speed</p>
                      </div>
                      <h4 className="text-sm w-[320px] text-[#6F6E6E]">Reduce operational costs with fewer human agents needed, providing a cost-effective solution that leads to substantial savings over time.</h4> 
                  </div>
                  <div className="flex flex-col gap-4 mt-10">
                      <div className="bg-white rounded-lg w-20 shadow-lg p-4 flex items-center justify-center">
                        <p className="text-xs font-medium">Scale</p>
                      </div>
                      <h4 className="text-sm w-[320px] text-[#6F6E6E]">Reduce operational costs with fewer human agents needed, providing a cost-effective solution that leads to substantial savings over time.</h4> 
                  </div>
             </div>
             <div>
                <div className='relative'>
                    <Image src={biz} alt='biz' />
                    <div className='absolute -bottom-5 -rotate-12 left-1/2'>
                    <Image src={frame9} alt='biz' />
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-10">
                      <div className="bg-white rounded-lg w-20 shadow-lg p-4 flex items-center justify-center">
                        <p className="text-xs font-medium">Quality</p>
                      </div>
                      <h4 className="text-sm w-[320px] text-[#6F6E6E]">Reduce operational costs with fewer human agents needed, providing a cost-effective solution that leads to substantial savings over time.</h4> 
                  </div>
             </div>
             </div>
        </div>
         
           <div className='flex flex-col gap-2 bg-slate-100 w-full md:hidden'>
                  <div className='flex flex-col gap-0'>
                     <Image src={frame8719} alt='frame' className='w-full' />
                     <Image src={group} alt='frame' className='w-full' />
                  </div>
                <div className='xs:px-6 md:px-0'>
                   <h4 className='sm:text-2xl xs:text-lg font-semibold py-4  text-[#1E1E1E]'>Tangible Benefits for <br className='xs:hidden md:block' />  Your Business</h4> 
                   <p className='sm:text-sm xs:text-[10px] md:w-[300px] text-[#6F6E6E] mt-2'>Unlock Enhanced Customer Experience and Drive Operational Efficiency with Cost-Effective Solutions</p>
               </div>
               <div className='flex flex-col mt-4 gap-4 px-4'>
                  <div className='bg-white rounded-3xl xs:p-3 sm:p-6 flex flex-col gap-3 '>
                         <div className='sml:w-[49px] sml:h-[48px] xs:w-[30px] xs:h-[30px]'>
                            <Image src={frame9} alt='frame9' />
                         </div>
                         <h4 className='sml:text-lg xs:text-xs font-semibold text-[#6F6E6E]'>Boost Customer Satisfaction and Loyalty</h4> 
                         <p className='text-[#6F6E6E]  sml:text-xs xs:text-[10px] '>Deliver high-quality, immediate responses to inquiries,<br className='xs:hidden md:block' /> enhancing the overall customer experience and increasing<br className='xs:hidden md:block'  /> satisfaction.</p>
                  </div>
                  <div className='bg-white rounded-3xl xs:p-3 sm:p-6 flex flex-col gap-3 '>
                         <div className='w-[49px] h-[48px]'>
                            <Image src={frame9} alt='frame9' />
                         </div>
                         <h4 className='sml:text-lg xs:text-xs font-semibold text-[#6F6E6E]'>Achieve Significant Cost Savings</h4> 
                         <p className='text-[#6F6E6E] sml:text-xs xs:text-[10px] '>Reduce operational costs with fewer human agents needed,<br className='xs:hidden md:block' /> providing a cost-effective solution that leads to substantial<br className='xs:hidden md:block' /> savings over time.</p>
                  </div>
               </div>
            </div>
      
        <div className='xl:w-10/12 mx-auto md:w-11/12 w-full mt-10 bg-white xs:rounded-none md:rounded-3xl flex flex-col items-center justify-center gap-4 p-4'>
                <div className='mt-4 w-[40px]  h-[40px] md:w-[65px] md:h-[59px]'>
                <Image src={vector}  alt='vector' />
                </div>
                <div className='mt-6 xs:w-[200px] md:w-full'>
                <Image src={wendo} alt='vector' className='w-full' />
                </div>
                <h3 className='md:text-3xl text-center xs:text-sm sm:text-lg font-medium text-[#3F3F3F]'>Empowering African businesses with <br className='xs:hidden md:block' /> advanced AI voice models for seamless,<br  className='xs:hidden md:block' /> multilingual customer service.</h3> 
                <div className="bg-[#00E676] mt-3 p-3 rounded-3xl flex items-center justify-center">
                <p className="text-xs font-medium">Get Started</p>
             </div>
         </div>
    </div>
  )
}

export default Business