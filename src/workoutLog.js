import React, { useState } from "react";

export default function WorkoutLog() {
  const [weightList, setWeightList] = useState([{ weight: "", reps: "" }]);

  const addWeightBtn = () => {
    setWeightList([...weightList, { weight: "" }]);
  };

  const [setList, setSetList] = useState([{ reps: [] }]);

  const addSetBtn = () => {
    setSetList([...setList, { reps: "" }]);
  };
  console.log(setList);
  const [routineData, setRoutineData] = useState({
    workout: "",
    exercise: "",
    weight: "",
    setList
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoutineData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSetChange = (e, index2) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...setList];
    list[index2][name] = value;
    setSetList(list);
    return { ...list, [name]: value };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(routineData); //where API will be connected , routineData sent to database
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Workout:</h3>
      <input type="text" name="workout" onChange={handleChange} />
      <h3>Exercise:</h3>
      <input type="text" name="exercise" onChange={handleChange} />

      {weightList.map((singleWeight, index1) => (
        <>
          <h4>Weight:</h4>
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            onChange={handleChange}
            key={index1}
          />
        </>
      ))}
      {setList.map((singleSet, index2) => (
        <>
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            onChange={(e) => handleSetChange(e, index2)}
            key={index2}
          />
          {setList.length - 1 === index2 && setList.length < 5 && (
            <button type="button" onClick={addSetBtn} key="">
              Add Set
            </button>
          )}
        </>
      ))}
      <button type="button" onClick={addWeightBtn} key="">
        Add Weight
      </button>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
