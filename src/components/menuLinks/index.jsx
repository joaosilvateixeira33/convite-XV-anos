
import "../app/appStyles.css"
import "../menuLinks/linksStyle.css"
import imageHeader from "../../assets/header-image.png";
import imgDate from "../../assets/Date.png";
import linkPresenca from "../../assets/link-presenca.png";
import linkLocalizacao from "../../assets/link-localizacao.png";
import linkPresente from "../../assets/link-presente.png";
// eslint-disable-next-line react/prop-types
export const MenuLinks = ({ onBack }) =>{
    return(
       <div className="container-message">
          <img src={imageHeader} alt="image logo" className="header-image" />
          <button onClick={onBack}>Voltar</button>
          <img src={imgDate} alt="date birthday"  className="dateImg"/>
          <div className="links-container">
            <a href="https://wa.me/5521964123874?text=Quero%20confirmar%20presen%C3%A7a%20nos%20XV%20anos%20da%20Maria%20Ant%C3%B4nia!"><img src={linkPresenca} alt="presenca" className="link-item"/></a>
            <a href="https://www.google.com/maps/dir/-22.9976776,-43.617474/espa%C3%A7o+pontal/@-23.0082753,-43.6489412,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9be92b6ed18a2b:0xd4b36d89b927ec29!2m2!1d-43.5143072!2d-23.023235?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"><img src={linkLocalizacao} alt="presenca" className="link-item"/></a>
            <a href="https://www.felicitous.com.br/mariaantonianucci"><img src={linkPresente} alt="presenca" className="link-item"/></a>
          </div>
       </div>
    )
}