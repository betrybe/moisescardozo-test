import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import actions from '../actions';

const Teste = () => {
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [eu, setEu] = useState([]);
  function handleChange(event) {
    const usuario = event.target.value;
    setEu({ usuario });
  }
  const handleSubmit = () => {
    // setName(eu);
    dispatch(actions.userAdd(eu));
  };
  if (user.length > 0) {
    const i = user.length;
    const a = [...user];
    a.map((e) => (
      console.log('sad', e.usuario)
    ));
    console.log(user);
  }
  const a = [...user];
  return (
    <div>
      <h1>
        coute:
      </h1>
      {/* PRECISA USAR O SPRED */}
      {/* {[...user].map((e) => (<p>{e}</p>))} */}
      {a.map((e) => (
        // console.log('sad', e.usuario)
        <p>{e.usuario}</p>
      ))}
      <input onChange={ handleChange } />
      <ul>
        <li><button type="button" onClick={ handleSubmit }> incrementa </button></li>
        <li>
          <button
            type="button"
            onClick={ () => {
              user.map((e) => {
                console.log(e);
              });
            } }
          >
            {' '}
            decrementa
          </button>
        </li>
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => (
//   { user: state.user.user }
// );
// const mapDispatchToProps = (dispatch) => ({
//   userAdd: () => dispatch(actions.userAdd()),
//   userRemove: () => dispatch(actions.userRemove()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Teste);
export default Teste;
