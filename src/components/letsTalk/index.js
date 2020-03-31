import React, { useState } from 'react';
import { Row, Col, Form, Input, Result } from 'antd';

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

  const FormStatus = Object.freeze({
      SUCCESS: "SUCCESS",
      ERROR: "ERROR",
      NOT_SUBMITTED: "NOT_SUBMITTED"
  });

  const [formStatus, setFormStatus] = useState(FormStatus.NOT_SUBMITTED);

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => setFormStatus(FormStatus.SUCCESS))
      .catch(error => setFormStatus(FormStatus.ERROR));
  };

  // const [form] = Form.useForm();

  // // React.useEffect(() => {
  // //   form
  // // }, []);

  const renderFormStatus = (_formStatus) => {
    switch(_formStatus) {
      case FormStatus.NOT_SUBMITTED:
        return (
          <Form
            layout="vertical"
            size="large"
            name="contact"
            onFinish={handleSubmit}
            scrollToFirstError
            netlify>
            <input type="hidden" name="form-name" value="contact" />
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
                { type: "email", message: 'Please provide a valid email address'},
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
        )
      case FormStatus.SUCCESS:
        return (
          <Result
            status="success"
            title="Successfully submitted form!"
            subTitle="Thank you for your interest. We'll get back to you as soon as we can."
          />
        )
      case FormStatus.ERROR:
        return (
          <Result
            status="error"
            title="Error submitting form!"
            subTitle="This form seems to be broken right now. Please schedule a meeting with the Schedule a Call button to the left."
          />
        )
    }
  }

  return (
    <Section>
      <Row>
        <Col md={12}>
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
        <Col xs={24} md={12}>
          <Card>
            <FormTitle>Let’s talk!</FormTitle>
            {renderFormStatus(formStatus)}
          </Card>
        </Col>
      </Row>
    </Section>
  )
}

export default LetsTalk
