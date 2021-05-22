import React from 'react'

const RegistroNew = ({activeForm}) => {
    return (
        <>

        <div className={`h-screen p-6 w-1/2  filter   mx-auto bg-bray-100 p-8  shadow-md flex  justify-center  flex-col items-center  space-y-10  ${activeForm  ? "inactive" : "active"  } `}>
            <div className='flex  w-4/5 items-center justify-center'>
                <h1 className='text-5xl font-bold text-black'>REGISTRO DE USUARIO</h1>
            </div>
           
          
          

            <div className='flex flex-row w-3/4 flex-wrap  justify-between space-y-10'>
                
                    <div className='flex flex-col  width5  justify-end '>      
                    <label className=' mb-3 font-semi label-formRegi tracking-widest ' htmlFor="usuario">Nombre</label>
                    <input className= 'p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'
                            name='user'
                            placeholder='Jhon'
                            id="usuario"
                            type="text"
                        />
                    </div>

                    <div className='flex flex-col  width5    '>
                    <label className=' mb-3 font-semi label-formRegi tracking-widest' htmlFor="usuario">Apellido</label>
                    <input className= 'p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'
                            name='user'
                            placeholder='Doe'
                            id="usuario"
                            type="text"
                        />
                    </div>

                    <div className='flex flex-col  width8'>
                    <label className=' mb-3 font-semi label-formRegi tracking-widest' htmlFor="usuario">Correo</label>
                    <input className= 'p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'
                            name='correo'
                            placeholder='JhonAp25@gmail.com'
                            id="usuario"
                            type="text"
                        />
                    </div>

                    <div className='flex flex-col  width4 '>
                    <label className=' mb-3 font-semi label-formRegi tracking-widest' htmlFor="usuario">Telefono </label>
                    <input className= 'p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'
                            name='telefono'
                            placeholder='999-999-999'
                            id="usuario"
                            type="number"
                        />
                    </div>

                    <div className='flex flex-col  w-full '>
                        <label className=' mb-3 font-ligth  label-formRegi tracking-widest ' htmlFor="password">Password</label>
                        <input className='p-2 w-full outline-none  inputForm focus:border border focus:border-blue-800'   placeholder='123456789'
                                name='pass'
                                id="password" 
                                type="password"
                                />
                  

                    </div>

            </div>
            

            <div className='flex flex-col w-3/4  loginAccion items-center justify-between'>
                <button className='p-3 w-full btnLogin text-sm font-semibold tracking-widest   border-gray-500 rounded '
                 >LISTO!</button>       
            </div>
        </div>
        </>
    )
}

export default RegistroNew
