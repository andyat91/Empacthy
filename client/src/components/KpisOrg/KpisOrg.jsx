import "./KpisOrg.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { host } from "../../const/host";
import NewsList from "../NewsList/NewsList";
import naturalezanews from "../../assets/images/cultivo.jpg";
import inversion from "../../assets/images/inversion.jpg";
import macerazgo from "../../assets/images/macerazgo.jpg";

export default function KpisOrg({ deleteClick }) {
  const { user } = useAuthContext();
  const [infoCount, setInfoCount] = useState([]);
  const [infoDonation, setInfoDonation] = useState([]);

  const news = [
    {
      title:
        "Las empresas españolas aumentan un 3% su inversión en acción social, hasta los 1.533 millones en 2021.",
      photo: inversion,
      link: "https://www.europapress.es/economia/noticia-empresas-espanolas-aumentan-inversion-accion-social-1533-millones-2021-estudio-20230208175111.html",
    },
    {
      title:
        "El Parlamento Europeo aprueba la Ley de Restauración de la Naturaleza a 100 días de las elecciones europeas.",
      photo: naturalezanews,
      link: "https://www.rtve.es/noticias/20240227/parlamento-europeo-ley-restauracion-naturaleza/15987967.shtml",
    },
    {
      title:
        "El Gobierno aprueba por decreto la reforma de la ley de mecenazgo.",
      photo: macerazgo,
      link: "https://elpais.com/cultura/2023-12-19/el-gobierno-aprueba-por-decreto-la-reforma-de-la-ley-de-mecenazgo.html",
    },
  ];

  useEffect(() => {
    let id = user.id;

    async function fetchCount() {
      try {
        const response = await fetch(`${host}/data/countorg/${id}`);
        const infoCount = await response.json();
        setInfoCount(infoCount);
      } catch (error) {
        toast.error(error);
      }
    }

    async function fetchDonation() {
      try {
        const response = await fetch(`${host}/data/donationorg/${id}`);
        const infoDonation = await response.json();
        setInfoDonation(infoDonation);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchDonation();
    fetchCount();
  }, [user, deleteClick]);

  return (
    <div className="kpis">
      <h4>Mis KPIs</h4>
      <div className="kpisdata">
        <div>
          <h4>MATCHES:</h4>
          <h4>{infoCount.cantidad} </h4>
        </div>
        <div className="donation">
          <h4> Dinero recibido: </h4>
          <h4>{infoDonation.cantidad} €</h4>
        </div>
      </div>

      <Link to="/perfilorg" className="perfil">
        Editar perfil
      </Link>
      <div className="news">
        <h4>NEWS</h4>

        <div>
          <NewsList newslist={news} className="new" />
        </div>
      </div>
    </div>
  );
}
