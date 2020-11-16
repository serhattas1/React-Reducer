import React,{createContext,useReducer} from 'react';
import {userReducer} from '../reducers/UserReducer';
export const TableContext=createContext();

const TableContextProvider=({children})=>{
    const[users,dispatch]=useReducer(userReducer,[
        {name:'Mark',surname:'Otto',id:1},
        {name:'Jacob',surname:'Thornton',id:2},
        {name:'Larry',surname:'Bird',id:3}
    ]);
    return(
        <TableContext.Provider value={{users,dispatch}}>
          {children}
        </TableContext.Provider>
    )
}

export default TableContextProvider;