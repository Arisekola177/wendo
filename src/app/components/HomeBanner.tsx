

import Image from 'next/image';
import HomeImage from '../assets/homeImage.svg';
import image from '../assets/image.svg';
import frame15 from '../assets/Frame 15.png';
import frame16 from '../assets/Frame 16.png';
import frame3 from '../assets/Frame 3.png';
const HomeBanner = () => {
  return (
    <div className="bg-[#073528] w-full h-[778px] relative">
      <div className="md:w-10/12 w-full mx-auto grid xs:grid-cols-1 md:grid-cols-2 h-full items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center xs:gap-8 md:gap-3">
          <div className='w-full flex xs:items-center xs:justify-center md:items-start md:justify-start'>
          <p className="text-[#AEE9A4] font-medium xs:text-3xl sm:text-5xl lgl:text-6xl xl:text-7xl">
            Fast, Familiar, <br /> and Ready to<br /> Help
          </p>
          </div>
          <div className='w-full flex xs:items-center xs:justify-center md:items-start md:justify-start xs:ml-2 sm:ml-0 '>
          <p className="text-white flex justify-start items-start xs:text-[10px] md:text-sm sm:text-[16px] lgl:text-xl md:mt-5">
            Bringing you the richness and diversity
            <br />  of African languages through trained
             <br /> voice models
          </p>
          </div>
        </div>
        <div className="bg-[#AEE9A4] h-full relative xs:py-32 md:py-0">
        
          <div className="flex items-center xs:gap-4 sm:gap-6 md:gap-10 lgl:gap-16 xl:gap-12 absolute xs:top-3 sm:top-0 md:top-20 xl:top-32 left-0 right-0 justify-center">
            <div className="w-6 xs:h-12  sm:w-8 sm:h-20 xs:mt-16 sm:mt-20 md:mt-32 lgl:mt-44 rounded-3xl bg-[#073528]" />
            <div className=" w-6 xs:h-12  sm:w-8  sm:h-20 rounded-3xl bg-[#073528]" />
            <div className=" w-6  xs:h-12  sm:w-8  sm:h-20 rounded-3xl bg-[#073528]" />
            <div className="w-6  xs:h-12  sm:w-8  sm:h-20   rounded-3xl bg-[#073528]" />
            <div className=" w-6  xs:h-12  sm:w-8  sm:h-20 sm:mt-16 xs:mt-20 md:mt-32 lgl:mt-44 rounded-3xl bg-[#073528]" />
          </div>
         
          <div className="absolute top-0 bottom-0 flex items-center left-0 right-0 justify-center  ">
            <div className='xl:h-[650px] xs:h-full w-full md:mt-40'>
            <Image
              src={HomeImage}
              alt="home"
              className="w-full h-full object-cover"
            />
            </div>
          </div>
          <div className='hidden md:block absolute md:bottom-64 lgl:bottom-60 xl:bottom-56 md:-right-12 lgl:-right-8 xl:right-24 md:w-[70px] md:h-[80px] lg:w-[115px] lg:h-[125px] bg-white rounded-2xl'>
            <div className='lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] mx-auto pt-2'>
            <Image
              src={image}
              alt="home"
              className="w-full"
            />
            </div>
        
          </div>
          <div className='md:hidden absolute mt-10 right-0 left-0 mx-auto xs:mr-20 sml:mr-36 bg-white w-16 h-20 rounded-2xl'>
            <div className='w-[50px] mx-auto pt-2'>
            <Image
              src={image}
              alt="home"
              className="w-full"
            />
            </div>
        
          </div>
          <div className='xl:w-[370px] md:w-[320px] xs:w-[250px]  mx-auto bg-white rounded-3xl flex items-center justify-center p-1 xl:p-2 absolute left-0 right-0 xs:bottom-8 sm:bottom-12 md:bottom-16 lgl:bottom-24 xl:bottom-20 '>
             <Image src={frame16} alt='frame16' className='object-contain xs:w-16 md:w-full  ' />
              <Image src={frame15} alt='frame15' className='object-contain xs:w-40 md:w-full  ' /> 
          </div>
          <div className='hidden md:block absolute left-0 right-0 -bottom-10 w-[200px] xl:w-[300px] z-10 mx-auto '>
            <Image src={frame3} alt='frame 3' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
