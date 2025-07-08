const ShowUserName = (props) => {
  console.log("props:", props);
  return (
    <div>
      <h2>O nome do Usuário: {props.name}</h2>
    </div>
  );
};

export default ShowUserName;
