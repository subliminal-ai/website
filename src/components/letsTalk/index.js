import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

import { 
  Section, Title, SubTitle, Card, FormTitle, 
  ContentWrapper, SubmitButton, StyledInput, StyledTextArea
} from "./styles"


const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const LetsTalk = () => {

  const [fields, setFields] = useState([
    {
      name: ['name'],
      value: null,
    },
    {
      name: ['company_name'],
      value: null,
    },
    {
      name: ['email'],
      value: null,
    },
    {
      name: ['project_description'],
      value: null,
    },
  ]);

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (values, more) => {
    console.log("FORM SUBMITTED")
    console.log(values, more)
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...values })
    // })
    //   .then((res) => console.log("Success!", res))
    //   .catch(error => alert(error));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Section>
      <Row>
        <Col sm={12}>
          <ContentWrapper>
            <Title>Understand AI</Title>
            <SubTitle>
              Learn which areas of your business can be improved with AI.
            </SubTitle>

            <Title>Get a project estimation</Title>
            <SubTitle>
              Estimate the time and budget needed to develop a solution.
            </SubTitle>

            <Title>Get to know us</Title>
            <SubTitle>
              Learn more about our team’s expertise and capabilities.
            </SubTitle>
          </ContentWrapper>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Form
              layout="vertical"
              size="large"
              name="contact"
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              scrollToFirstError>
              <FormTitle>Let’s talk!</FormTitle>
              <Form.Item 
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please input your Full Name' }]}>
                <StyledInput placeholder="Enter your full name..."/>
              </Form.Item>
              <Form.Item
                name="company_name"
                label="Company Name"
                rules={[{ required: true, message: 'Please input your Company or Organization Name' }]}>
                <StyledInput placeholder="Enter the name of your company..." />
              </Form.Item>
              <Form.Item 
                name="email"
                label="Email Address"
                rules={[
                  { email: true, message: 'Please provide a valid email address'},
                  { required: true, message: 'Please input your email' }
                ]}>
                <StyledInput placeholder="Enter your email..." />
              </Form.Item>
              <Form.Item 
                name="project_description"
                label="Project Description"
                rules={[
                  { required: true, message: 'Please provide a description of your project or idea' },
                  { min: 30, message: 'Please provide some more detail about your project.' },
                ]}>
                <StyledTextArea 
                  placeholder="Provide a description of your project idea."
                  rows={6} />
              </Form.Item>
              <Form.Item>
                <SubmitButton type="primary" htmlType="submit" size="large">Submit</SubmitButton>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Section>
  )
}

export default LetsTalk
