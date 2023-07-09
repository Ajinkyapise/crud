import { useState } from "react";

import { FormControl, FormGroup, InputLabel,Input, Typography, Button } from "@mui/material";
import styled from "styled-components";

import { addUserapi } from "../service/api";

import { useNavigate } from "react-router-dom";

const Container=styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
 & > div{
    margin-top:20px;

 }
`
const initialValues={
    name:'',
    username:'',
    email:'',
    phoneno:''

}
const AddUser = () =>{

    const[user,setUser]=useState(initialValues);
    const navigate = useNavigate();


    const onValueChange= (e)=>{
        console.log( e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const addUserDetails=async ()=>{
            await addUserapi(user);
            navigate('/all');
    }
    return(
        
        <Container >
            <Typography variant="h4">Add User</Typography>
            <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="name" />
            </FormControl>

            <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="username" />
            </FormControl>

            <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="email" />
            </FormControl>

            <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="phoneno" />
            </FormControl>

            <FormControl>
               <Button onClick={()=>addUserDetails()} variant="contained">Add</Button>
            </FormControl>
        </Container>    
    )
}
export default AddUser;