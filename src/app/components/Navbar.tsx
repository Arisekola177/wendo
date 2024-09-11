import Link from "next/link"


const Navbar = () => {
  return (
    <div className="hidden md:block w-full bg-gray-100">
        <div className="w-10/12 mx-auto py-8 flex justify-between items-center">
             <div className="font-medium md:text-xl lgl:text-2xl">
               WENDO
             </div>
             <div className="flex items-center gap-4">
                <Link className="text-xs font-light" href='/'>Features</Link>
                <Link className="text-xs font-light" href='/'>About</Link>
                <Link className="text-xs font-light" href='/'>Voice Models</Link>
                <Link className="text-xs font-light" href='/'>Testimonials</Link>
             </div>
             <div className="bg-[#00E676] p-3 rounded-3xl flex items-center justify-center">
                <p className="text-xs font-medium">Get Started</p>
             </div>
        </div>
    </div>
  )
}

export default Navbar