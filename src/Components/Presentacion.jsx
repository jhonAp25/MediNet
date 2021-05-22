import React,{useState} from 'react'

const Presentacion = ({irLogin, irRegistrarse , classMove , btnAccion}) => {

    return (
        <div className={`imgPresentacion flex flex-col justify-center items-center  space-y-10 ${classMove}`} >
        <h1 className="animate__animated animate__lightSpeedInRight text-5xl text-gray-100  font-bold">Hola, amigo!</h1>
        <h1 className="animate__animated animate__lightSpeedInRight text-3xl w-4/5 text-gray-100  text-center font-light" >
          
          Ingrese sus datos personales y comience su viaje con nosotros
        </h1>
        <div  className="flex flex-col w-4/5  loginAccion items-center justify-between">

        {btnAccion ?
         <button onClick={irRegistrarse}
                className="p-3 w-2/5 btnRegistrarse  text-sm font-semibold tracking-widest rounded-full bg-red-200">  REGISTRARSE </button>
          :  <button onClick={irLogin}
          className="p-3 w-2/5 btnRegistrarse  text-sm font-semibold tracking-widest rounded-full bg-red-200">  LOGIN </button>
        }
        </div>
      </div>
    )
}

export default Presentacion
