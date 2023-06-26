import React, { useState } from 'react';

const Caroussel1 = () => {

    const[valueName, setValueName] = useState("")
    const [valueEmail, setValueEmail] = useState("")

    const [initialValue, setInitialValue] = useState({
        username: "", email: ""
    })

    const handleChangeName = (e) => {
        const userValue = e.target.vallue
        const newValueName = {...initialValue, username: userValue}
        setInitialValue(newValueName)
        console.log("1", initialValue)

    }

        const handleChangeEmail = (e) => {
            setValueEmail(e.target.value)
            const newValueEmail = {...initialValue, email: valueEmail }
            setInitialValue(newValueEmail)
        }

            
        const handleClick = (e)=> {
        //       const handleClick = ()=> {
        //    console.log(initialValue)
        console.log(e.target) 
        
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(initialValue)
    
    }

    return (
        <div className="App">
        <form onSubmit={handleSubmit} className ="form" style={{width: "450px", height: "300px", padding: "50px"}}>
          <div className = "fieldForm">
             <label htmlFor= "inputName" className ="label"  style={{padding: "20px"}}>MON NOM </label>
             <input style={{padding: "20px", fontSize: "18px"}}
              type = "text"
              className = "inputName"
              name="username"
              id="inputName"
              value={valueName}
              onChange={handleChangeName}>
              </input>
          </div>
           <div className = "fieldForm" style={{padding: "20px"}}>
             <label htmlFor= "inputEmail" className ="label" style={{padding: "20px"}}>MON MAIL</label>
             <input style={{padding: "20px", fontSize: "18px"}} 
             type="email" 
             className = "inputEmail" 
             name="email" 
             id="inputEmail"
             value={valueEmail}
             onChange={handleChangeEmail}>
             </input>
          </div>
          <button style={{padding: "25px", marginLeft: "70px"}}>SUBMIT</button>
          </form>
          <div>
            <button onClick={handleClick} style={{padding: "25px", marginLeft: "20px"}}>Add</button>

          </div>
       </div>
     );
   }

export default Caroussel1;