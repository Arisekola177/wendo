

import Image from 'next/image';
import HomeImage from '../assets/homeImage.svg';
import image from '../assets/image.svg';
import frame15 from '../assets/Frame 15.png';
import frame16 from '../assets/Frame 16.png';
import frame3 from '../assets/Frame 3.png';
const HomeBanner = () => {
  return (
    <div className="bg-[#073528] w-full h-screen relative">
      <div className="md:w-10/12 w-full mx-auto grid xs:grid-cols-1 md:grid-cols-2 h-full items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center xs:gap-8 md:gap-3 ">
          <div className='w-full flex xs:items-center  xs:justify-center md:items-start md:justify-start'>
          <p className="text-[#AEE9A4] font-medium xs:text-3xl sm:text-4xl sml:text-5xl md:text-4xl lgl:text-5xl xl:text-7xl">
            Fast, Familiar, <br /> and Ready to<br /> Help
          </p>
          </div>
          <div className='w-full flex xs:items-center xs:justify-center md:items-start md:justify-start xs:ml-2 sm:ml-0 '>
          <p className="text-white flex justify-start items-start xs:text-[10px] sm:text-xs md:text-sm sml:text-base xl:text-xl xl:mt-5">
            Bringing you the richness and diversity
            <br />  of African languages through trained
             <br /> voice models
          </p>
          </div>
        </div>
        <div className="bg-[#AEE9A4] h-full relative xs:py-32 md:py-0 overflow-hidden">
        
          <div className="flex items-center xs:gap-4 md:gap-8 xl:gap-12 absolute xs:top-3 sm:top-0 md:top-20 xl:top-32 left-0 right-0 justify-center">
            <div className="w-6 xs:h-12 h-16 md:w-8 md:h-20 xs:mt-16 md:mt-28 xl:mt-44 rounded-3xl bg-[#073528]" />
            <div className=" w-6 xs:h-12 h-16 md:w-8  md:h-20 rounded-3xl bg-[#073528]" />
            <div className=" w-6  xs:h-12 h-16 md:w-8  md:h-20 rounded-3xl bg-[#073528]" />
            <div className="w-6  xs:h-12 h-16 md:w-8  md:h-20   rounded-3xl bg-[#073528]" />
            <div className=" w-6  xs:h-12 h-16 md:w-8  md:h-20 xs:mt-16 md:mt-28 xl:mt-44 rounded-3xl bg-[#073528]" />
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
          <div className='hidden md:block absolute md:bottom-32 xl:bottom-56 md:right-0 lgl:right-16 xl:right-24 md:w-[70px] md:h-[80px] xl:w-[115px] xl:h-[125px] bg-white rounded-2xl'>
            <div className='xl:w-[80px] xl:h-[80px] md:w-[50px] md:h-[50px] mx-auto pt-2'>
            <Image
              src={image}
              alt="home"
              className="w-full"
            />
            </div>
        
          </div>
          <div className='md:hidden absolute sm:-mt-3 xs:right-6 sm:right-16 sml:right-32 bg-white w-14 h-16 rounded-2xl'>
            <div className='w-[40px] mx-auto pt-2'>
            <Image
              src={image}
              alt="home"
              className="w-full"
            />
            </div>
        
          </div>
          <div className='xl:w-[370px] xl:h-[103px] xs:w-[150px] md:w-[200px] mx-auto bg-white rounded-3xl flex items-center justify-center p-1 xl:p-2 absolute left-0 right-0 xs:bottom-8 sml:bottom-6 md:bottom-2 xl:bottom-24 '>
             <Image src={frame16} alt='frame16' className='object-contain xs:w-10  md:w-16 xl:w-full ' />
              <Image src={frame15} alt='frame15' className='object-contain xs:w-24 md:w-32 xl:w-full ' /> 
          </div>
          <div className='hidden absolute left-32 bottom-[-50px]'>
            <Image src={frame3} alt='frame 3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
