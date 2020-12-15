import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../Form/Form.module.css'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('SUCCESS');
  };
  return (
    <div>
      <Link to='/'>Back to Home page</Link>
      <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
          <button type='submit'>Login</button>
      </form>
    </div>
  );
}
