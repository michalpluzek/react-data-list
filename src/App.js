import React, { useEffect, useState } from "react";

const data = [
  { id: 1, title: "Wiadomość 1", body: "Zawartość wiadomości numer 1 ..." },
  { id: 2, title: "Wiadomość 2", body: "Zawartość wiadomości numer 2 ..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość ${index}`,
    body: `Zawartość wiadomości numer ${index} ...`,
  });
}, 8000);

const App = () => {
  const [comments, setComments] = useState([...data]);

  useEffect(() => {
    const idI = setInterval(getData, 5000);
    return () => clearInterval(idI);
  }, []);

  const getData = () => {
    if (comments.length === data.length) return;

    setComments([...data]);
  };

  const _comments = comments.map((comment) => (
    <div key={comment.id}>
      <h4>{comment.title}</h4>
      <p>{comment.body}</p>
    </div>
  ));

  return <div className="App">{_comments.reverse()}</div>;
};

export default App;
