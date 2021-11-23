import React from "react";

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
  console.log(data);
}, 4000);

class App extends React.Component {
  render() {
    return <div></div>;
  }
}

export default App;
