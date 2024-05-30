import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Container, Flex,  } from '@chakra-ui/react';
import { toast } from "react-toastify";
const LoginPage = () => {
const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
  if (user.name && user.email && user.password) {
            // console.log(user);
            setUser({
                name: '',
                email: '',
                password: '',
            });
            toast.success("Login Successful");
            navigate("/dashboard");
        } else {
            toast.error("Please fill in all fields");
        }
    };

    const handleForm = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
     
          <Container>
            <Heading as="h1" mb={6} mt={10}>Login Form</Heading>
            <form onSubmit={handleInput}>
                <Box mb={4}>
                    <FormControl id="name" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            type="text" 
                            name="name"
                            value={user.name}
                            onChange={handleForm}
                        />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="email" 
                            name="email"
                            value={user.email}
                            onChange={handleForm}
                        />
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input 
                            type="password" 
                            name="password"
                            value={user.password}
                            onChange={handleForm}
                        />
                    </FormControl>
                </Box>
                <Button type="submit" colorScheme="teal">Submit</Button>
            </form>
        </Container>
    );
};

export default LoginPage;
