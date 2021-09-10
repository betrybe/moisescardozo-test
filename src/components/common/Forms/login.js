import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '../../layout/Box';
import Button from '../Button';
import './Style/index.css';
import actions from '../../../actions';

export default function FormLogin() {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const [user, setUser] = useState({
    email: '',
    pass: '',
  });

  const minPassword = 5;

  const isEmpy = user.email.length === 0 || user.pass.length < minPassword;

  function hadleChange(event) {
    const inputName = event.target.getAttribute('name');
    setUser({
      ...user,
      [inputName]: event.target.value,
    });
  }
  function handleSubmit() {
    console.log('user', user);
    const storage = user;
    dispatch(actions.userAdd(storage));
    console.log('store', userStore);
  }
  return (
    <Box styleProp="LoginBackground LoginWith">
      <img className="imgLogin" src="/img/trybeLogo.png" alt="logo" />
      <form className="formLogin" onSubmit={ handleSubmit }>
        <label className="labelLogin" htmlFor="email">
          <input
            className="inputLogin"
            type="email"
            name="email"
            id="email"
            placeholder="Exemplo@exemplo.com"
            onChange={ hadleChange }
          />
        </label>
        <label className="labelLogin" htmlFor="pass">
          <input
            className="inputLogin"
            type="password"
            name="pass"
            id="pass"
            placeholder="Senha"
            onChange={ hadleChange }
          />
        </label>
        <Button styleButtonProp="button" onClick={ handleSubmit }>
          <Link
            className={ `buttonLink ${isEmpy ? 'disable' : 'enable'}` }
            to={ isEmpy ? '/' : '/wallet' }
          >
            Entrar
          </Link>
        </Button>
        <button type="button" onClick={ handleSubmit }>
          enter
        </button>
      </form>
    </Box>
  );
}
