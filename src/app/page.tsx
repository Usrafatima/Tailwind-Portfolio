import Image from "next/image";
import profile from './public/profile.png';
import purple from './public/purple-lines.png';

import image from './public/Image.png';

import Email from './public/Email.png';

export default function Home() {
  return (
    <div id="home" className="text-white mt-28 mx-4 sm:mx-12 lg:mx-20 xl:mx-32">
<div className="flex flex-col items-center lg:items-center lg:justify-center lg:text-center">
  <h2 className="text-2xl lg:text-3xl">
    <span className="text-[2rem] sm:text-[3rem]">Yusra</span>{' '}
    <span className="text-[2rem] sm:text-[3rem]">is a</span>{' '}
    <span className="text-[#C778DD] text-[2rem] sm:text-[3rem]">web designer</span>
    <span className="text-[2rem] sm:text-[3rem]"> and{' '} </span><br/>
    <span className="text-[#C778DD] text-[2rem] sm:text-[3rem]">front-end developer</span>
  </h2>

  <p className="text-[#ABB2BF] my-5 text-[1rem] font-mono max-w-lg">
    She crafts responsive websites where technologies meet creativity
  </p>

  <button className="border-2 w-44 h-10 border-[#C778DD] font-mono">
    Contact me!!
  </button>
</div>



<div className="flex flex-col items-center">
  <div className="flex flex-col items-center relative">
  
    <div className="flex justify-end my-16 mx-auto sm:mx-[15%]">
      <Image src={purple} alt="first profile pic" width={120} height={100} />
    </div>

  
    <div className="flex justify-center -mt-40 mx-4 sm:mx-auto w-72">
      <Image src={profile} alt="profile pic" width={250} height={100} />
    </div>

  
    <p className="border-2 w-64 h-10 text-center mt-4">Currently working on portfolio</p>
  </div>

 
  <div className="flex flex-col items-center mt-10">
    <p className="border-2 w-96 pl-5 text-[1.1rem] hidden md:block">
      With great power comes great electricity bill
    </p>
    <p className="border-2 w-36 pl-5 mt-4 text-[1.1rem] hidden md:block">
      - Dr. Who
    </p>
  </div>
</div>


      <div className="skills my-32">
        <h1 className="text-2xl font-mono">
          <span id="skills"  className="text-[#C778DD] font-mono ">#</span>skills
        </h1>
        <hr className="w-40 bg-[#C778DD] sm:w-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="border-2 p-3 w-60 text-[1.1rem]">
            <h3>Languages</h3>
            <hr className="my-2"/>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="border-2 p-3 w-60 text-[1.1rem]">
            <h3>Other</h3>
            <hr className="my-2"/>
            <ul>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>
          <div className="border-2 p-3 w-60 text-[1.1rem]">
            <h3>Frameworks</h3>
            <hr className="my-2"/>
            <ul>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Vercel</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about mt-10 mx-5 sm:mx-auto md:mx-auto lg:mx-auto max-w-3xl">
  <h1 className="text-2xl font-mono text-center">
    <span id="about"  className="text-[#C778DD] font-mono">#</span>about-me
  </h1>
  <hr className="w-40 mx-auto bg-[#C778DD] sm:w-60" />
  
  <p className="text-center my-5">Hello, I am Yusra</p>
  
  <div className="text-center">
    <p className="whitespace-normal max-w-lg lg:max-w-xl mx-auto">
      A passionate front-end developer with a strong focus on creating visually engaging and user-friendly web applications. With experience in React, Next.js, and Tailwind CSS, I enjoy turning complex ideas into seamless digital experiences.
    </p>
    <p className="whitespace-normal max-w-lg lg:max-w-xl my-5 mx-auto">
      I am committed to continual learning, and I am currently expanding my skills in UI/UX design, working on a range of personal and professional projects. I aim to blend my technical expertise with a user-centered approach to design, ensuring every project is both aesthetically pleasing and functional.
    </p>
  </div>
  
  <div className="my-5 flex justify-center">
    <Image src={image} alt="profile image" width={250} height={100} />
  </div>
</div>

<div className="contact mt-20 mx-5 sm:mx-auto md:mx-auto lg:mx-auto max-w-3xl text-center">
  <h1 className="text-2xl font-mono">
    <span  id="contact" className="text-[#C778DD] font-mono">#</span>contact
  </h1>
  <hr className="w-48 mx-auto bg-[#C778DD] sm:w-56" />
  
  <p className="whitespace-normal max-w-lg mx-auto mt-5">
    I am interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
  </p>
  
  <div className="flex items-center justify-center mt-4">
    <Image src={Email} width={28} height={50} alt="email icon" />
    <p className="font-mono ml-4">yusra7003@gmail.com</p>
  </div>
</div>

    </div>
  );
}
