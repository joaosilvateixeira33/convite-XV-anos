
import "../app/appStyles.css"
// eslint-disable-next-line react/prop-types
export const MenuLinks = ({ onBack }) =>{
    return(
       <div className="container-message">
         <h1>Teste</h1>
         <button onClick={onBack}>Voltar</button>
       </div>
    )
}