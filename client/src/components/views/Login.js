import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;


export const Login = () => {
  const [admin, setAdmin] = useState({
    username: '',
    email: '',
    password: ''
  })

  // define an admin
  const { username, email, password } = admin

  // use user input data to set the admin
  const handleChange = (e) => {
    e.preventDefault()
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    })
  }

  const registerAdmin = async () => {
    const res = await fetch(`${baseUrl}/admin/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
  })}

  // once admin is set, pass that data when submitted
  const handleSubmit = (e) => {
        e.preventDefault()
        // call API function to send admin data to backend
        registerAdmin()
        // after admin is sent to the backend, reset state
        setAdmin({
          username: '',
          email: '',
          password: ''
        })
      }


  return (
      <>
        <form onSubmit={handleSubmit}>
          <section className="hero is-primary is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form action="" className="box">
                      <div className="field">
                        <label htmlFor="" className="label">Username</label>
                        <div className="control has-icons-left">
                          <input type="text" value={username} name="username" onChange={handleChange} placeholder="username" className="input" required />
                          <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="" className="label">Email</label>
                        <div className="control has-icons-left">
                          <input type="email" value={email} name="email" onChange={handleChange} placeholder="e.g. bobsmith@gmail.com" className="input" required />
                          <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="" className="label">Password</label>
                        <div className="control has-icons-left">
                          <input type="password" value={password} name="password"
                            onChange={handleChange} placeholder="*******" className="input" required />
                          <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <Link to='/' type="submit" className="button is-success">
                          Login
                </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </>
    )
  }