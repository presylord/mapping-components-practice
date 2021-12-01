import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// console.log(emojipedia);

function Entries(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(Entries)}

        {/* <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />
        <Entry
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
