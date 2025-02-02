import "./appStyles.css";
import { MenuLinks } from "../menuLinks";

import { useState } from "react";
import imageHeader from "../../assets/header-image.png";
import imageFrase from "../../assets/frase.png";
import imageCarta from "../../assets/carta.png";
import imgSelo from "../../assets/selo.png"

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="main">
      {isClicked ? (
        <MenuLinks onBack={() => setIsClicked(false)} />
      ) : (
        <div className="container-message">
          <img src={imageHeader} alt="image logo" className="header-image" />
          <img src={imageFrase} alt="frase image" className="frase" />
          <img
            src={imageCarta}
            alt="carta image"
            className="carta"
          />
          <img src={imgSelo} alt="selo" className="selo" onClick={() => setIsClicked(true)}/>
        </div>
      )}
  </div>
  );
}

export default App;
