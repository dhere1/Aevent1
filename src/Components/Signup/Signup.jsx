import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Input, DatePicker, Form, message } from "antd";

const Signup = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (values.password.length < 6) {
      message.error("Length of password must be greater than 6");
      return;
    }
    if (values.password !== values.confirmPassword) {
      message.error("Password didn't match");
      return;
    }
    // Proceed with signup logic
    console.log("Signup successful", values);
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card title="Signup" styles={{ header: { background: "#1574EF", color: "white" } }} style={{ width: "500px" }}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: "Please enter your name" }]}> 
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}> 
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: "Please enter your phone number" }]}> 
            <Input placeholder="+977 ********" />
          </Form.Item>
          <Form.Item name="dob" label="Date of Birth" rules={[{ required: true, message: "Please select your date of birth" }]}> 
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}> 
            <Input.Password placeholder="Input password" />
          </Form.Item>
          <Form.Item name="confirmPassword" label="Confirm Password" rules={[{ required: true, message: "Please confirm your password" }]}> 
            <Input.Password placeholder="Input password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>Signup</Button>
        </Form>
        <p>Your account exists? <Button type="link" onClick={() => navigate("/login")}>Login</Button></p>
      </Card>
    </div>
  );
};

export default Signup;