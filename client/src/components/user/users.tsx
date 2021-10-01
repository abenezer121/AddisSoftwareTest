import React, { useEffect, useState }  from 'react'
import MaterialTable from "material-table";

import { useSelector, useDispatch } from "react-redux";
import {UserDiv} from './userStyle'
import {
    getUsers,
    deleteUser,
    updateUser
  } from "./../../redux/actionCreator"
  
  import {RootState} from './../../redux/rootReducer'
  

function Users () {


  const users:any = useSelector((state:RootState) => state.users);
  const dispatch = useDispatch();
  const [allusers , setAllUsers] = useState([])


  interface userType {
    _id : string,
    Name : string,
    Salary : string,
    Gender : string,
    birthDate : string,
    __v ? : number

}
  

  useEffect(() => {
    
      dispatch(getUsers())
  }, []);

useEffect(() => {
    setAllUsers(users.userList)
}, [users]);


  return (
    
    <UserDiv>
      <h4 className="p-4"> { "User Lists"} </h4>
      
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title={"All users"}


        columns={[
          { title: "Name", field: "Name" ,  editable: 'always' ,
          customFilterAndSearch: (term, rowData) => (rowData.Name).indexOf(term) != -1
        },
          { title: "Salary", field: "Salary" , editable: 'always',
           customFilterAndSearch: (term, rowData) => (rowData.Salary).indexOf(term) != -1
        },
          { title: "Gender", field: "Gender" ,  editable: 'always',
          customFilterAndSearch: (term, rowData) => (rowData.Gender).indexOf(term) != -1
   
        },
          { title: "birthDate", field: "birthDate" ,  editable: 'always',
         },
          
          
        ]}
        data={allusers}
        editable={{
            onRowDelete: async (oldData : userType  ) => {
                dispatch(deleteUser(oldData._id))
            },
        
            onRowUpdate: async (newData, oldData) =>{
                dispatch(updateUser(newData._id ,newData.Name ,newData.Gender , newData.Salary , newData.birthDate))  
            },
        }}
        
      />
    </UserDiv>
  );
}

export default Users;