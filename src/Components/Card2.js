import './Styles/card2.scss';

import Tilt from 'react-parallax-tilt'
function Card2(props) {
    const { heading, company, duration, description, img,flex } = props;
    console.log(props);
    return <>

        <div className={flex ? "flex px-44 container  max-sm:p-0 max-sm:justify-center" : "flex justify-end px-44 max-sm:p-0   container max-sm:justify-center"} >
        <div className={flex?"circlestyleRight":"circlestyleLeft"}></div>
        <div className='line'></div>
            <Tilt className='tiltBox'>
                <div className="card2 p-3 pb-7 h-[320px] max-sm:p-2 max-sm:h-fit" >
                    
                    <div className="p-5 pt-7 rounded-xl max-sm:p-1 max-sm:pt-1" >
                        <img  src={img} alt='loading...'/>
                    </div>
                    <div className="pt-5 max-sm:pt-1">
                        <h2 className='font-bold text-2xl pb-2 '>{heading}</h2>
                        <h3 className='pb-4 flex items-center'> {company} <span className='border-2 px-2 rounded-xl'>{duration}</span>
                        </h3>
                        <p className='experDescription'>{description}</p>
                    </div>
                </div>
            </Tilt>
        </div>
    </>

}


export default Card2;