import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("documents");
        }}
      >
        Ir para documentos
      </button>
    </>
  );
};

export { Home };
