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
        <nav className="container-col">
          <nav>
            <header id="head">ADD PATIENT INFORMATION</header>
          </nav>
          <nav>
            <form id="patient-info-form">
              <div className="patient-info-input">
                <div className="input">
                  <label>First Name: </label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="input">
                  <label>Last Name: </label>
                  <input type="text" id="lname" name="lname" />
                </div>
                <div id="sex-choice">
                  <label>Sex: </label>
                  <input type="radio" id="choice-male" name="choice"></input>
                  <label htmlFor="choice-male">Male</label>
                  <input type="radio" id="choice-female" name="choice"></input>
                  <label htmlFor="choice-female">Female</label>
                </div>

                <div id="medical-history" className="container">
                  <label>Medical History: </label>
                  <nav className="container-style">
                    <input type="checkbox" id="diabete-1"></input>
                    <label htmlFor="diabete-1">Type 1-Diabetes</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="diabete-2"></input>
                    <label htmlFor="diabete-1">Type 2-Diabetes</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="cardiac"></input>
                    <label htmlFor="cardiac">Cardiac</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="respiratory"></input>
                    <label htmlFor="respiratory">Respiratory</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="allergies"></input>
                    <label htmlFor="allergies">Allergies</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="medications"></input>
                    <label htmlFor="medications">Medications</label>
                  </nav>
                  <nav className="container-style">
                    <input type="checkbox" id="injuries"></input>
                    <label htmlFor="injuries">Injuries</label>
                  </nav>
                  <br />
                  <nav className="container-style">
                    <input type="checkbox" id="other"></input>
                    <label htmlFor="other">Other</label>
                    <textarea id="data-entry" rows="2" cols="20"></textarea>
                  </nav>
                </div>
              </div>
            </form>
            <nav id="submit-button">
              <button type="submit">
                CREATE
              </button>
            </nav>
          </nav>
        </nav>
      </div>
    );
  }
}
