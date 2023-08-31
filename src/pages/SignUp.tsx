import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(135deg, #007bff, #8a2be2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 1080px) {
    max-width: 1080px;
  }
`;

const Header = styled.h1`
    margin-top: 0;
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.4),
    0 0 15px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4),
    0 0 25px rgba(255, 255, 255, 0.4);
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.4),
    0 0 4px rgba(255, 255, 255, 0.2), 0 0 6px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.2), 0 0 8px rgba(255, 255, 255, 0.2);
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.4), 0 0 4px rgba(255, 255, 255, 0.4),
    0 0 6px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4),
    0 0 8px rgba(255, 255, 255, 0.4);
`;

const Button = styled.button`
margin-top: 1rem;
  width: 200px;
  height: 50px;
  border: solid 1px white;
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: #007bff;
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const CompletionMessage = styled.p`
  color: #0bf30b;
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;


function SignUp() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [completionMessage, setCompletionMessage] = useState<string>("");
    
  
  
    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.trim() === "" && email.trim() === "") {
          setError("Name and email fields are required.");
        } else if (name.trim() === "") {
          setError("Please enter a valid username.");
        } else if (email.trim() === "") {
          setError("Please enter a valid email.");
        } else if (!isValidEmail(email)) {
          setError("Invalid email address.");
        } else if (password.trim() === "") {
          setError("Please enter a valid password.");
        } else if (confirmPassword.trim() === "") {
          setError("Please confirm your password.");
        } else if (password !== confirmPassword) {
          setError("Passwords do not match.");
        } else {
          // Perform sign up logic here (e.g., submit form)
          setError("");
          setCompletionMessage("Sign up complete!");
    
          setTimeout(() => {
            setCompletionMessage("");
          }, 5000);
        }
      };
  
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    return (
      <Container>
        <Header>Free Sign Up</Header>
        <SignUpForm onSubmit={handleSignUp}>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
  
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
  
          <Label>Create Password</Label>
          <Input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
  
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
  
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {completionMessage && <CompletionMessage>{completionMessage}</CompletionMessage>}
  
          <Button type="submit">Sign Up</Button>
        </SignUpForm>
      </Container>
    );
  }
  
  export default SignUp;
  