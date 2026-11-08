import Header from './components/header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

import './AddDoctor.css';


function AddDoctor() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
        personalEmail: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

     const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Send invite to:", form.personalEmail, form);

  };

    return (
        <>
            <div className="header">
                <Header />
                </div>
                <div className="sidebar">
                    <Sidebar />
                    </div>
                    
                    <div className="main-container">
                        <div className="heading"><h2>Add Doctor</h2></div>
                    <div className="main-content">
                        
                        <form onSubmit={handleSubmit}>
                            <h1>Doctor Info</h1>
                            <div className="row-1">
                                
                                <div className="field">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                                </div>

                                <div className="field  ">
                                    <label htmlFor="E-mail">E-mail:</label>
                                    <input type="email" id="email" name="email" placeholder="john.doe@example.com" value={form.email} onChange={handleChange} required />
                                </div>

                                <div className="field">
                                    <label htmlFor="Contact">Contact no:</label>
                                    <input type="text" id="Contact" name="Contact" placeholder="(321) 123-4567" value={form.contact} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row-2">

                                <div className="field">
                                <label htmlFor="Password">Password:</label>
                                <div classNmae="input-with-suffix">
                                    <input type={showPassword ? "text" : "password"} id="Password" name="Password" value={form.password} onChange={handleChange} required />
                                    <button className="toggle" type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showConfirm ? "Hide password" : "Show password"}>

                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="Confirm Password">Confirm Password:</label>
                                <div className="input-with-suffix">
                                    <input type={showConfirm ? "text" : "password"} id="Confirm Password" name="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
                                    <button className="toggle" type="button" onClick={() => setShowConfirm(!showConfirm)} aria-label={showConfirm ? "Hide password" : "Show password"} >
                                    {showConfirm ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                    </div>
                    
                    {error && <p className="error-message">{error}</p>}

               
                <h3 > Send Credentials</h3>
                     <div className="row3">
                        
                            <div className="field">
                            <input type="email"  name="personal email" placeholder="Therapiest personal email" value={form.personalEmail} onChange={handleChange} required />    
                        </div>
                        </div>
                        
                         
        <div className="form-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/ScreenDoc")}
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Send Invite Link
          </button>
          </div>
                        
                        

                        </form>
                        
            </div>
        
             </div>
              

</>
        
            );
}

export default AddDoctor;


