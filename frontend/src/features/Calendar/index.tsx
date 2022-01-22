import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import magic from '../../common/magic';

function Timing() {
  const [email, setEmail] = useState<string>('');
  const [issuer, setIssuer] = useState<string>('');

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
    debugger;
    await setIssuer(userMetaData.issuer);
    const user = await login();
    console.log(user);
    debugger;
  };

  const handleOnChange = (e) => setEmail(e.target.value);
  return (
    <div>
      <input type="email" name="email" placeholder="Enter your email" onChange={handleOnChange} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Timing;
