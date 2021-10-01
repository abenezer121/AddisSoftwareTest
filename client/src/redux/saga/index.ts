import { data, string } from "@tensorflow/tfjs-node";
import { put, takeLatest, all } from "redux-saga/effects";


const APISERVER = 'http://localhost:5000'
interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

interface actionType  {
    type : string,
    payload ? : any
}


function* fetchUsers() {
    let statustext;
  const json:ResponseGenerator = yield fetch(`${APISERVER}/api/user`).then((response) =>{
    statustext = response.status
    return  response.json() }
  );
  if(statustext == 200){
        yield put({ type: "USERS_RECEIVED", payload: json });
  }
  else if(statustext == 409){
    alert("cannot retrieve data")
  }
  else{
      alert("Internal Error")
  }

}


function* fetchById(action : actionType) {
    let statustext;
    const json:ResponseGenerator = yield fetch(`${APISERVER}/api/user/`+action.payload.id).then((response) =>{
        statustext = response.status
        return  response.json() }
    );

    if(statustext == 200){

    yield put({ type: "USERS_RECEIVED", payload: json });
  }
  else if(statustext == 409){
    alert("cannot retrieve data")
  }
  else{
      alert("Internal Error")
  }
    
  }

function* createUser(action : actionType){

    const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          name : action.payload.name,
          gender:action.payload.gender,
          salary:action.payload.salary,
          dateofbirth:action.payload.dateofbirth
        ,
        }),
      };
      let statustext;
    const json:ResponseGenerator = yield fetch(`${APISERVER}/api/user/` , requestOptions).then((response) =>
    {

        statustext = response.status
        return  response.json() }
  );

  if(statustext == 200){
    yield put({ type: "addUser", payload: {
        name : action.payload.name,
        gender:action.payload.gender,
        salary:action.payload.salary,
        dateofbirth:action.payload.dateofbirth} });


}
else if(statustext == 407){
  alert("cannot retrieve data")
}
else{
  alert("Internal Error")
}
 



          
}

function* deleteUser(action : actionType){
    const requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          id : action.payload.id,
        
        }),
      };
      let statustext;
    const json:ResponseGenerator = yield fetch(`${APISERVER}/api/user/` , requestOptions).then((response) =>
    {

        statustext = response.status
        return  response.json() }
  );

  if(statustext == 200){
    alert("User deleted");
    yield put({ type: "deleted", payload: {
        id : action.payload.id,
      } });

}
else if(statustext == 409){
alert("Retrieve data failed")
}
else{
  alert("Internal Error")
}
 

}

function* updateUser(action : actionType){
   console.log(action)
    const requestOptions = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id : action.payload.id,
          name : action.payload.name,
          gender:action.payload.gender,
          salary:action.payload.salary,
          dateofbirth:action.payload.dateofbirth
        ,
        }),
      };
      let statustext;
    const json:ResponseGenerator = yield fetch(`${APISERVER}/api/user/` , requestOptions).then((response) =>
    {

        statustext = response.status
        return  response.json() }
  );

  if(statustext == 200){

    alert("new User Added")
    yield put({ type: "updated", payload: action.payload});
}
else if(statustext == 406){
  alert("Failed in updating the user")
}
else{
  alert("Internal Error ")
}
}
  

function* actionWatcher() {
  yield takeLatest("GET_USERS", fetchUsers);
  yield takeLatest("GETUSERBYID", fetchById);
  yield takeLatest("createUser" , createUser)
  yield takeLatest("deleteUser" , deleteUser)
  yield takeLatest("updateUser" , updateUser)
  
  
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}


