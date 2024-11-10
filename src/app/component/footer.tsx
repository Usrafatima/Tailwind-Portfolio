import Image from "next/image";
import logo from '../public/Logo.png';
import Discord from '../public/Discord.png';
import Vector from '../public/Vector.png';
import Linkedin from '../public/linkedin.png';

export default function Footer() {
  return (
    <div className="text-white border-t-2 my-16">
 
      <div className="flex items-center justify-center sm:justify-start sm:ml-16 mt-4">
        <Image src={logo} width={25} height={50} alt="Logo" className="mr-4" />
        <h3 className="text-[1.2rem] font-mono">Yusra</h3>
      </div>

     
      <p className="ml-4 sm:ml-16 md:ml-36 text-[#ABB2BF] font-mono mt-2">
        yusra7003@gmail.com
      </p>
      <p className="mx-auto my-1 text-[#ABB2BF] font-mono hidden sm:block md:mx-36 mt-[1%]">
        Web designer and front-end developer
      </p>

   
      <h2 className="font-semibold mx-auto mt-6 text-[1.2rem] font-mono text-center sm:block hidden md:block">
        Media
      </h2>

    
      <div className="flex justify-center mt-4 space-x-4">
        <a href="">
        <Image src={Discord} width={40} height={50} alt="Discord" />
        </a>
        <a href="https://www.linkedin.com/in/yusra-fatima-66b49b2b8/">
        <Image src={Linkedin} width={40} height={50} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Usrafatima">
        <Image src={Vector} width={40} height={50} alt="Vector" />
        </a>
      </div>

     
      <p className="text-[#ABB2BF] font-mono text-center mt-4">
        Copyright 2024. Made by Yusra
      </p>
    </div>
  );
}
