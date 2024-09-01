import { useState } from "react";
import { InputText } from "./InputText";
import { CommentInput } from "./CommentInput";
export function Formulario({ addComments }) {
  const [textEmail, setTextEmail] = useState("");
  const [textComments, setTextComments] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComments({ email: textEmail, comment: textComments });
    setTextComments("");
    setTextEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        id="email"
        label="email"
        setValue={setTextEmail}
        value={textEmail}
      />
      <CommentInput
        id="comentario"
        value={textComments}
        setValue={setTextComments}
      />
      <button>Enviar comentário</button>
    </form>
  );
}
