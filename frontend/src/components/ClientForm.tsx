import React, { useEffect, useState } from 'react';

const ClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    cpf: '',
    email: '',
    cor_preferida: '',
    observacoes: '',
  });
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const rainbowColors = ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'índigo', 'violeta'];
  
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/clients');
    const data = await response.json();
    setClients(data);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
  }
};

useEffect(() => {
  fetchClients();  // Fetch on component mount
}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return; // Impede múltiplos envios

    try {
      const response = await fetch('http://localhost:5000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setMessage(result.message);
      if (response.ok) setSubmitted(true);
    } catch (error) {
      setMessage('Erro ao enviar dados.');
    }
  };

  return (
    <div>
      <h1>Cadastro de Cliente</h1>
      {submitted ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="nome_completo" placeholder="Nome Completo" onChange={handleChange} required />
          <input name="cpf" placeholder="CPF (XXX.XXX.XXX-XX)" onChange={handleChange} required />
          <input name="email" placeholder="E-mail" type="email" onChange={handleChange} required />
          <select name="cor_preferida" onChange={handleChange} required>
            <option value="">Selecione uma cor</option>
            {rainbowColors.map(color => <option key={color} value={color}>{color}</option>)}
          </select>
          <textarea name="observacoes" placeholder="Observações" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      )}
      {message && !submitted && <p>{message}</p>}
      <h2>Lista de Clientes</h2>
      <ul>
        {clients.map((client: any) => (
          <li key={client.id}>{client.nome_completo} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientForm;