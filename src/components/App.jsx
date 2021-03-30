import React from "react";
import Details from "./Details";
import emojipedia from "../emojipedia";

function createCard(contact) {
  return (
    <Details
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      description={contact.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
