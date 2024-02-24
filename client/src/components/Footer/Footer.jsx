import "./Footer.css";
import BrandLogo from "../../assets/icons/BrandLogo";
import LinkedIn from "../../assets/icons/LinkedIn";
import Mail from "../../assets/icons/Mail";


export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="footer wrap">
        <ul>
          <li>Sobre nosotros</li>
          <li>Principos basicos</li>
          <li>Empresas</li>
          <li>Organizaciones</li>
          <li>Politica de privacidad</li>
          <li>Administrador</li>
        </ul>
        <div className="brandcopy">
          <h2>
            <BrandLogo />
          </h2>
          <h5>Matchmaking B2Org </h5>
          <h4 className="copyright"> A n d r é s A l v e s T u r n e s ©</h4>
        </div>
        <div className="redes">
          <h4><LinkedIn/> </h4>
          <a href="https://www.linkedin.com/in/szeitnermejoracontinua/" target="_blank"> Daniel Cristian Szeitner Baldrich</a>
          <a href="https://www.linkedin.com/in/andresalvesturnes/" target="_blank"> Andrés Alves Turnes</a>
          <h4><Mail/> </h4>
          <a href="mailto:danielszeitner@hotmail.com" target="_blank">danielszeitner@hotmail.com</a>
          <a href="mailto:andres.alves.91@gmail.com" target="_blank">andres.alves.91@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
