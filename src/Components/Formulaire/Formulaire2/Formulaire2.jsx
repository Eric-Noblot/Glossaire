import "./formulaire2.scss"
import { useState, useEffect } from "react"

const Formulaire2 = () => {

    const initialValues = {username : "", email: "", password: "" }

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        // const value = e.target.value
        const {name, value} = e.target
        //setFormValues({...formValues, username: value}) //on choisit l'exemple ci dessous
        setFormValues({...formValues, [name]: value}) //en rajoutant les[] à name (qui renvoie à name dans le input), on dit que le name est maintenant la clé qui va recevoir les infos, si on met pas les [] on va avoir un name qui va apparaitre dans notre objet
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    // useEffect (() => {
    //     console.log(formErrors)
    //     if(Object.keys(formErrors).length === 0 && isSubmit ){
    //         console.log(formValues)
    //     }
    // },[formErrors]) 


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.username) {
            errors.username = "Username is required !"
        }
        if (!values.email) {
            errors.email = "Email is required !"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required !"
        }  else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters" 
        }

        return errors //on renvoie un objet error
    }

    return (
        <div className = "container">

            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Signed successfully !</div> ) : <pre>{JSON.stringify(formValues, undefined, 2)}</pre> }
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <form onSubmit ={handleSubmit}>
                <h1>login Form</h1>
                <div className="form">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <input value={formValues.username} onChange={handleChange} id = "username" type="text" name="username" placeholder="Username..." /> 
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input value={formValues.email} onChange={handleChange} id = "email" type="email" name="email" placeholder="Email..." /> 
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input value={formValues.password} onChange={handleChange} id = "password" type="password" name="password" placeholder="Password..." /> 
                    </div>
                    <p>{formErrors.password}</p>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Formulaire2;