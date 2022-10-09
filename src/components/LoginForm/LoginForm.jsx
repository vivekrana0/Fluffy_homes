import { useState } from "react"

export default function LoginForm() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
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


    return (
        <div className="wrapper">
          <div className="form-container">
           
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" name="email" value={credentials.email} placeholder='Enter email' onChange={handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={credentials.password} placeholder='Create password' onChange={handleChange} required />
              <div className="btn-container">
              <button  className="button" type="submit" >Submit</button>
              </div>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      );
}