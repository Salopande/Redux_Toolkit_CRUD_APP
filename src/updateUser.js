import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from './Redux/userSlice';

const UpdateUser = () => {
  
const {id} = useParams();
const users = useSelector((state)=> state.users);
console.log(users)
const existInuser = users.filter((f) => f.id == id)
console.log(existInuser)
console.log(id)
const {name, email} = existInuser[0];
const [uname, setUName] = useState(name);
const [uemail, setUEmail] = useState(email);
const dispatch = useDispatch()
const navigate = useNavigate();

 const handleUpdate = (e)=>{
    e.preventDefault();
    dispatch(editUser({id,name:uname,email:uemail}));
    navigate('/')
 }
  return (
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
       <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Edit User</h2>
         <form onSubmit={handleUpdate} >
             <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' value={uname} className='form-control'  placeholder='enter name' onChange={(e)=>setUName(e.target.value)}/>
             </div>
             <div>
             <label htmlFor='email'>Email:</label>
                <input type='email' name='email' value={uemail} className='form-control' placeholder='enter email' onChange={(e)=>setUEmail(e.target.value)}/>
             </div><br/>
             <button className='btn btn-info'>Update</button>
         </form>
       </div>
    </div>
  )
}

export default UpdateUser
