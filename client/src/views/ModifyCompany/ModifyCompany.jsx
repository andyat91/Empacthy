import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import "./ModifyCompany.css";
import toast from "react-hot-toast";
import { host } from "../../const/host";


export default function ModifyCompany() {
  const { user, updateUser } = useAuthContext();
  const [formData, setFormData] = useState({
    id: user.id,
    denominacion: user.denominacion,
    nombre: user.nombre,
    apellidos: user.apellidos,
    email: user.email,
    telefono: user.telefono,
    cargo: user.cargo,
    sector: user.sector,
    tipoempresa: user.tipoempresa,
    localizacion: user.localizacion,
  });

  useEffect(() => {
    setFormData({
    id: user.id,
      denominacion: user.denominacion,
      nombre: user.nombre,
      apellidos: user.apellidos,
      email: user.email,
      telefono: user.telefono,
      cargo: user.cargo,
      sector: user.sector,
      tipoempresa: user.tipoempresa,
      localizacion: user.localizacion,
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {

        const response = await fetch(`${host}/user/updatecompany`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
           updateUser(formData);
           
            toast.success(response.message);
          }else {
            toast.error(response.message);
          }
        
    } catch (error) {
        toast.error(error)
        
    }

  }

  return (
    <div id="modifycompany" className="wrap">
     <div className="modifycompany">
        <h4>Modificar datos</h4>

        <form onSubmit={handleSubmit}>
          <div className="form">
          <div className="formleft">
          <label>
            Nombre de la empresa:
            <input
              type="text"
              name="denominacion"
              value={formData.denominacion}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Apellidos:
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>handleChange(e)}
            />
          </label>
        
          </div>
          <div className="formright">
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Cargo:
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Sector:
            <input
              type="text"
              name="sector"
              value={formData.sector}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Tipo de Empresa:
            <input
              type="text"
              name="tipoempresa"
              value={formData.tipoempresa}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          <label>
            Localización:
            <input
              type="text"
              name="localizacion"
              value={formData.localizacion}
              onChange={(e) =>handleChange(e)}
            />
          </label>
          </div>
          </div>
          <button type="submit">Guardar cambios</button>
        </form>
    
        </div>
    </div>
  );
}
