import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Adduser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')

    const { id } = useParams()

    useEffect(() => {


        axios.get(`http://localhost:9000/userDetails/${id}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setName(res.data[0].name)
                    setEmail(res.data[0].email)
                    setContact(res.data[0].contact)
                    console.log(res.data)
                }
            })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, contact)

        if (!name || !email || !contact) {
            window.alert("Please fill the fields!")
        } else {
            axios.post('http://localhost:9000/addUser', {
                 name: name,
                email: email,
                contact: contact
            }).then(function (response) {
                window.alert('User Added Successfully')
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        }
        setName("");
        setEmail("");
        setContact("")
    };


    const handleUpdate = () => {

        axios.put(`http://localhost:9000/update/${id}`, { name, email, contact })
            .then(res => {
                window.alert('Updated Successfully!')
                console.log('User Updated ', res)
            })
        setName('')
        setEmail('')
        setContact('')
    }
    return (

        <div>
            <h1>Add User</h1>
            <br />
            <form >
                <label id='Name'>Name</label><br />
                <input
                    id='Name'
                    type='text'
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label id='Email'>Email</label><br />
                <input
                    id='Email'
                    type='text'
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label id='Contact'>Contact</label>
                <br />
                <input
                    id='Contact'
                    type='text'
                    value={contact || ''}
                    onChange={(e) => setContact(e.target.value)}
                />
                <br />
                <div>
                    {
                        id !== null && id !== undefined ?
                            <button onClick={handleUpdate}>Update</button> : <button onClick={handleSubmit} >Submit</button>
                    }
                </div>

            </form>
            <Link to="/">
                <button >Back</button>
            </Link>

        </div>
    )
}

export default Adduser
