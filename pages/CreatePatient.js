class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f0f0f0", // Light background color for the page
        }}
      >
        <form>
          <header>ADD PATIENT INFORMATION</header>
          <div className="patient-info-input">
            <div className="input">
              <label>First Name:</label>
              <input type="text" id="fname" name="fname" />
            </div>
            <div className="input">
              <label>Last Name:</label>
              <input type="text" id="lname" name="lname" />
            </div>
            <div id = "sex-choice">
              <label>Sex</label>
              <input type="radio" id="choice-male" name="choice"></input>
              <label htmlFor="choice-male">Male</label>
              <input type="radio" id="choice-female" name="choice"></input>
              <label htmlFor="choice-female">Female</label>
            </div>
            
            <button type="submit" id="submit-button">
              CREATE
            </button>
          </div>
        </form>
      </div>
    );
  }
}
