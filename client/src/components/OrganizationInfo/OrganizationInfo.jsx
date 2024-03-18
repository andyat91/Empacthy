import "./OrganizationInfo.css";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../../const/host";
import toast from "react-hot-toast";

export default function OrganizationInfo() {
  const { user } = useAuthContext();

  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [ods1, setOds1] = useState("");
  const [ods2, setOds2] = useState("");
  const [ods3, setOds3] = useState("");

  const [prevValor1, setPrevValor1] = useState("");
  const [prevValor2, setPrevValor2] = useState("");
  const [prevValor3, setPrevValor3] = useState("");
  const [prevOds1, setPrevOds1] = useState("");
  const [prevOds2, setPrevOds2] = useState("");
  const [prevOds3, setPrevOds3] = useState("");

  useEffect(() => {
    let id = user.id;

    async function showValor() {
      try {
        const response = await fetch(`${host}/data/valoresinfo/${id}`);
        const valor = await response.json();

        setValor1(valor[0].id);
        setValor2(valor[1].id);
        setValor3(valor[2].id);

        setPrevValor1(valor[0].id);
        setPrevValor2(valor[1].id);
        setPrevValor3(valor[2].id);
      } catch (error) {
        console.log(error);
      }
    }
    async function showOds() {
      try {
        const response = await fetch(`${host}/data/odsinfo/${id}`);
        const ods = await response.json();

        setOds1(ods[0].id);
        setOds2(ods[1].id);
        setOds3(ods[2].id);

        setPrevOds1(ods[0].id);
        setPrevOds2(ods[1].id);
        setPrevOds3(ods[2].id);
      } catch (error) {
        console.log(error);
      }
    }
    showValor();
    showOds();
  }, [user]);

  async function handleChange(event, setStateFunction) {
    setStateFunction(event.target.value);
  }

  async function savePreferencesValor() {
    let idorg = user.id;

    const formDataValor = {
      idorg,
      prevValor1,
      prevValor2,
      prevValor3,
      valor1,
      valor2,
      valor3,
    };

    try {
      const response = await fetch(`${host}/data/safevalores`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataValor),
      });
      const message = await response.json();
      if (response.ok) {
        toast.success(message.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function savePreferencesOds() {
    let idorg = user.id;

    const formDataOds = {
      idorg,
      prevOds1,
      prevOds2,
      prevOds3,
      ods1,
      ods2,
      ods3,
    };

    try {
      const response = await fetch(`${host}/data/safeods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataOds),
      });
      const message = await response.json();
      if (response.ok) {
        toast.success(message.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="organizationinfo">
      <div className="organizationinfo">
        <div className="imagename">
          <div className="image">
            <img src={user.imagen} />
            <h3>{user.denominacion} </h3>
          </div>
          <h5>
            <b>Localización:</b> {user.localizacion}
          </h5>
        </div>
        <div className="aditionalinfo">
          <h5>
            <b>Causa principal:</b> {user.causas}
          </h5>
          <h5>
            <b>Tipo de Organización:</b> {user.tipo}
          </h5>
        </div>
      </div>
      <div className="preferences">
        <h4>Mis valores y ODS</h4>
        <div className="select">
          <div className="containervalor">
            <div>
              <p>Primer Valor</p>
              <select
                value={valor1 || ""}
                onChange={(event) => handleChange(event, setValor1)}
              >
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
              <p>Segundo Valor</p>
              <select
                value={valor2 || ""}
                onChange={(event) => handleChange(event, setValor2)}
              >
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
              <p>Tercer Valor</p>
              <select
                value={valor3 || ""}
                onChange={(event) => handleChange(event, setValor3)}
              >
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
            <button onClick={() => savePreferencesValor()}>Guardar</button>
          </div>
          <div className="containerods">
            <div>
              <p>Primer ODS (Objetivos de Desarrollo Sostenible)</p>
              <select
                value={ods1 || ""}
                onChange={(event) => handleChange(event, setOds1)}
              >
                <option value="1">Fin de la pobreza</option>
                <option value="2">Hambre cero</option>
                <option value="3">Salud y bienestar</option>
                <option value="4">Educación de calidad</option>
                <option value="5">Igualdad de género</option>
                <option value="6">Agua limpia y saneamiento</option>
                <option value="7">Energía asequible y no contaminante</option>
                <option value="8">
                  Trabajo decente y crecimiento económico
                </option>
                <option value="9">
                  Industria, innovación e infraestructuras
                </option>
                <option value="10">Reducción de desigualdades</option>
                <option value="11">Ciudades y comunidades sostenibles</option>
                <option value="12">Producción y consumo responsable</option>
                <option value="13">Acción por el clima</option>
                <option value="14">Vida submarina</option>
                <option value="15">Vida de ecosistemas terrestres</option>
                <option value="16">
                  Paz, justicia e instituciones solidarias
                </option>
                <option value="17">Alianzas para lograr los objetivos</option>
              </select>
            </div>
            <div>
              <p>Segundo ODS (Objetivos de Desarrollo Sostenible)</p>
              <select
                value={ods2 || ""}
                onChange={(event) => handleChange(event, setOds2)}
              >
                <option value="1">Fin de la pobreza</option>
                <option value="2">Hambre cero</option>
                <option value="3">Salud y bienestar</option>
                <option value="4">Educación de calidad</option>
                <option value="5">Igualdad de género</option>
                <option value="6">Agua limpia y saneamiento</option>
                <option value="7">Energía asequible y no contaminante</option>
                <option value="8">
                  Trabajo decente y crecimiento económico
                </option>
                <option value="9">
                  Industria, innovación e infraestructuras
                </option>
                <option value="10">Reducción de desigualdades</option>
                <option value="11">Ciudades y comunidades sostenibles</option>
                <option value="12">Producción y consumo responsable</option>
                <option value="13">Acción por el clima</option>
                <option value="14">Vida submarina</option>
                <option value="15">Vida de ecosistemas terrestres</option>
                <option value="16">
                  Paz, justicia e instituciones solidarias
                </option>
                <option value="17">Alianzas para lograr los objetivos</option>
              </select>
            </div>
            <div>
              <p>Tercer ODS (Objetivos de Desarrollo Sostenible)</p>
              <select
                value={ods3 || ""}
                onChange={(event) => handleChange(event, setOds3)}
              >
                <option value="1">Fin de la pobreza</option>
                <option value="2">Hambre cero</option>
                <option value="3">Salud y bienestar</option>
                <option value="4">Educación de calidad</option>
                <option value="5">Igualdad de género</option>
                <option value="6">Agua limpia y saneamiento</option>
                <option value="7">Energía asequible y no contaminante</option>
                <option value="8">
                  Trabajo decente y crecimiento económico
                </option>
                <option value="9">
                  Industria, innovación e infraestructuras
                </option>
                <option value="10">Reducción de desigualdades</option>
                <option value="11">Ciudades y comunidades sostenibles</option>
                <option value="12">Producción y consumo responsable</option>
                <option value="13">Acción por el clima</option>
                <option value="14">Vida submarina</option>
                <option value="15">Vida de ecosistemas terrestres</option>
                <option value="16">
                  Paz, justicia e instituciones solidarias
                </option>
                <option value="17">Alianzas para lograr los objetivos</option>
              </select>
            </div>
            <button onClick={() => savePreferencesOds()}>Guardar</button>
          </div>
        </div>
      </div>
      <div className="userinformation">
        <h4>Responsable</h4>

        <div className="userdata">
          <div>
            <p>
              <b>Nombre:</b> {user.nombre}  
            </p>
            <p>
              <b>Apellidos: </b>
              {user.apellidos}  
            </p>
            <p>
              <b>Cargo: </b>
              {user.cargo}  
            </p>
          </div>
          <div>
            <p>
              <b>Teléfono:</b> {user.telefono}  
            </p>
            <p>
              <b>Email:</b> {user.email}  
            </p>
          </div>
        </div>
        <Link className="buttonmodify" to="/organizationhome/modify">
          Editar
        </Link>
      </div>
    </div>
  );
}
