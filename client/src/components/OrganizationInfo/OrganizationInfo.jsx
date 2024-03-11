import "./OrganizationInfo.css";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {  useState } from "react";



export default function OrganizationInfo() {
  const [valor1, setValor1] = useState("1");
  const [valor2, setValor2] = useState("1");
  const [valor3, setValor3] = useState("1");
  const [ods1, setOds1] = useState("1");
  const [ods2, setOds2] = useState("1");
  const [ods3, setOds3] = useState("1");
  const { user } = useAuthContext();

async function handleValor1(event){
  setValor1(event.target.value);
}
async function handleValor2(event){
  setValor2(event.target.value);
}
async function handleValor3(event){
  setValor3(event.target.value);
}

async function handleOds1(event){
  setOds1(event.target.value);
}
async function handleOds2(event){
  setOds2(event.target.value);
}
async function handleOds3(event){
  setOds3(event.target.value);
}
  return (
    <div id="organizationinfo">
      <div className="organizationinfo">
        <div className="imagename">
          <div className="image">
          <img src={user.imagen} />
          <h3>{user.denominacion} </h3>
          
          </div>
          <h5><b>Localización:</b> {user.localizacion} </h5>
        </div>
        <div className="aditionalinfo">
          <h5><b>Causa principal:</b> {user.causas} </h5>
          <h5><b>Tipo de Organización:</b> {user.tipo} </h5>
          
        </div>
      </div>
      <div className="preferences">
        <div>
          <h5>Mis valores y ODS</h5>
          <div>
          <div>
            <p>Valor1</p>
          <select value={valor1} onChange={handleValor1}>
          <option value="1">Justicia, Inclusión y Diversidad</option>
          <option value="2">Proactividad e Innovación</option>
          <option value="3">Impacto+ y Sostenibilidad</option>
          <option value="4">Transparencia y ética</option>
          <option value="5">Integridad</option>
          <option value="6">Dedicación con proposito</option>
          <option value="7">Colaboración</option>
          <option value="8">Profesionalismo y superación</option>
          <option value="9">Empatía y gratitud</option>
        </select>
        </div>
        <div>
            <p>Valor2</p>
          <select value={valor2} onChange={handleValor2}>
          <option value="1">Justicia, Inclusión y Diversidad</option>
          <option value="2">Proactividad e Innovación</option>
          <option value="3">Impacto+ y Sostenibilidad</option>
          <option value="4">Transparencia y ética</option>
          <option value="5">Integridad</option>
          <option value="6">Dedicación con proposito</option>
          <option value="7">Colaboración</option>
          <option value="8">Profesionalismo y superación</option>
          <option value="9">Empatía y gratitud</option>
        </select>
        </div>
        <div>
            <p>Valor3</p>
          <select value={valor3} onChange={handleValor3}>
          <option value="1">Justicia, Inclusión y Diversidad</option>
          <option value="2">Proactividad e Innovación</option>
          <option value="3">Impacto+ y Sostenibilidad</option>
          <option value="4">Transparencia y ética</option>
          <option value="5">Integridad</option>
          <option value="6">Dedicación con proposito</option>
          <option value="7">Colaboración</option>
          <option value="8">Profesionalismo y superación</option>
          <option value="9">Empatía y gratitud</option>
        </select>
        </div>
        <button>Guardar</button>
        </div>
        <div>
        <div>
          <p>ODS 1</p>
        <select value={ods1} onChange={handleOds1}>
          <option value="1">Fin de la pobreza</option>
          <option value="2">Hambre cero</option>
          <option value="3">Salud y bienestar</option>
          <option value="4">Educación de calidad</option>
          <option value="5">Igualdad de género</option>
          <option value="6">Agua limpia y saneamiento</option>
          <option value="7">Energía asequible y no contaminante</option>
          <option value="8">Trabajo decente y crecimiento económico</option>
          <option value="9">Industria, innovación e infraestructuras</option>
          <option value="10">Reducción de desigualdades</option>
          <option value="11">Ciudades y comunidades sostenibles</option>
          <option value="12">Producción y consumo responsable</option>
          <option value="13">Acción por el clima</option>
          <option value="14">Vida submarina</option>
          <option value="15">Vida de ecosistemas terrestres</option>
          <option value="16">Paz, justicia e instituciones solidarias</option>
          <option value="17">Alianzas para lograr los objetivos</option>
        </select>
        
        </div>
        <div>
          <p>ODS 2</p>
        <select value={ods2} onChange={handleOds2}>
          <option value="1">Fin de la pobreza</option>
          <option value="2">Hambre cero</option>
          <option value="3">Salud y bienestar</option>
          <option value="4">Educación de calidad</option>
          <option value="5">Igualdad de género</option>
          <option value="6">Agua limpia y saneamiento</option>
          <option value="7">Energía asequible y no contaminante</option>
          <option value="8">Trabajo decente y crecimiento económico</option>
          <option value="9">Industria, innovación e infraestructuras</option>
          <option value="10">Reducción de desigualdades</option>
          <option value="11">Ciudades y comunidades sostenibles</option>
          <option value="12">Producción y consumo responsable</option>
          <option value="13">Acción por el clima</option>
          <option value="14">Vida submarina</option>
          <option value="15">Vida de ecosistemas terrestres</option>
          <option value="16">Paz, justicia e instituciones solidarias</option>
          <option value="17">Alianzas para lograr los objetivos</option>
        </select>
        
        </div>
        <div>
          <p>ODS 3</p>
        <select value={ods3} onChange={handleOds3}>
          <option value="1">Fin de la pobreza</option>
          <option value="2">Hambre cero</option>
          <option value="3">Salud y bienestar</option>
          <option value="4">Educación de calidad</option>
          <option value="5">Igualdad de género</option>
          <option value="6">Agua limpia y saneamiento</option>
          <option value="7">Energía asequible y no contaminante</option>
          <option value="8">Trabajo decente y crecimiento económico</option>
          <option value="9">Industria, innovación e infraestructuras</option>
          <option value="10">Reducción de desigualdades</option>
          <option value="11">Ciudades y comunidades sostenibles</option>
          <option value="12">Producción y consumo responsable</option>
          <option value="13">Acción por el clima</option>
          <option value="14">Vida submarina</option>
          <option value="15">Vida de ecosistemas terrestres</option>
          <option value="16">Paz, justicia e instituciones solidarias</option>
          <option value="17">Alianzas para lograr los objetivos</option>
        </select>
        </div>
        <button>Guardar</button>
        </div>
        </div>
      </div>
      <div className="userinformation">
        <div className="perfil">
          <h4>Responsable</h4>
        </div>
        <div className="userdata">
          <div>
        <p><b>Nombre:</b> {user.nombre} </p>
        <p><b>Apellidos: </b>{user.apellidos} </p>
        <p><b>Cargo: </b>{user.cargo} </p>
        </div>
        <div>
        <p><b>Teléfono:</b> {user.telefono} </p>
        <p><b>Email:</b> {user.email} </p>
        </div>
        </div>
        <Link className="buttonmodify" to="/companyhome/modify">
          Editar
        </Link>
      </div>
    </div>
  );
}
