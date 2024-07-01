import Card from '../Components/Card1'
import Data from '../Data/projectData.json'
function Porject() {
    console.log(Data);
  
    return <>
    <div className='p-5'>
        <h1 className='headingAllPage'>Projects</h1>
        <div className='flex flex-wrap justify-evenly'>
            {Data.map(Element=>{
               return <Card {...Element}/>
            })}
            {/* <Card/>
       <Card/> */}
        </div>
        </div>
    </>
}

export default Porject;