import React, {useState , useEffect} from 'react'
import { FormGroup, Input, Button } from "reactstrap";
import {AddUserButton , DivForm,Label , P , SubmitButton} from "./adduserstyle"
import {RootState} from './../../redux/rootReducer'
import {
  CreateUser
} from "./../../redux/actionCreator"
import { useSelector, useDispatch } from "react-redux";


  import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function AddUsers () {

  const [name , setName] = useState("")
  const [gender , setGender] = useState("Male")
  const [salary , setSalary] = useState("")
  const [message , setMessage] = useState("")
  const [startDate, setStartDate] = useState("");

  const users:any = useSelector((state:RootState) => state.users);
  const dispatch = useDispatch();
  const [allusers , setAllUsers] = useState([])




  function handleAdd() {
  
    
      if(name.trim() == "" || gender.trim() == "" || salary.trim() == "" || startDate.trim() == ""){
          setMessage("Please Complete The Field")
      }
      else if(!salary.match("^[0-9]*$")){
        setMessage("only number is allowed in salary")
      }
      else{
        setMessage("")
        dispatch(CreateUser(name,gender,salary,startDate))

      }
  }

  function handleChange(){

  }

    return (
      <AddUserButton>
        <P>{message}</P>
        
  <DivForm className="form-group">
    <Label >Name</Label>
    <input type="text" className="form-control" onChange = {(e)=>{ setName(e.target.value)}} placeholder="name"/>
  </DivForm>

  <DivForm className="form-group">
    <Label >Gender</Label>
    
    <select className="form-control" onChange = {(e)=>{ setGender(e.target.value)}} >
      <option>Male</option>
      <option>Female</option>
    </select>
  </DivForm>

  <DivForm className="form-group">
    <Label >Salary</Label>
    <input type="text" className="form-control" onChange = {(e)=>{ setSalary(e.target.value)}}  placeholder="salary"/>
  </DivForm>

    <DivForm className="form-group">
    <Label >Birth Date</Label>
   
    <input type="date" id="Test_DatetimeLocal" onChange={(e) => { setStartDate(e.target.value)}}/> 

    </DivForm> 
  
  <SubmitButton>
    <button  className="btn btn-primary" onClick = {handleAdd}>Add User</button>
   
  </SubmitButton>

 
  


      </AddUserButton>
    );
}

export default AddUsers;