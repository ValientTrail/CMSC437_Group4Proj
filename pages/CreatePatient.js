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
                {/* Patient Basic Info */}
                <nav className="container">
                  {/* Patient's Name */}
                  <nav>
                    <div className="input">
                      <label>First Name: </label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="input">
                      <label>Last Name: </label>
                      <input type="text" id="lname" name="lname" />
                    </div>
                  </nav>

                  <nav>
                    {/* Patient's Age */}
                    <div className="input">
                      <label>BirthDate: </label>
                      <input type="text" id="age" name="age" />
                    </div>
                    {/* Patient's Sex */}
                    <div id="sex-choice">
                      <label>Sex: </label>
                      <input
                        type="radio"
                        id="choice-male"
                        name="choice"
                      ></input>
                      <label htmlFor="choice-male">Male</label>
                      <input
                        type="radio"
                        id="choice-female"
                        name="choice"
                      ></input>
                      <label htmlFor="choice-female">Female</label>
                    </div>
                  </nav>
                </nav>

                {/* Patient's Medical Information */}
                <div id="medical-history" className="container">
                  <label>Medical History: </label>
                  <br />
                  <textarea id="data-entry" rows="2" cols="55"></textarea>
                </div>
                <div className="container">
                  <label>Incident Report: </label>
                  <br />
                  <textarea id="data-entry" rows="3" cols="55"></textarea>
                </div>

                {/* Patient's Contact Information */}
                <div>
                  <label>Address</label>
                </div>
                <nav className="container">
                  <div className="input">
                    <label>Street: </label>
                    <input type="text" />
                  </div>
                  <div className="input">
                    <label>City: </label>
                    <input type="text" />
                  </div>
                </nav>
                <nav className="container">
                  <div className="input">
                    <label>State: </label>
                    <input type="text" />
                  </div>
                  <div className="input">
                    <label>Zipcode: </label>
                    <input type="number" />
                  </div>
                </nav>
                <div className="input">
                  <label>Phone Number: </label>
                  <input type="tel" />
                </div>
                {/* Submit Button */}
                <nav id="submit-button">
                  <button type="submit">CREATE</button>
                </nav>
              </div>
            </form>
            
          </nav>
        </nav>
      </div>
    );
  }
}
