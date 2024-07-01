import  Card2 from '../Components/Card2'
import Data from '../Data/expreinceData.json'
function Experience(){
  console.log(Data);
   
    return <>
      <div className="p-5 mb-10 max-sm:p-1 ">
        <h1 className='headingAllPage'>EXPERIENCES</h1>
      
        {Data.map(Element=>{
          
          return <Card2  {...Element}/>
        })}
    
      </div>
    </>
}
Card2.defaultProps={
  "heading":"Heading",
  "company":"company",
  "duration":"duration",
  "description":"description",
}
export default Experience;