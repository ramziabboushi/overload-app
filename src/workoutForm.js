import { useState } from "react";

export default function WorkoutForm() {
  const [inputFields, setInputFields] = useState([
    { name: "", weight: "", reps: ["", "", ""] }
  ]);

  const submit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  const inputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const addFields = (event) => {
    event.preventDefault();
    let newField = { name: "", weight: "", reps: ["", "", ""] };
    setInputFields([...inputFields, newField]);
  };

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(event) => inputChange(index, event)}
                value={input.name}
              />
              <input
                name="weight"
                placeholder="Weight"
                type="number"
                value={input.weight}
                onChange={(event) => inputChange(index, event)}
              />
              <input
                name="set1"
                placeholder="Reps"
                type="number"
                value={input.set1}
                onChange={(event) => inputChange(index, event)}
              />
              <input
                name="set2"
                placeholder="Reps"
                type="number"
                value={input.set2}
                onChange={(event) => inputChange(index, event)}
              />
              <input
                name="set3"
                placeholder="Reps"
                type="number"
                value={input.set3}
                onChange={(event) => inputChange(index, event)}
              />
              <button onClick={addFields}>Add Exercise </button>
            </div>
          );
        })}
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
