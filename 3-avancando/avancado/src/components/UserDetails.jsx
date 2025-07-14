import React from 'react'

const UserDetails = () => {

const users = [
  {
    nome: "Ana Silva",
    idade: 28,
    profissao: ["Desenvolvedora Front-End", "UI/UX Designer", "Freelancer"]
  },
  {
    nome: "Carlos Oliveira",
    idade: 13,
    profissao: ["Advogado", "Consultor Jurídico", "Professor de Direito"]
  },
  {
    nome: "Beatriz Souza",
    idade: 42,
    profissao: ["Médica", "Cirurgiã", "Professora de Medicina"]
  },
  {
    nome: "Felipe Costa",
    idade: 29,
    profissao: ["Engenheiro de Software", "Desenvolvedor Backend", "Consultor de TI"]
  },
  {
    nome: "Laura Pereira",
    idade: 12,
    profissao: ["Arquiteta", "Urbanista", "Consultora de Projetos"]
  }
];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <>
            {user.idade >= 18 ? <h1>Pode tirar Habilitação</h1> : <h1>Não pode tirar Habilitação</h1>}
            <li>Nome:{user.nome}, Idade: {user.idade}, Profissão: {user.profissao}</li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails