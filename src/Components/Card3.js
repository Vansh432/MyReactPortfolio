import Tilt from 'react-parallax-tilt'
function Card(props){
    const {img,technicalName}=props
    return<>
            <div className="w-fit h-fit rounded-xl m-5 ">
                   <Tilt>
                    <img  src={img} className="rounded-xl h-36" width="150px" /></Tilt>
                <h2 className="text-center mt-2 font-semibold text-lg">{technicalName}</h2>
            </div>
    </>
}

export default Card;