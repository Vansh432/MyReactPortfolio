import './Styles/contact.scss'
import Title from 'react-parallax-tilt'
import { useForm } from '@formspree/react';
import { useState } from 'react';

function Contact(){


    const [state, handleSubmit] = useForm("movaazqe");
    const [name,setname]=useState('')
    const [email,setemail] = useState('');
    const [message,setmessage] = useState('');

   
    function setValue(){
        if(name=='' || email=='' || message==''){
            alert('please fills all fields');
            return;
        }
        setname('');
        setemail('');
        setmessage('');
        alert("you have successfully submitted. we will call back in 24 hours");
    }

    function setvalueOfinputName(e){
        setname(e.target.value);
     }
     function setvalueOfinputEmail(e){
        setemail(e.target.value);
     }
     function setvalueOfinputMessage(e){
         setmessage(e.target.value);
     }

  
    
   
    return <>
       <div className='p-5 mb-10 max-sm:p-0'>
        <h1  className='headingAllPage'>Contact</h1>
        <Title className='w-fit m-auto'>
        <div className="w-[500px] h-[500px] border-2 m-auto p-10 rounded-xl max-sm:w-[320px] max-sm:h-fit max-sm:p-1 ">
            <form className="text-center m-auto h-full max-sm:p-5"  onSubmit={handleSubmit}>
            <div className='inputBox mb-5'>
            <ion-icon name="person-circle"></ion-icon>
            <input type="text" name="name" className='pl-7 text-black' placeholder='Enter Full Name' value={name} onChange={setvalueOfinputName} required/>
            </div>
            <div className='inputBox'>
            <ion-icon name="mail"></ion-icon>
            <input type="email" className='pl-7' name='email' placeholder='Enter Email' onChange={setvalueOfinputEmail} value={email} required/>
            </div>  
            <textarea rows="8" cols="39" className='mb-10 mt-5 border-[#676767] border-[1px] pl-3 pt-2 max-sm:w-[280px] rounded-xl' placeholder='Message' name='message' onChange={setvalueOfinputMessage} value={message} required></textarea>
            <input type="submit" onClick={setValue} className='button-1 rounded-xl h-[40px]'/>      
            </form>
        </div>
        </Title>
        </div>
    </>
}

export default Contact;