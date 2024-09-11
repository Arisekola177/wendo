import Image from 'next/image'
import frame4 from '../assets/Frame 4.png'
import frame24 from '../assets/Frame 24.png'
const Footer = () => {
  return (
    <div className="w-full bg-[#073528]">
          <div className="xl:w-10/12 md:w-11/12 w-full mx-auto py-10">
           <div className='md:hidden grid grid-cols-1 xs:px-4 sm:px-8 gap-4 py-6'>
              <div className="flex flex-col  gap-4">
                   <h4 className="text-[#C6C6C6] xs:text-sm sm:text-lg font-normal">Connect with us</h4>
                   <div className="xs:w-20">
                         <Image src={frame24}  alt='frame24' className='w-full' />
                   </div>
                </div>
                <div className="flex flex-col">
               <div className="font-medium xs:text-xl sm:text-2xl text-white">
               WENDO
                </div>
                <p className="xs:text-[10px] sm:text-xs mt-4 leading-5 text-[#C6C6C6]">Wendo AI is dedicated to enhancing customer support for African businesses. Our advanced AI voice models deliver accurate, empathetic, 
                    and multilingual assistance, ensuring your customers receive the best service possible.</p>
               </div>
               <div className='grid grid-cols-2 gap-3'>
               <div className="col-span-1 flex flex-col  justify-center gap-4">
                   <h4 className="text-[#C6C6C6] xs:text-sm sm:text-lg font-normal">company</h4>
                   <div className="flex flex-col items-start text-white xs:text-[10px] sm:text-xs gap-2">
                        <p>Home</p>
                        <p>Features</p>
                        <p>Voice Models</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                   </div>
               </div>
               <div className="col-span-1 flex flex-col  justify-center gap-4">
                   <h4 className="text-[#C6C6C6] xs:text-sm sm:text-lg font-normal">Quick Links</h4>
                   <div className="flex flex-col items-start text-white xs:text-[10px] sm:text-xs gap-2">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p className='flex items-center'>Blog <Image src={frame4} alt='frame4' /></p>
                   </div>
               </div>
               </div>
           </div>
          <div className="hidden md:grid grid-cols-5 gap-4 ">
               <div className="col-span-2 flex flex-col">
               <div className="font-medium text-xl xl:text-2xl text-white">
               WENDO
                </div>
                <p className="xl:w-[350px] w-full text-xs mt-4 leading-5 text-[#C6C6C6]">Wendo AI is dedicated to enhancing customer support for African businesses. Our advanced AI voice models deliver accurate, empathetic, 
                    and multilingual assistance, ensuring your customers receive the best service possible.</p>
               </div>
               <div className="col-span-1 flex flex-col  justify-center gap-4">
                   <h4 className="text-[#C6C6C6] text-sm xl:text-lg font-normal">company</h4>
                   <div className="flex flex-col items-start text-white text-xs gap-2">
                        <p>Home</p>
                        <p>Features</p>
                        <p>Voice Models</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                   </div>
               </div>
               <div className="col-span-1 flex flex-col  justify-center gap-4">
                   <h4 className="text-[#C6C6C6] text-sm xl:text-lg font-normal">Quick Links</h4>
                   <div className="flex flex-col items-start text-white text-xs gap-2">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p className='flex items-center'>Blog <Image src={frame4} alt='frame4' /></p>
                   </div>
               </div>
               <div className="col-span-1 flex flex-col  gap-4">
                   <h4 className="text-[#C6C6C6] text-sm xl:text-lg font-normal">Connect with us</h4>
                   <div className="">
                         <Image src={frame24}  alt='frame24' />
                   </div>
               </div>
          </div>
          <p className='hidden md:block text-[12px] text-[#C6C6C6] pt-16'> Copyright © 2024 Wendo AI, All Rights Reserved | Terms of Service | Privacy Policy | Cookie Policy | Vulnerability Disclosure Program | Media Inquiries</p>
        </div>
    </div>
  )
}

export default Footer