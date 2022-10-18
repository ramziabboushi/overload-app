export default function WorkoutUI() {
  return (
    <div className="outer-container">
      <div className="finish-container">
        <button className="finish-btn">Finish</button>
      </div>
      <div className="title-container">
        <h1>Push (Chest)</h1>
      </div>
      <div className="exercise-box">
        <div className="exercise-top">
          <h2>Bench Press</h2>
          <div className="exercise-btns">
            <div className="exercise-btn">
              <img
                className="progress-icon"
                src="https://cdn-icons-png.flaticon.com/512/893/893214.png"
                alt=""
              />
            </div>
            <div className="exercise-btn">
              <img
                className="more-icon"
                src="https://cdn-icons-png.flaticon.com/512/2430/2430485.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="column-titles">
          <h3>Weight</h3>
          <h3>Reps</h3>
        </div>
        <div className="row">
          <div className="weight-box">
            <p className="weight-text">100</p>
          </div>
          <div className="sets-container">
            <div className="set-box">
              <p className="reps-text">5</p>
            </div>
            <div className="set-box">
              <p className="reps-text">5</p>
            </div>
            <div className="set-box">
              <p className="reps-text">4</p>
            </div>
            <img
              className="plus-icon"
              src="https://cdn-icons-png.flaticon.com/512/7941/7941585.png"
              alt=""
            />
            <img
              className="check-icon"
              src="https://cdn-icons-png.flaticon.com/512/716/716225.png"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="weight-box">
            <p className="weight-text">120</p>
          </div>
          <div className="sets-container">
            <div className="set-box">
              <p className="reps-text">3</p>
            </div>
            <div className="set-box">
              <p className="reps-text">3</p>
            </div>
            <img
              className="plus-icon"
              src="https://cdn-icons-png.flaticon.com/512/7941/7941585.png"
              alt=""
            />
            <img
              className="check-icon"
              src="https://cdn-icons-png.flaticon.com/512/716/716225.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
