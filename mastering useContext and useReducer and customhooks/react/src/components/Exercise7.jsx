import React from 'react'
import  {useState,useEffect} from "react";

import {useForm} from "react-hook-form";


// handleSubmit is a function provided by React Hook Form that handles form submission, validates the form data, and passes the collected data to the callback function if validation succeeds.

//here   are the contents  of the react hook forms 
// ==================== REACT HOOK FORM ====================

// 1. useForm()
// Used to manage form handling, input values, validation and form states.

// 2. register()
// Connects input fields with React Hook Form.
// Example: {...register("name")}

// 3. handleSubmit()
// Handles form submission and passes the collected form data
// to our callback function.

// 4. Validation
// required   -> field must not be empty
// minLength  -> minimum number of characters
// maxLength  -> maximum number of characters
// pattern    -> validates using a regular expression
// validate   -> custom validation logic

// 5. errors
// formState.errors stores validation errors.
// Example: errors.name?.message

// 6. reset()
// Resets the form fields to their default values.

// 7. isSubmitting
// Boolean indicating whether the form is currently being submitted.
// Useful for disabling the submit button during submission.

// 8. watch()
// Continuously watches a field's value.
// Useful for displaying live input or conditional UI.

// 9. getValues()
// Retrieves current form values when called.
// Does not continuously watch for changes.

// 10. setValue()
// Manually changes the value of a form field.
// Example: setValue("name", "Darshan")

// 11. mode
// Controls when validation is triggered.
// onSubmit -> validation on submit
// onChange -> validation on input changes
// onBlur   -> validation when leaving the input
// onTouched-> after first interaction, then on subsequent changes

// 12. defaultValues
// Sets initial values of form fields when the form loads.

// 13. Success Handling
// No built-in success message function.
// We use useState to display success messages.

// 14. isSubmitted
// Boolean indicating whether the form has been submitted
// at least once.

function BasicForm(){
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form is submitted  mother fucker!!")
        console.log(name)
        

    }

    
    return<>
    <form  onSubmit={(e)=>{handleSubmit(e)}}>
        
        <input value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter your name mother fucker"></input>
        
            {name}
        <br></br>
        <button type="submit">submit</button>


    </form>
    </>
}



function MultipleInput(){
    
    const [data,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    const [error,setError]=useState({ name:" ",email:"",password:'',state:false});
    
    const [is,setIs]=useState(false);
    const [success,setSuccess]=useState(false);


    const handleChange=(e)=>{
        const {name,value}=e.target;
      
        setFormData({...data,[name]:e.target.value});
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(data);
            const newError={
                name:"",
                email:"",
                password:"",
                state:false
            }
        
            if(data.name.length<4 || data.name==""){
                // setError({...error,name:"Must contain more than 3 letters"});
                newError.name="Must  containt more than 3 letters"

            }if(!data.email.includes("@gmail.com")){
                // setError({...error,email:"must provide a valid email"});
                newError.email="must provide  a valid email"
            }if(data.password.length<8){
                // setError({...error,password:"password should be greater than  8 characters"})
                newError.password="password should be greater than 8 characters";
            }
            newError.state=true;
            

        setError(newError);
        console.log(error);
        
          
    }
    
    return <>

    <form className='flex flex-col gap-4  px-10  py-10 border' onSubmit={handleSubmit}>

        <label> Enter  your  name
        <input onChange={handleChange} value={data.name} type="text" name="name" placeholder="Enter the name"></input>

        <div className={`${error.state?"":"hidden"}`}>
            {error.name.length>1?(<div className='text-red-500 ' >{error.name}</div>):(<div className="text-green-500">Seem's  right!!</div>)}
        </div>
         </label>
         <label>Enter  the email 
             <input  onChange={handleChange}  value={data.email} type="email" name="email"  placeholder="Enter  the Email" />

             <div className={`${error.state?"":"hidden"}`}>
            {error.name.length>1?(<div className='text-red-500 ' >{error.name}</div>):(<div className="text-green-500">Seem's  right!!</div>)}
        </div>
        </label>
        
        <label>
            Enter the  passWord!!
        <input onChange={handleChange}  value={data.password} type="password" name="password" placeholder="Enter the placeholder"/>
         <div className={`${error.state?"":"hidden"}`}>
            {error.name.length>1?(<div className='text-red-500 ' >{error.name}</div>):(<div className="text-green-500">Seem's  right!!</div>)}
        </div>
        </label>
        <button className="px-2 py-1 border rounded-[20px]" type="submit">Submit</button>

    </form>

    </>
}



function StudentReg(){
    const [data,setData]=useState({
        name:'',
        agree:false,
        payment:"",
        options:''


    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        setData({ name:'',
        agree:false,
        payment:"",
        options:''
})
    }

    const handleChange=(e)=>{
        //thiss is the  function we  have to answer
       const {name,checked,value,type}=e.target;

        if(checked){
            setData({...data,agree:checked});
        }

            setData({...data,[name]:value});
        
       

    }




    return ( 
    <>
    <h1>Student Registration Form!!!!</h1>
    <form onSubmit={handleSubmit}>


    <div className="inputs flex  gap-4 ">   <label htmlFor="name">Enter the name</label>
        <input   onChange={handleChange} name="name" className='border  px-2' id="name" placeholder="enter the name "/>
        </div> 

        <label>
    <input type="checkbox"  name="agree" onChange={handleChange} value="yes" />
        tick the box for the agreement over it !!
    </label>
    <h1>implementing radio bttns</h1>
    <label>
        <input type="radio"   onChange={handleChange} name="payment" value="upi"/>UPI 
    </label>
    <label>
        <input type="radio" onChange={handleChange} name="payment" value="cash"/>
        Cash
    </label>

    <h1> implementing the options</h1>

    <select  name="options"onChange={handleChange}>
        <option value="">Select Country</option>
          <option value="India">India</option>
            <option value="USA">Usa</option>
              <option value="Canada">Canada </option>
                <option value="Australia">Australia</option>
    </select>


    {data.agree?( <button type='submit'>submit</button>): (<button  className='blur' type='submit'>submit</button>)}
    

    </form>

    
    </>)
}


function ReactHookForm(){
    //react-hook-form 
    //it replaces the manual  use  of the useState;
    //we donot  have to maintasin the value aspect and every other field
    //that has been given by the useState//
    //normally react hook form  works as manager 
    // takes the inputs  from the   users and handle the data to the function
    //how  does the submit work 
    const {register,handleSubmit,reset,setValue,watch,getValues,formState:{errors,isSubmitting}}=useForm();

    function submit(data){
        console.log(data);
    
    }

    

   //here are  two things  we have  studied 
    // that is  register  that is giving like 
    // ...register   will be  like adding  the selected field wiht the  name ,
    // under that register we  have many sub functions that are  
    // these are  like maxlength  and value and message:  fielcs if  i any condition failes  the message comes  in
    // then we have maxLength and minLength  provide  like  it checks teh length of  the field  automatically

    // then the next section is that  we have  pattern in which  checks the  pattern that has consisted
    // then moreover  we   have validation in which we defines the  function with the value given in it 
    // after the value  given we can define  any validation field and then check it weather checking it 
    // we return the validation  part
    // then we have likr formState:{errors} it gets the error that we written inside  the  fields
    //then the next part is  reset  function from the useForm();
    // it clears  all forms fields   and resets  the  form to its default values
    //reset will clears the  form  fields upon    calling the reset  function

    //isSubmitting
    //whether  the form  is currently  being  submitted
    //  the  thing is that  we have like   isSubmitting like
    //  the gap between  the click on submit button and  after that  submitting it to the   server the  gap of time is represented  by
    //   represented by the isSubmitting

    // Watch is the function through which can watch what's the  user is  typing?/

    //getvalues is the funciton through which  we get the values of  the input field  at any time

    // then we  have setValues that 
    // that are  setValue("name","darshan") it is the field like   which is used to set  the values of  any fucking  field
    //that are

    //  the next concept are  mode  which is like   when we do  have  the validations like  when the  react hook form 
    //checks  for the validations of the  fields that are like
    // we have something right   onsubmit ,oncvhange ,onblur

//     const { register } = useForm({
//   defaultValues: {
//     name: "Darshan",
//     email: "darshan@gmail.com"
//   }
// }); we can  give the  default   values  using this 
    const username=watch("name");
    

return <>



    <form  onSubmit={handleSubmit(submit)} >



        <input  {...register("name",{required:"hey  entered the fucking error mother fucker",maxLength:{
            value:10,message:"Maximu 10 characters  allowed"
        },
        validate:(value)=>{
             return value.includes("123") || "password must contains 123"

        }
        })} placeholder="enter the name"/>
        <p>{errors.name && errors.name.message}</p>

        <input {...register("password",{required:"hey please enter a fucking validn "})} placeholder="enter the  password"/>
        <p>{errors.password && errors.password.message}</p>
            <button type="submit"   onClick={()=>{setValue("name","darshan")}} disabled={isSubmitting}>{isSubmitting?"submitting":"submit"}</button>
            <br></br>
            <button  type="button" onClick={()=>{reset()}}>clear </button>
    </form>
     

     <h1> {username}</h1>
    </>
}




function Exercise7() {
  return (
    <> 
    <ReactHookForm/>
 
    </>

  )
}

export default Exercise7