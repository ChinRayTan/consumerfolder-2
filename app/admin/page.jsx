"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100svh-60px)]">
        <h1>Admin Panel</h1>
        <h4 className="text-secondary" style={{ marginTop: "10px" }}>Please login using valid ConsumerFolder credentials to continue.</h4>
        <Form className="w-3xl mt-4 mb-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" rows={3} />
          </Form.Group>
        </Form>
        <Button size="lg" type="submit">Sign in</Button>
        <div className="absolute bottom-0 w-full flex items-center justify-center py-4 text-secondary">
          <p className="text-secondary">Proudly powered by Next.js and independent of SQLite.</p>
        </div>
      </div>
    </>
  )
}