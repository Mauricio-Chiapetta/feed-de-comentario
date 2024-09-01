export function Comments({ email, comment, dateTime }) {
  return (
    <div className="comments">
      <h4>{email}</h4>

      <p>{dateTime}</p>
      <p>{comment}</p>
    </div>
  );
}
