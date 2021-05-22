import React, {useState} from 'react'

import { useForm } from "react-hook-form";


const Login = ({activeForm}) => {

    const[usuario , setUsuario]=useState({ user : '' , pass : ''})
    //Use Form....
    const { register, handleSubmit, errors } = useForm();    

    const getValue=(e)=>{
        setUsuario({...usuario ,
           [ e.target.name ] : e.target.value
        })}

    const onSubmit = data => console.log(data);
    const logeo=()=>{
      
        
    }


    return (
    <>

        <div className={`animate__animated animate__fadeIn  p-6 w-1/2  filter   mx-auto bg-bray-100 p-8  shadow-md flex  justify-center  flex-col items-center  space-y-10  ${activeForm  ? "active" : "inactive"  }`}>
            <div className='flex  w-4/5 items-center justify-center'>
                <h1 className='text-5xl font-bold text-black'>Iniciar Sesion</h1>
            </div>
           
            <form   className=' flex flex-col justify-center items-center space-y-10 w-full' 
                    onSubmit={handleSubmit(onSubmit)} >

           
        
            <div className='flex flex-col  w-3/4  justify-between '>
            <label className=' mb-3 font-semi label-login tracking-widest' htmlFor="usuario">USUARIO</label>
            <input className= 'p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'
                    name='user'
                    placeholder='JhonAp25'
                    id="usuario"
                    ref={register}
                    type="text"
                    />
            </div>

            <div className='flex flex-col  w-3/4 justify-between '>
                <label className=' mb-3 font-semi  label-login tracking-widest' htmlFor="password">PASSWORD</label>
                <input className='p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'   placeholder='123456789'
                        name='pass'
                        id="password" 
                        type="password"
                         />
            </div>
            </form>

            <div className='flex flex-col w-4/5  items-center justify-between '>
               <h1 >¿Olvidaste tu contraseña?</h1>
            </div>

            

            <div className='flex flex-col w-4/5  loginAccion items-center justify-between'>
                <button type="submit" href="/empl" className='p-3 w-2/5 btnLogin text-sm font-semibold tracking-widest  rounded-full border-gray-500 rounded '
                 >INICIAR SESION</button>       
            </div>
        </div>
        </>
    )
}

export default Login








