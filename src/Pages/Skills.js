import Card from '../Components/Card3';
import './Styles/skill.scss';
import Data from '../Data/skill.json'
function Skill() {
   
    const ProgramingLan=Data[0].programingLanguage;
    const Developer=Data[0].developerSkill;
    return <>
        <div className='p-5 mb-10 overflow-hidden'>
            <h1 className='headingAllPage max-sm:mb-12'>Skill</h1>
            <div className='px-28 lineDivider mb-14 max-sm:p-0'>
                <div>
                    <h2 className='backblur font-semibold text-xl mb-10 tracking-wider  w-fit px-5 max-sm:mb-5'>Programing Language  </h2>
                    <div className='flex flex-wrap justify-evenly'>
                        {ProgramingLan.map((Element)=>{
                           return <Card {...Element}/>
                        })}
                    </div>
                </div>
            </div>
            <div className='px-28 lineDivider max-sm:p-0'>
                <div>
                    <h2 className='backblur font-semibold text-xl mb-10 tracking-wider  w-fit px-5 max-sm:mb-5'>Developer Skill  </h2>
                    <div className='flex flex-wrap justify-evenly'>
                    {Developer.map(Element=>{
                        return <Card {...Element}/>
                    })}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Skill;