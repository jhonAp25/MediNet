import React,{useState} from "react";
import Login from "../Components/Login";
import "../Assets/App.css";
import Presentacion from "../Components/Presentacion";
import RegistroNew from "../Components/RegistroNew";




const Index = () => {

  
  const [classMove , setClassMove]=useState("cardLeft")
  const [btnAccion , setBtnAccion]=useState(true)
  const [activeForm , setActiveForm]=useState(true)
   

  const irRegistrarse = () => {
    setClassMove("cardRigth")
    setBtnAccion(!btnAccion)
    setActiveForm(!activeForm)

  
  };
  const irLogin = () => {
    setClassMove("cardLeft")
    setBtnAccion(!btnAccion)
    setActiveForm(!activeForm)

  
  };

 

  return (
    <div className="index">
      
      <Login activeForm={activeForm} />
      <Presentacion  irRegistrarse={irRegistrarse} irLogin={irLogin} btnAccion={btnAccion} classMove={classMove} />
      <RegistroNew  activeForm={activeForm} />

      
      
    </div>
  );
}

export default Index;
