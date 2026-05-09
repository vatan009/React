import Header from "./Header.jsx";
import DynamicValues from "./DynamicValues.jsx";
import { CoreConcept } from "./ReusableComponents.jsx";
import reactCore from "../assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "../data.js";
import { TabButtons } from "./ChildProps.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
let tabContent = <p>Please select the topic</p>;

export default function Intro2() {
  const [selectedTopicState, setSelectedTopicState] = useState("");
  function handleSelect(selectedButton) {
    // setSelectedTopicState(selectedButton);
  }
  if (selectedTopicState) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopicState].title}</h3>
        <p>{EXAMPLES[selectedTopicState].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopicState].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="">
      <Header />
      <DynamicValues />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((el) => (
              <CoreConcept {...el} />
            ))}
          </ul>
        </section>
        <h2>Time to get started</h2>

        <section id="examples">
          <menu>
            <TabButtons onSelect={() => handleSelect("components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("state")}>
              State
            </TabButtons>
          </menu>

          {/* {!selectedTopicState ? <p>Please select the topic</p> : (
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopicState].title}</h3>
              <p>
                {EXAMPLES[selectedTopicState].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopicState].code}
                </code>
              </pre>
            </div>
          )} */}

          {/* second alternative */}
          {/* {!selectedTopicState &&<p>Please select the topic</p>}
           { selectedTopicState &&(
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopicState].title}</h3>
              <p>
                {EXAMPLES[selectedTopicState].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopicState].code}
                </code>
              </pre>
            </div>
          )} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}
