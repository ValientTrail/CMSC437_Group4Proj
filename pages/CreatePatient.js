class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: props.database ?? [],
      fname: "",
      lname: "",
      birthDate: "",
      sex: "",
      medicalHist: "",
      incidentRep: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phoneNum: "",
    }
  }

  createNewPatient = (event) => {
    event.preventDefault();
    var name = this.state.fname + " " + this.state.lname;
    var birthDate = this.state.birthDate;
    var sex = this.state.sex;
    var medicalHist = this.state.medicalHist;
    var incidentRep = this.state.incidentRep;
    var street = this.state.street;
    var city = this.state.city;
    var state = this.state.state;
    var zip = this.state.zip;
    var phoneNum = this.state.phoneNum;
    console.log(this.state.db);

    const newPatient = {NAME: name, BIRTHDATE: birthDate, SEX: sex, MEDICALHIST: medicalHist, INCIDENTREP: incidentRep, 
      STREET: street, CITY: city, STATE: state, ZIP: zip, PHONENUM: phoneNum
    }
    
    // Update database
    this.setState(prevState => ({
      db: [...prevState.db, newPatient],
    }), () => {
      // This is a callback function that runs when the state has been updated
      console.log(this.state.db);
      const json = JSON.stringify(this.state.db);
      localStorage.setItem("database", json);
    });
  }

  onRadioChange = (event) => {
    this.setState({sex: event.target.value});
  }

  render() {
    return (
      <div
        style={{
          fontFamily: "Julius Sans One, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "75%",
          height: "75%",
          borderRadius: "40px",
          border: "10px solid #272222",
          boxShadow: "0px 0px 30px #191a19",
          backgroundColor: "#f0f0f0", // Light background color for the page
        }}
      >
        <nav className="container-col">
          <nav>
            <header id="head">ADD PATIENT INFORMATION</header>
          </nav>
          <nav>
            <form id="patient-info-form" onSubmit={this.createNewPatient}>
              <div className="patient-info-input">
                {/* Patient Basic Info */}
                <nav className="container">
                  {/* Patient's Name */}
                  <nav>
                    <div className="input">
                      <label>First Name: </label>
                      <input type="text" id="fname" name="fname" onChange={
                        (e) => this.setState({fname: e.target.value})} required />
                    </div>
                    <div className="input">
                      <label>Last Name: </label>
                      <input type="text" id="lname" name="lname" onChange={
                        (e) => this.setState({lname: e.target.value})} required />
                    </div>
                  </nav>

                  <nav>
                    {/* Patient's Age */}
                    <div className="input">
                      <label>BirthDate: </label>
                      <input type="text" id="birthDate" name="birthDate" onChange={
                        (e) => this.setState({ birthDate: e.target.value })} required />
                    </div>
                    {/* Patient's Sex */}
                    <div id="sex-choice">
                      <label>Sex: </label>
                      <input
                        type="radio"
                        id="choice-male"
                        name="choice"
                        value="Male"
                        checked={this.state.sex === "Male"}
                        onChange={this.onRadioChange}
                      ></input>
                      <label htmlFor="choice-male">Male</label>
                      <input
                        type="radio"
                        id="choice-female"
                        name="choice"
                        value="Female"
                        checked={this.state.sex === "Female"}
                        onChange={this.onRadioChange}
                      ></input>
                      <label htmlFor="choice-female">Female</label>
                    </div>
                  </nav>
                </nav>

                {/* Patient's Medical Information */}
                <div id="medical-history" className="container">
                  <label>Medical History: </label>
                  <br />
                  <textarea id="data-entry" rows="2" cols="55" onChange={
                        (e) => this.setState({medicalHist: e.target.value})} required ></textarea>
                </div>
                <div className="container">
                  <label>Incident Report: </label>
                  <br />
                  <textarea id="data-entry" rows="3" cols="55" onChange={
                        (e) => this.setState({incidentRep: e.target.value})} required ></textarea>
                </div>

                {/* Patient's Contact Information */}
                <div>
                  <label>Address</label>
                </div>
                <nav className="container">
                  <div className="input">
                    <label>Street: </label>
                    <input type="text" onChange={
                        (e) => this.setState({street: e.target.value})} required />
                  </div>
                  <div className="input">
                    <label>City: </label>
                    <input type="text" onChange={
                        (e) => this.setState({city: e.target.value})} required />
                  </div>
                </nav>
                <nav className="container">
                  <div className="input">
                    <label>State: </label>
                    <input type="text" onChange={
                        (e) => this.setState({state: e.target.value})} required />
                  </div>
                  <div className="input">
                    <label>Zip Code: </label>
                    <input type="number" onChange={
                        (e) => this.setState({zip: e.target.value})} required />
                  </div>
                </nav>
                <div className="input">
                  <label>Phone Number: </label>
                  <input type="tel" onChange={
                        (e) => this.setState({phoneNum: e.target.value})} required />
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
