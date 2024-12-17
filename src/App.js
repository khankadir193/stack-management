import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Container from './Components/Container';

function App() {
  const [orangeRecords, setOrangeRecords] = useState([]);
  const [blueRecords, setBlueRecords] = useState([]);
  const [yellowRecords, setYellowRecords] = useState([]);
  const [stack, setStack] = useState([]);

  const addRecord = (container) => {
    const newRecord = `Record ${Date.now()}`;
    if (container === "orange" && orangeRecords.length < 10) {
      setOrangeRecords([...orangeRecords, newRecord]);
      setStack(stack.slice(1));
    } else if (container === "blue" && blueRecords.length < 10) {
      setBlueRecords([...blueRecords, newRecord]);
      setStack(stack.slice(1));
    } else if (container === "yellow" && yellowRecords.length < 10) {
      setYellowRecords([...yellowRecords, newRecord]);
      setStack(stack.slice(1));
    }
  };

  const removeRecord = (container, index) => {
    let removedRecord;
    if (container === "orange") {
      removedRecord = orangeRecords[index];
      setOrangeRecords(orangeRecords.filter((_, i) => i !== index));
    } else if (container === "blue") {
      removedRecord = blueRecords[index];
      setBlueRecords(blueRecords.filter((_, i) => i !== index));
    } else if (container === "yellow") {
      removedRecord = yellowRecords[index];
      setYellowRecords(yellowRecords.filter((_, i) => i !== index));
    }

    if (removedRecord) {
      setStack([removedRecord, ...stack]);
    }
  };

  return (
    <div className="app">
      <h1>Stack Management App</h1>
      <div className="containers">
        <Container
          color="orange"
          records={orangeRecords}
          handleAdd={addRecord}
          handleRemove={(index) => removeRecord("orange", index)}
        />
        <Container
          color="blue"
          records={blueRecords}
          handleAdd={addRecord}
          handleRemove={(index) => removeRecord("blue", index)}
        />
        <Container
          color="yellow"
          records={yellowRecords}
          handleAdd={addRecord}
          handleRemove={(index) => removeRecord("yellow", index)}
        />
      </div>
      <div className="stack-container">
        <h3>Stack Container</h3>
        <ul>
          {stack.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
