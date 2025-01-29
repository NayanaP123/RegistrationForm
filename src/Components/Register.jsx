import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import reg from '../assets/reg.png';
import { toast } from 'react-toastify';




function Login({ setdata }) {
    const [form, setForm] = useState({ 
        username: '', 
        email: '', 
        dob: '', 
        phoneNumber: '', 
        address: '', 
        gender: '', // Added gender field
        password: '', 
        confirmPassword: '' 
    });


    console.log(form);
    
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidDOB, setInvalidDOB] = useState(false);
    const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
    const [invalidAddr, setInvalidAddr] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidConfirm, setInvalidConfirm] = useState(true);

    const [check, setCheck] = useState(true);

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const phoneNumberRegex = /^\d{10}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    const navigate = useNavigate();

    const handleName = (name) => {
        if (nameRegex.test(name)) {
            setForm({ ...form, username: name });
            setInvalidName(false);
        } else {
            setInvalidName(true);
        }
    };

    const handleEmail = (email) => {
        if (email.endsWith('@gmail.com')) {
            setForm({ ...form, email: email });
            setInvalidEmail(false);
        } else {
            setInvalidEmail(true);
        }
    };

    const handlePhoneNumber = (phonenumber) => {
        if (phoneNumberRegex.test(phonenumber) ) {
            setForm({ ...form, phoneNumber: phonenumber });
            setInvalidPhoneNumber(false);
        } else {
            setInvalidPhoneNumber(true);
        }
    };

    const handlePassword = (password) => {
        if (passwordRegex.test(password)) {
            setForm({ ...form, password: password });
            setInvalidPassword(false);
        } else {
            setInvalidPassword(true);
        }
    };

    const handleConfirm = (confirm) => {
        if (form.password === confirm) {
            setForm({ ...form, confirmPassword: confirm });
            setInvalidConfirm(false);
            setCheck(true)
        } else {
            setInvalidConfirm(true);
        }
    };

    const handleAddress = (addr) => {
        if (nameRegex.test(addr)) {
            setForm({ ...form, address: addr });
            setInvalidAddr(false);
        } else {
            setInvalidAddr(true);
        }
    };

  

    const handleSubmit = () => {
        if (invalidPhoneNumber) {
            toast.error("Phone number must be exactly 10 digits!");
            return; // Stop execution
        }
    
        if (form.password !== form.confirmPassword) {
            setCheck(false);
            return;
        }
    
        if (
            form.username &&
            form.email &&
            form.dob &&
            form.phoneNumber &&
            form.address &&
            form.gender &&
            form.password &&
            form.confirmPassword
        ) {
            setdata(form);
            navigate('/home');
            toast.success("Registered successfully");
        } else {
            toast.error("Enter all details correctly!");
        }
    };
    

    return (
        <div style={{ backgroundColor: 'beige', height: '138vh' }}>
            <h1 style={{ textAlign: 'center' }}>REGISTRATION FORM</h1>
          

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        {/* <img src={reg} alt="" /> */}
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <FloatingLabel label="Full Name" className="mb-2">
                            <Form.Control onChange={(e) => handleName(e.target.value)} type="text" />
                            {invalidName && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Only alphabetic characters and it should not end with a space</em>
                                </p>
                            )}
                        </FloatingLabel>

                        <FloatingLabel label="Email address" className="mb-2">
                            <Form.Control onChange={(e) => handleEmail(e.target.value)} type="email" />
                            {invalidEmail && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Enter valid email (user@gmail.com)</em>
                                </p>
                            )}
                        </FloatingLabel>

                        <FloatingLabel label="DOB" className="mb-2">
                            <Form.Control
                                onChange={(e) => setForm({ ...form, dob: e.target.value })}
                                type="date"
                            />
                            {invalidDOB && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Invalid</em>
                                </p>
                            )}
                        </FloatingLabel>

                        <FloatingLabel label="Phone Number" className="mb-2">
                            <Form.Control onChange={(e) => handlePhoneNumber(e.target.value)} type="text" />
                            {invalidPhoneNumber && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Please enter 10 digits</em>
                                </p>
                            )}
                        </FloatingLabel>

                        <FloatingLabel label="Address" className="mb-2">
                            <Form.Control onChange={(e) => setForm({ ...form, address: e.target.value })} type="text" />
                            {/* {invalidAddr && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Please enter address</em>
                                </p>
                            )} */}
                        </FloatingLabel>

                        <FloatingLabel label="Gender" className="mb-2">
                            <Form.Select onChange={(e)=>setForm({ ...form, gender: e.target.value })}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Password" className="mb-2">
                            <Form.Control onChange={(e) => handlePassword(e.target.value)} type="password" />
                            {invalidPassword && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em>Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character</em>
                                </p>
                            )}
                        </FloatingLabel>

                        <FloatingLabel label="Confirm Password" className="mb-2">
                            <Form.Control onChange={(e) => handleConfirm(e.target.value)} type="password" />
                            {!invalidConfirm && (
                                <p style={{ fontSize: '15px', color: 'green' }}>
                                    <em><i class="fa-solid fa-check" style={{color:'green'}}></i> Password matched</em>
                                </p>
                            )}

{!check && (
                                <p style={{ fontSize: '15px', color: 'red' }}>
                                    <em><i class="fa-solid fa-x" style={{color:'red'}}></i> Password not matched</em>
                                </p>
                            )}

                            
                        </FloatingLabel>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button onClick={handleSubmit} variant="primary">
                                Register
                            </Button>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        {/* <img src={reg} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
