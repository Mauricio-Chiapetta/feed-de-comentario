export function CommentInput({id,value,setValue}){
    return (
        <div className="section-label">
        <label htmlFor="comentario">Comentário</label>
        <textarea
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    )
}