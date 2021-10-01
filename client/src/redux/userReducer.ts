


const initState = { userList : [] , }

interface userType {
    _id : string,
    Name : string,
    Salary : string,
    Gender : string,
    birthDate : string,
    __v ? : number

}


const userListDispatcher = (state = initState, action : any ) => {
    switch(action.type){
        case "GET_USERS":
            return { ...state };
        case "USERS_RECEIVED":
            return Object.assign({} , state , { userList : action.payload })    
        case "GETUSERBYID":
                     return { ...state };
        case "addUser":
            return Object.assign({} , state , { userList : state.userList.concat(action.payload)  })
        case "deleteUser":
            return {...state};
        case "deleted":
            
            const filtered = state.userList.filter((user : userType) => {
                if (user._id !== action.payload.id) {
                  return user;
                }
              })


            return Object.assign({} , state , { userList : filtered  })


        case "updateUser":
            return {...state};
        
        case "updated":
            console.log(action)
            const mapped = state.userList.map((user : userType) => {
                
                if (user._id !== action.payload.id) {
                  return user;
                }

                if((user.Name !== action.payload.name) && (action.payload.name != undefined || action.payload.name != null)) user.Name = action.payload.name

                if((user.Gender !== action.payload.gender) && (action.payload.name != undefined || action.payload.name != null)) user.Gender = action.payload.gender

                if((user.Salary !== action.payload.salary) && (action.payload.name != undefined || action.payload.name != null)) user.Salary = action.payload.salary

                if((user.birthDate !== action.payload.dateofbirth) && (action.payload.name != undefined || action.payload.name != null)) user.birthDate = action.payload.dateofbirth

                return user

              })
              return Object.assign({} , state , { userList : mapped  })


        
        default:
            return state
    }
}

export default userListDispatcher;
