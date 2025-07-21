import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  console.log(user.email)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bio)
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  }

  return (
    <div>
      {/* 1 Criação do form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        {/* 2 Label envolvendo input */}
        <div>
          <label>
            <span>Email</span>
            <input type="email" name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
        </div>
        {/* TextArea */}
        <div>
          <label>
            <span>Bio:</span>
            <textarea name="bio" onChange={(e) => setBio(e.target.value)} placeholder='Descrição da sua persona' value={bio}></textarea>
          </label>
        </div>
        {/* Select */}
        <div>
          <label>
            <span>Role:</span>
            <select name="" id="" onChange={(e) => setRole(e.target.value)} value={role}>
              <option></option>
              <option value="adm">Admin</option>
              <option value="user">User</option>
              <option value="data">Data</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm