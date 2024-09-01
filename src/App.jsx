import { useState } from "react";
import "./App.css";
import { Formulario } from "./components/Formulario";
import { Comments } from "./components/Comments";

function App() {
  const [comments, setComments] = useState([]);

  const addComments = ({ email, comment }) => {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR");
    const time = now.toLocaleTimeString("pt-BR");

    const id = Math.floor(Math.random() * 1000000);
    const newComment = {
      id,
      email,
      comment,
      dateTime: `Em ${date} às ${time}`,
    };
    setComments((state) => [newComment,...state]);
  };

  return (
    <div className="section">
      <h3>Seção de comentários</h3>
      <Formulario addComments={addComments} />

      <div className="renderComments">
        {comments.length > 0 ? (
          comments.map((comentario) => (
            <Comments
              key={comentario.id}
              comment={comentario.comment}
              email={comentario.email}
              dateTime={comentario.dateTime}
            />
          ))
        ) : (
          <h5>Ainda não há nenhum comentário</h5>
        )}
      </div>
    </div>
  );
}

export default App;
