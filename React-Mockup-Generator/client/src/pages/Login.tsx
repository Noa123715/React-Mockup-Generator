import React, { useState } from 'react';
import RMGButton from '../components/RMGButton';
import RMGInput from '../components/RMGInput';
import RMGText from '../components/RMGText';
import RMGHeader from '../components/RMGHeader';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <RMGHeader text="Login Page" />
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <RMGText content="Welcome to our amazing app, please login!" />
        <form className="space-y-6">
          <div>
            <RMGText content="Email" />
            <RMGInput value={email} onChange={setEmail} placeholder="m@example.com" />
          </div>
          <div>
            <RMGText content="Password" />
            <RMGInput value={password} onChange={setPassword} placeholder="Password" type="password" autocomplete="current-password" />
          </div>
          <div>
            <RMGButton title="Login" onClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
