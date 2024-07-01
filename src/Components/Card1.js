import './Styles/card.scss';

import Tilt from 'react-parallax-tilt'
function Card(props){
    const {nameProject,projectType,date,content,link}=props
    return <>
    <Tilt>
      <div className='card w-[400px] h-[431px] border   m-3 mb-10 rounded-2xl p-5 max-sm:w-[300px]'>
        <div className='border-b-2 pb-5'>
          <img src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"  height="80px" className='w-20'/>
          <div className='flex justify-between items-center mt-3 '>
            <h1 className='font-bold text-2xl'>{nameProject}</h1>
            <a target='_blank' href={link} className='text-2xl border-2 px-2 flex justify-center items-center rounded-xl'><ion-icon name="link-outline"></ion-icon></a>
          </div>
        </div>
        <div className='pt-3'>
        <div className='flex justify-between items-center  mb-5'>
          <h4 className='text-lg'>{projectType}</h4>
          <h4 className='text-sm border-2 px-2 flex justify-center items-center rounded-xl'>{date}</h4>
          </div>
          <p className='max-sm:text-[.8rem]'>
        {content}
          </p>
        </div>
      </div>
      </Tilt>
    </>
}

export default Card;