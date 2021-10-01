
export const getUsers = () => ({
    type: "GET_USERS",
  });
  

export const getUserById = (id : string) => ({
    type : "GETUSERBYID",
    payload : {id}
})

export const CreateUser = (name:string , gender : string , salary : string , dateofbirth :string ) => ({

    type : "createUser",
    payload : {name , gender , salary , dateofbirth}
})

export const deleteUser = ( id : string) => ({
    type : "deleteUser",
    payload : {id }
})

export const updateUser = (id:string ,name?:string , gender?:string , salary?:string , dateofbirth?:string) => ({
    type : "updateUser",
    payload : {
        id ,
        name , gender , salary , dateofbirth
    }
})