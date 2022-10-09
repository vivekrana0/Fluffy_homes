import { useState } from "react"

export default function SignUpForm() {
    const [credentials, setCredentials] = useState({
        name : '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setError('')
    }

    function handleSubmit() {
        return
    }

    const disable = credentials.password !== credentials.confirm ? 'disabled' : ''

    console.log(disable)

    return (
        <div className="wrapper">
          <div className="form-container">
           
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={credentials.name} placeholder='Enter name' onChange={handleChange} required />
              <label>Email</label>
              <input type="email" name="email" value={credentials.email} placeholder='Enter email' onChange={handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={credentials.password} placeholder='Create password' onChange={handleChange} required />
              <label>Confirm</label>
              <input type="password" name="confirm" value={credentials.confirm} placeholder='Confirm password' onChange={handleChange} required />
              <div className="btn-container">
              <button  className="button" type="submit" disabled={disable} >Submit</button>
              </div>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      );
}