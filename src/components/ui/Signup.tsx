'use client';

import { Button, Col, Row, message } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

import loginImage from '../../assets/login-image.png';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useSignupMutation } from '@/redux/slices/auth/authApiSlice';

import { TSignupInputs } from '@/types/formTypes';
import { storeUserInfo } from '@/services/auth.services';

const Signup = () => {
  const router = useRouter();

  const [signup,{isLoading}] = useSignupMutation();

  const onSubmit: SubmitHandler<TSignupInputs> = async (data: TSignupInputs) => {

  

    try {
      const res = await signup({ ...data }).unwrap();
      if (res?.success) {
        router.push('/signin');
        message.success('signup successful.try login', 3);
      }

      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <Row
      justify='center'
      align='middle'
      style={{
        minHeight: '100vh',
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt='login image' />
      </Col>
      <Col sm={12} md={8} lg={8}>
      <h1
          style={{
            margin: '15px 0px',
          }}
        >
          Sign Up for an Account
        </h1>
        <div>
        <Form submitHandler={onSubmit}>
            <div   style={{
                margin: '15px 0px',
              }}>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email"
                
              />
            </div>
            <div   style={{
                margin: '15px 0px',
              }}>
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
             
              />
            </div>
            <div   style={{
                margin: '15px 0px',
              }}> 
              <FormInput
                name="lastName"
                type="text"
                size="large"
                label="Last Name"
             
              />
            </div>
            <div   style={{
                margin: '15px 0px',
              }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
         
              />
            </div>
            <div   style={{
                margin: '15px 0px',
              }}>
              <FormInput
                name="contactNo"
                type="text"
                size="large"
                label="Contact Number"
                
              />
            </div >
            <Button style={{
        marginTop: '20px',
      }} type="primary" htmlType="submit" loading={isLoading}>
              Sign Up
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Signup;
