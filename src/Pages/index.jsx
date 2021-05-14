import React,{useState} from "react";
import Login from "../Components/Login";
import "../Assets/App.css";




const Index = () => {
   

  const irRegistrarse = () => {

    alert("Hola");
    console.log('hola');
  };

  return (
    <div className="index">
      <div className="imgPresentacion flex flex-col justify-center items-center  space-y-10">
        <h1 className="text-5xl text-gray-100  font-bold">Hola, amigo!</h1>
        <h1 className="text-3xl w-4/5 text-gray-100  text-center font-light">
          {" "}
          Ingrese sus datos personales y comience su viaje con nosotros.
        </h1>
        <div  className="flex flex-col w-4/5  loginAccion items-center justify-between">
          <button
            onClick={irRegistrarse}
            
            
            className="p-3 w-2/5 btnRegistrarse  text-sm font-semibold tracking-widest rounded-full bg-red-200"
          >
            REGISTRARSE
          </button>
        </div>
      </div>
      <Login></Login>
    </div>
  );
}

export default Index;
