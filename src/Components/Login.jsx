import React from 'react'
import logoM from '../Assets/img/Group 99.png'


const login = () => {
    return (
    <>

        <div className="p-6 w-1/2  filter   mx-auto bg-bray-100 p-8  shadow-md flex  justify-center  flex-col items-center  space-y-10">
            <div className='flex  w-4/5 items-center justify-center'>
                <h1 className='text-5xl font-bold text-black'>Iniciar Sesion</h1>
            </div>
           
           {/*  */} 
            <div className='flex flex-col  w-3/4  justify-between '>
            <label className=' mb-3 font-semi label-login tracking-widest' htmlFor="usuario">USUARIO</label>
            <input className= 'p-2 w-full outline-none  bg-gray-400 focus:border border focus:border-blue-800' placeholder='JhonAp25' id="usuario" type="text" />
            </div>

            <div className='flex flex-col  w-3/4 justify-between '>
                <label className=' mb-3 font-semi  label-login tracking-widest ' htmlFor="password">PASSWORD</label>
                <input className='p-2 w-full outline-none  bg-gray-400 focus:border border focus:border-blue-800'   placeholder='123456789' id="password" type="password" />
            </div>

            <div className='flex flex-col w-4/5  items-center justify-between '>
               <h1 >¿Olvidaste tu contraseña?</h1>
            </div>

            <div className='flex flex-col w-4/5  loginAccion items-center justify-between'>
                <button className='p-3 w-2/5 btnLogin text-sm font-semibold tracking-widest  rounded-full border-gray-500 rounded '  >INICIAR SESION</button>       
            </div>
        </div>
        </>
    )
}

export default login








