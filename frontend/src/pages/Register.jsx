import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name,email,password,password2} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
           // e.target.name is the name keyword in input fields
           // e.target.value is the value of the name keyword.
           // this means whenever we type into the different fields
           // we only update for the field we're currently in
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
  return <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create an account</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <input type="text" className="form-contol" id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
        </div>
        <div className="form-group">
            <input type="email" className="form-contol" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-contol" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-contol" id='password2' name='password2' value={password2} placeholder='Confirm your password' onChange={onChange} />
        </div>
        <div className="form-group">
            <button type='submit' className="btn btn-block">
                Submit
            </button>
        </div>
        </form>
    </section>
  </>
  
}

export default Register