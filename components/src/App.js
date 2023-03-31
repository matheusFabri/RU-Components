import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "lhkboi34",
      label: "Some question?",
      content: "Some answer",
    },
    {
      id: "lhkgrtg",
      label: "Some second question?",
      content: "Some answer",
    },
    {
      id: "lcvwevg",
      label: "Some third question?",
      content: "Some answer",
    },
    {
      id: "iyufgpew9q45",
      label: "Some fourth question?",
      content: "Some answer",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
