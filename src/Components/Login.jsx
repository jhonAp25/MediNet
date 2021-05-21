import React, {useState} from 'react'
import logoM from '../Assets/img/Group 99.png'


const Login = ({activeForm}) => {

    const[errores , setErrores] =useState("")
    const[usuario , setUsuario]=useState({ user : '' , pass : ''})
    const[classError , setClassError]=useState("opacity-0")
    

    const getValue=(e)=>{
        setUsuario({...usuario ,
           [ e.target.name ] : e.target.value
        })

        console.log(usuario.length);
        
    }

    const logeo=()=>{
        if(usuario.user === "" && usuario.pass === ""){
            setErrores("Rellene TODOS los campos!!")
            setClassError('error')
            setTimeout(()=> {setClassError('opacity-0') }, 1000);
            
        }else if(usuario.user === ""){
            setErrores("Complete el campo USUARIO campos!!")
            setClassError('error')
            setTimeout(()=> {setClassError('opacity-0')}, 1000);
        }else if(usuario.pass === ""){
            setErrores("UPS!! Se le olvido su PASSWORD ... ")
            setClassError('error')
            setTimeout(()=> {setClassError('opacity-0') }, 2000);
        }else{
            //Validar si son correctas las credenciales...
        }
        
        
    }


    return (
    <>

        <div className={`p-6 w-1/2  filter   mx-auto bg-bray-100 p-8  shadow-md flex  justify-center  flex-col items-center  space-y-10  ${activeForm  ? "active" : "inactive"  }`}>
            <div className='flex  w-4/5 items-center justify-center'>
                <h1 className='text-5xl font-bold text-black'>Iniciar Sesion</h1>
            </div>
           
          
            <div className={`flex flex-col bg-red-200 w-3/4 p-2 border border-red-500 text-red-700 font-bold tracking-widest text-center ${classError}`}    >
                {errores}
            </div>
            <div className='flex flex-col  w-3/4  justify-between '>
            <label className=' mb-3 font-semi label-login tracking-widest' htmlFor="usuario">USUARIO</label>
            <input className= 'p-2 w-full outline-none  bg-gray-400 focus:border border focus:border-blue-800'
                    name='user'
                    placeholder='JhonAp25'
                    id="usuario"
                    type="text"
                    onChange={getValue} />
            </div>

            <div className='flex flex-col  w-3/4 justify-between '>
                <label className=' mb-3 font-semi  label-login tracking-widest' htmlFor="password">PASSWORD</label>
                <input className='p-2 w-full outline-none  bg-gray-400 focus:border border focus:border-blue-800'   placeholder='123456789'
                        name='pass'
                        id="password" 
                        type="password"
                        onChange={getValue} />
            </div>

            <div className='flex flex-col w-4/5  items-center justify-between '>
               <h1 >¿Olvidaste tu contraseña?</h1>
            </div>

            

            <div className='flex flex-col w-4/5  loginAccion items-center justify-between'>
                <button className='p-3 w-2/5 btnLogin text-sm font-semibold tracking-widest  rounded-full border-gray-500 rounded '
                onClick={logeo}  >INICIAR SESION</button>       
            </div>
        </div>
        </>
    )
}

export default Login








