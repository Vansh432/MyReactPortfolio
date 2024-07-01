
function Footer() {

    return <>
        <div className="border-2 h-64 text-center text-white">
            <div className="bg-[#1f1f1f]  w-full h-44 pt-16 font-semibold">
                <p className="max-sm:text-[.8rem]">I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                <div className="pt-5 text-3xl flex justify-between w-20 m-auto" >
                    <a href="https://github.com/Vansh432" target="_blank" className="cursor-pointer"><ion-icon name="logo-github" ></ion-icon></a>
                   <a href="https://www.linkedin.com/in/vanshdeep-arya-750976175/" target="_blank" className="cursor-pointer"> <ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
            </div>
            <div className="bg-black h-20 flex justify-center items-center max-[350px]:text-[.7rem]">
              © 2022 Vansh. Design by Vansh deep arya
            </div>
        </div>
    </>
}


export default Footer;