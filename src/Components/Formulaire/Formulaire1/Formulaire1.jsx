import "./formulaire1.scss"
import { useState, useRef } from "react"

const Formulaire1 = () => {
    
   const [ustensils, setUstensils] = useState([
    {id: 1, name: "couteau"},
    {id: 2, name: "cuillère"},
    {id: 3, name: "fourchette"},
    {id: 4, name: "paille"}
    ])

    const deleteObject = (id, name) => {
        const isConfirm = window.confirm(`Voulez vous supprimer l'élément ${name}?`)
        if(isConfirm){
        const ustensilsCopy = [...ustensils]
        const newArray = ustensilsCopy.filter((ustensil) => ustensil.id !== id )
        setUstensils(newArray)
        }

    }

//--------------------------
    // AJOUT OBJET AVEC USE REF (inputRef.current.value)
    
    const inputRef = useRef()

    const onSubmitUseRef = (event) => { //ici on recupere l'evenement de la fonction direct, il n'y pas de données passées en amont
        event.preventDefault()
        let indexId = ustensils.length + 1
        const ustensilsCopy = [...ustensils]
        const inputValue = inputRef.current.value
        
        const newObject = {id: indexId, name: inputValue}

        ustensilsCopy.push(newObject)
        setUstensils(ustensilsCopy)
        inputRef.current.value = ""
    }

    // --------------------------
    // AJOUT OBJET METHODE STATE (event.target.value)
    const [newObject, setNewObject] = useState("")

    const onSubmitState = (event) => {
    event.preventDefault()

    const ustensilsCopy = [...ustensils]
    console.log(ustensilsCopy)
    const id = new Date().getTime() //méthode bcp utilisé pour etre sur de créer un id unique, recupe aussi le temps de la création de l'objet
    const name = newObject
    ustensilsCopy.push({ id: id, name: name })

    setUstensils(ustensilsCopy)
    setNewObject("")
    }

const onChangeUseRef = (event) => {
    setNewObject(event.target.value)
}

//--------------------------)
    // METHODE POUR LES +1 / -1
    const [result, setResult] = useState(1)

    function resultPlus() {
        const newResult = result + 1 
        setResult(newResult)
    }

    const resultMoins = () => {
        const newResult = result -1
        setResult(newResult)
    }

    return (

        <div className="test">
            <h1 style={{padding: "20px"}}>Liste d'ustensils</h1>
            <ul>
            {ustensils.map((ustensil)=> {
                return (
                <li key={ustensil.id} className = "" style={{padding: "10px"}}>{ustensil.name}
                <button onClick ={() => deleteObject(ustensil.id, ustensil.name)} className ="buttonDelete">SUPPRIMER</button>
                </li>
                )
            }
            )}
            </ul>


            <form onSubmit={onSubmitUseRef} action="submit" className = "submitOne">
                <input 
                ref={inputRef} //ref est un mot clé utilisé avec Useref, un peu comme un ID qu'on attriburait pour faire un getElementbyId après
                className = "inputOne" 
                type="text"
                placeholder="Ajouter un ustensil..." 
                style={{marginBottom: "10px"}}>
                </input>
                <button style={{padding: "20px", marginLeft:"20px", backgroundColor: "gold"}}>Ajouter</button>
                <div>(méthode avec use Ref)</div>
            </form>


            <form onSubmit={onSubmitState} action="submit" className = "submitOne">
                <input 
                value={newObject} //on ne laisse pas taper l'utilisateur direct dans la barre, c'est nous qui remplissons le valeur de l'input en changeant le State
                onChange = {onChangeUseRef} // on autorise avec onChange
                className = "inputOne" 
                type="text" 
                placeholder="Ajouter un ustensil..." 
                style={{marginBottom: "10px"}}>
                </input>
                <button style={{padding: "20px", marginLeft:"20px", backgroundColor: "gold"}}>Ajouter</button>
                <div>(méthode sans use Ref)</div>
            </form>


            <div style ={{border: "1px solid black"}}>
                <div style={{padding: "50px", fontSize:"30px"}}>{result}</div>
                <button onClick={resultPlus}style={{marginLeft: "30px", padding: "20px"}}> + 1</button>
                <button onClick ={resultMoins} style={{marginLeft: "30px", padding: "20px"}}> - 1</button>
            </div>
        </div>


    );
};

export default Formulaire1;
