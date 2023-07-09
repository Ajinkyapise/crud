
import { useEffect, useState } from "react";

import { Tab, Table,TableBody, TableCell, TableHead, TableRow,styled,Button } from "@mui/material";

import { getUsers,delUser } from "../service/api";

import { Link } from "react-router-dom";

const StyledTable =styled(Table)`
width:90%;
margin:50px auto 0 auto; 
`
const Theadrow =styled(TableRow)`
background:#000;
&> th {
    color:#fff;
    font-size:20px;
}
`
const Tbody =styled(TableBody)`

&> td {
    
    font-size:20px;
}
`

const AllUser = () =>{

    const [users,setUser]=useState([]);

useEffect(()=>{
    getUsersDetails();
},[])

const getUsersDetails= async ()=>{
    let response =await getUsers();
    console.log(response);
    setUser(response.data);
}
const delUserData = async (id)=>{
    await delUser(id);
    getUsersDetails();
}

    return(
        <StyledTable>
            <TableHead>
                <Theadrow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Theadrow>
            </TableHead>
            <Tbody>
               { users.map(user => (
                <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phoneno}</TableCell>
                    <TableCell>
                        <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => delUserData(user.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
                ))}
            </Tbody>
        </StyledTable>
    )
}
export default AllUser;