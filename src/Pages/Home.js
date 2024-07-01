import myimage from '../images/MyPhoto.png'
import './Styles/home.scss';

import { TypeAnimation } from 'react-type-animation';
function Home(){

    


    return <>
    
        <div className='home-page flex   justify-center max-md:flex-col-reverse'>
            <div className="details w-[60%] text h-full  pt-20 pl-12 max-md:w-[100%] max-md:pt-0  max-sm:pl-5  ">
             <h3>I AM DESIGNER</h3>
             <h1>Creative Design and Web <span className='content-1'> 
             <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Solutions',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Design',
      ]}
 
      speed={500}
      repeat={Infinity}
      className='typeAnimation'
    />
             </span></h1>
             <p className='leading-8 mt-8 text-zinc-600 text-[17px] mb-12 max-md:mt-0 max-[350px]:mb-[20px] '>Welcome to my portfolio! I am a passionate web developer specializing in creating dynamic, responsive, and user-friendly websites. With a strong foundation in front-end and back-end technologies. Explore my projects and see how I can help bring your vision to the web. Let's build something great together!</p>
             <a href='vansh.pdf' className='py-4 px-14 border-2 bg-[#0283c4] rounded-3xl text-white  max-sm:py-[10px] max-sm:px-[20px]  max-sm:text-[.8rem]' download> Download My CV</a>
            </div>
            <div className="H-image w-2/4 h-[70%] max-md:w-[100%]  flex justify-center z-[100]">
                  <img src={myimage} alt="loading"  className='max-md:w-[100%] z-[100]  '/>
            </div>

        </div>
    </>
}
// <b className='is-hidden'>Solutions</b> <b>Design</b>


export default Home;