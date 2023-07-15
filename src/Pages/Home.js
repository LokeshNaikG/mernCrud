import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

    const [data, setData] = useState([])

    
    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:9000/getDetails')
            const jsonData = await res.json()
            setData(jsonData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const deleteUser = async (id) => {
        if (window.confirm(`You are about to delete id: ${id}`)) {
            await axios.delete(`http://localhost:9000/delete/${id}`)
            window.alert(`User deleted with id: ${id} `)
            setTimeout(() => fetchData(), 5)
        }
    }

    return (

        <div>
            <Link to='/addUser' >
                <button >Add User</button>
            </Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        <Link to={`/userDetails/${item.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteUser(item.id) }} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home
