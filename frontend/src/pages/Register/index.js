import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo01.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      email,senha,nome,sobrenome,telefone,cidade,estado  
    };

    try {
      const response = await api.post('cliente', data)
      
      alert(`Seu Email de acesso: ${response.data.email}`)

      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`)
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="img-logo" src={logoImg} alt="Gestão Vet" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e agende a sua consulta.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#5C9E6B" />
            Voltar para a página inicial
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}          
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <input 
            placeholder="Nome" 
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input 
            placeholder="Sobrenome" 
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />
          <input 
            placeholder="Telefone" 
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={cidade}
             onChange={e => setCidade(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={estado}
              onChange={e => setEstado(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}