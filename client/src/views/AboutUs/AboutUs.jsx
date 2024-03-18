import Form from "../../components/Form/Form";
import "./AboutUs.css";
import ods from "../../assets/images/ODS.png";

export default function AboutUs() {
  return (
    <div id="aboutus" className="wrap">
      <div className="textletter">
        <div className="explanation">
          <div className="sectionaboutus">
            <div>
              <h4>Nosotros</h4>
              <p>
                Nuestros valores, principios y creencias se sustentan en la
                empatía y la transparencia, guiados por una mentalidad proactiva
                orientada a multiplicar los impactos positivos.
              </p>
              <ul>
                <li>
                  <b>Empatía:</b> Permanecemos atentos a las necesidades de los
                  demás, sensibles a sus emociones y comprensivos frente a las
                  diversas realidades.
                </li>
                <li>
                  <b>Actitud proactiva:</b> Asumimos la responsabilidad de
                  aportar nuestra capacidad, intelecto y acción para contribuir
                  activamente a un mundo mejor.
                </li>
                <li>
                  <b>Impacto positivo:</b> Centramos nuestras acciones en
                  aumentar la prosperidad de las personas y del planeta en todas
                  sus dimensiones.
                </li>
                <li>
                  <b>Transparencia:</b> Fomentamos relaciones sólidas y
                  duraderas basadas en una honestidad genuina.
                </li>
              </ul>
              <p>
                Creemos firmemente que lo que no se comparte se pierde, así como
                también que lo compartido se multiplica y lo difundido inspira.
                Somos empatía en acción, comprometidos con las personas, el
                planeta y una prosperidad compartida.
              </p>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Nuestra Labor</h4>
              <p>
                Eliminamos los obstáculos que separan a las pymes tecnológicas
                de las organizaciones medioambientales y sociales comprometidas
                con la economía circular, la ruralidad y la sostenibilidad.
                Facilitamos el desarrollo de relaciones de patrocinio alineadas
                con valores, principios y Objetivos de Desarrollo Sostenible
                (ODS), garantizando una afinidad cultural óptima.
              </p>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Nuestro Objetivo</h4>
              <p>
                Fomentamos colaboraciones significativas que impulsen el
                progreso hacia un futuro más próspero, sostenible y equitativo.
                Conectamos a aquellos que comparten una visión común para
                generar un impacto positivo y duradero en el mundo.
              </p>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Nuestra Visión</h4>
              <p>
                Aspiramos a convertirnos en el referente mundial en la conexión
                entre empresas y organizaciones, facilitando patrocinios
                transparentes y de alta calidad, amplificando el alcance de las
                compañías y el impacto de las organizaciones en beneficio del
                planeta y la humanidad. Buscamos trascender más allá del ámbito
                digital y del impacto, compartiendo nuestros valores, principios
                y creencias con cada individuo, empresa y entidad que forme
                parte de nuestra comunidad.
              </p>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Problemas que Resolvemos</h4>
              <p>
                Somos plenamente conscientes de los recursos limitados, tanto en
                tiempo como en esfuerzo y dinero, que las pymes deben destinar
                para llevar a cabo actividades de acción social y difundirlas
                adecuadamente. Sin embargo, todas estas dificultades pueden
                superarse fácilmente con solo unos clics. Nuestra plataforma
                elimina la necesidad de que las empresas cuenten con
                departamentos o expertos en responsabilidad social, publicidad,
                marketing, patrocinio y fidelización, permitiéndoles enfocarse
                en sus actividades principales mientras facilitamos el proceso
                de desarrollo de patrocinios. Del mismo modo, para las
                organizaciones, acceder a fondos para cumplir sus propósitos y
                darse a conocer siempre ha sido un desafío, al igual que
                encontrar un patrocinador alineado con su misión. Nuestra
                solución tecnológica no reemplaza a las personas, sino que las
                acerca.
                <b>
                  Te damos una cálida y fraternal bienvenida a Empacthy, donde
                  somos mucho más que una buena comunidad, somos empatía en
                  acción.
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="empacthyletter">
          <div className="letter">E</div>
          <div className="letter">M</div>
          <div className="letter">P</div>
          <div className="letter">A</div>
          <div className="letter">C</div>
          <div className="letter">T</div>
          <div className="letter">H</div>
          <div className="letter">Y</div>
          <img src={ods} />
        </div>
      </div>
      <Form id="form" />
    </div>
  );
}
