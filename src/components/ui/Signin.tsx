'use client';

import { Button, Col, Row, message } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

import loginImage from '../../assets/login-image.png';
import { storeUserInfo } from '../../services/auth.services';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useSigninMutation } from '@/redux/slices/auth/authApiSlice';
import { TSigninInputs } from '@/types/formTypes';


const Signin = () => {
  const router = useRouter();

  const [signin,{isLoading}] = useSigninMutation();

  const onSubmit: SubmitHandler<TSigninInputs> = async (data: TSigninInputs) => {
    try {
      const res = await signin({ ...data }).unwrap();
      if (res?.data?.accessToken) {
        router.push('/profile');
        message.success('Login successful', 3);
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
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name='email' type='text' size='large' label='Email' />
            </div>
            <div
              style={{
                margin: '15px 0px',
              }}
            >
              <FormInput
                name='password'
                type='password'
                size='large'
                label='Password'
              />
            </div>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Signin;
