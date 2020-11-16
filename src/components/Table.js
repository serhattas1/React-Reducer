import React,{useState, useContext} from 'react';
import {TableContext} from '../contexts/TableContext';

const Table=()=>{
   const[name,setName] = useState('');
   const[surname,setSurname] = useState('');
   const {users,dispatch}=useContext(TableContext);
    
   const handleFormSubmit=e=>{
      e.preventDefault();
      dispatch({ type: 'ADD_USER', user: {
        name:name,
        surname:surname
    }});
}

    const removeUser=e=>{
        dispatch({type:'REMOVE_USER',id:e.target.id});
    }

   return(
    <div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">#</th>
      </tr>
    </thead>
    <tbody>
    {
            users.length>0 ?
            (
                users.map(user=>{
                    return(
                            <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td><button className='btn btn-sm btn-danger' onClick={removeUser} id={user.id}>Delete</button></td>
                            </tr>
                        )
                })
                
            ): <div>No data</div>
        }
    </tbody>
  </table>
    <div className='col-md-4'>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="txtName" value={name} name='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" className="form-control" id="txtSurname" value={surname} name='surname' onChange={(e) => setSurname(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
  </div>
  
   )
}

export default Table;