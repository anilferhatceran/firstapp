import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Login() {
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
        
    })

    const {email,password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Use useSelector to select the different states from the global state auth, so we can use them
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)


    useEffect(() => {
        if(isError){
          toast.error(message)
        }
        // isSuccess is true because in the authSlice, we set isSuccess to true if register was fulfilled. *Look in addCase()*
        if(isSuccess || user){
          navigate('/')
        }
        dispatch(reset())
        
      }, [user,isError,isSuccess,message,navigate,dispatch])
      

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

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner />
    }
  return <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>
        
        <div className="form-group">
            <input type="email" className="form-contol" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-contol" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
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

export default Login