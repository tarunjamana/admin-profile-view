import React,{createContext,useContext,useState} from 'react';
import useFetch from '../Hooks/useFetch';

const  DataStore = createContext();

const Context = ({children}) => {
    const {data,dataLoaded} =useFetch('https://jsonplaceholder.typicode.com/users');
    const [empId,setEmpId] =useState(null);
    const [showUser,setShowUser] = useState(false);
    const [showPosts,setShowPosts] = useState(false);

    return (
        <DataStore.Provider value={{data,dataLoaded,empId,setEmpId,showPosts,showUser,setShowPosts,setShowUser}}>
          {children}
        </DataStore.Provider>
    )
}

export default Context

export const SavedData = () =>{
    return useContext(DataStore)
}