import Link from 'next/link';
import Image from 'next/image'; 
import logo from '../public/Logo.png'; 


export default function Header() {
  return (
    <div>
      <div className="header-container flex items-center justify-between bg-[#282C33] text-white py-4 px-4 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="hidden md:inline-block"
          />
          <h1 className="text-white ml-4 font-mono text-[1.2rem] hidden md:inline-block">
            Yusra
          </h1>
        </div>

        
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-16 text-[1.1rem] md:text-[1.2rem]">
        <li>
            <Link href="#home">#home</Link>
          </li>
          <li>
            <Link href="#skills">#skills
            </Link>
          </li>
          <li>
            <Link href="#about">#about</Link>
          </li>
          <li>
            <Link href="#contact">#contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
