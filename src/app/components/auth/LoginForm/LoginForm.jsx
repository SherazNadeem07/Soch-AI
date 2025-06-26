'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/Redux/Slices/auth/authSlice';
import InputField from '../../globalcomponents/InputField';
import PasswordInput from '../PasswordInput/PasswordInput';
import Button from '../../globalcomponents/Button';

export default function LoginForm({className}) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
        <div className="">
            <h1 className='font-extrabold text-4xl '>Login</h1>
            <p className='text-gray mt-2'>Genius say Jugaar tak - Smarter Together</p>
        </div>
      <InputField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
      />

      <PasswordInput
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <Button type="submit" loading={loading} className="w-full">
        Login
      </Button>

      <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-4">
        Don’t have an account?{' '}
        <a href="/signup" className="underline text-blue-600 dark:text-blue-400">
          Sign up
        </a>
      </p>
    </form>
  );
}
