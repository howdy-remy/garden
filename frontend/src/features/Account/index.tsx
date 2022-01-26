import React, { useState, ChangeEvent } from 'react';
import { useMutation, gql } from '@apollo/client';
import magic from '../../common/magic';

function Timing() {
  const [email, setEmail] = useState<string>('');
  const [issuer, setIssuer] = useState<string | null>('');

  const LOGIN_USER = gql`
    mutation Login($email: String!, $issuer: String!) {
      Login(email: $email, issuer: $issuer) {
        email
        issuer
      }
    }
  `;

  const [login] = useMutation(LOGIN_USER, {
    variables: {
      email,
      issuer,
    },
  });
  const handleSubmit = async () => {
    await magic.auth.loginWithMagicLink({ email });
    const userMetaData = await magic.user.getMetadata();
    setIssuer(userMetaData.issuer);
    const res = await login();
    localStorage.setItem('user', JSON.stringify(res.data.Login));
  };

  const handleLogout = async () => {
    await magic.user.logout();
    localStorage.setItem('user', '');
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  return (
    <div>
      <input type="email" name="email" placeholder="Enter your email" onChange={handleOnChange} />
      <button onClick={handleSubmit}>Send</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Timing;
