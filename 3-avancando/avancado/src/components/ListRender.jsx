import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Iago", "Matheus", "Jenifer", "Kayle", "Maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Carlos" },
    { id: 4, name: "Beatriz" },
    { id: 5, name: "Daniela" },
    { id: 6, name: "Eduardo" },
    { id: 7, name: "Fernanda" },
    { id: 8, name: "Gustavo" },
    { id: 9, name: "Helena" },
    { id: 10, name: "Igor" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    console.log("RandomNumber: ", randomNumber);
    setUsers((prevUsers) => {
      console.log("prevUsers:", prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
