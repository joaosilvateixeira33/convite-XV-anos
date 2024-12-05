import './appStyles.css'

import imageHeader from '../../assets/header-image.png'
import imageFrase from '../../assets/frase.png'

function App() {

  return (
    <div className="app">
      <img src={imageHeader} alt="image logo" className="header-image" />
      <img src={imageFrase} alt="frase image" className="frase" />
    </div>
  )
}

export default App
