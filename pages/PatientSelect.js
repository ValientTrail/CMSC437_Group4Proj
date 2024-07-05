class PatientSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            database: [],
            userType: props.userType,
        }
    }

    componentDidMount(){
        this.getAllPatients();
    }

    getAllPatients = () => {
        const json = localStorage.getItem("database");
        const database = JSON.parse(json);
        if(database){
            this.setState(() => ({database}));
        }
    }

    clearPatients = () => {
        localStorage.clear();
        this.setState({database: []});
    }

    goToPatientVitals = (e, name, birthDate, street, city, state, zip) => {
        this.props.changePage(<PatientInfoScreen name={name} age={birthDate} street={street} city={city}
        state={state} zip={zip} />)
    }
    goToPatientCreate = () => {
        this.props.changePage(<CreatePatient database={this.state.database} />)
    }


    render(){
        const isFR = this.state.userType === "First Responder";
        return( 
            <div style={{
                position:"relative",
                top: "5%",
                width: "90%",
                height: "80%",
                padding: "20px",
                margin: "10px",
                display:"flex",
                backgroundColor: "#272222",
                borderRadius: "40px"
            }}>
                <button onClick={this.goToPatientVitals} style={{
                    width: "12.5%",
                    height: "25%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#62ff62",
                    borderRadius: "20px",
                    margin: "5px",
                    whiteSpace: "wrap"
                }}>
                    <div style={{backgroundColor:"grey", borderRadius:"50%", width: "50%", height: "50%"}}></div>
                    <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif"}}>Jane Doe</h1>

                </button>
                { 
                    this.state.database && this.state.database.length > 0 ? 
                    (this.state.database.map((patient, index) => (
                        <button key={index} onClick={(e) => this.goToPatientVitals(e, patient.NAME, patient.BIRTHDATE, 
                        patient.STREET, patient.CITY, patient.STATE, patient.ZIP)} style={{
                            width: "12.5%",
                            height: "25%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#62ff62",
                            borderRadius: "20px",
                            margin: "5px",
                            whiteSpace: "wrap"
                        }}>
                            <div style={{backgroundColor:"grey", borderRadius:"50%", width: "50%", height: "50%"}}></div>
                            <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif", fontSize: "20px"}}>{patient.NAME}</h1>
                        </button>
                    ))
                    ) : null
                }

                {isFR && (
                <button onClick={this.goToPatientCreate} style={{
                    width: "18%",
                    height: "25%",
                    position: "relative",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "5px",
                    border: "5px solid white",
                    backgroundColor: "black"


                }}>
                    
                    <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif"}}>New Patient</h1>
                </button>
                )}

                {isFR && (
                <button onClick={this.clearPatients} style={{
                    width: "18%",
                    height: "25%",
                    position: "relative",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "5px",
                    border: "5px solid white",
                    backgroundColor: "red"
                }}>
                    
                    <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif"}}>Clear Patients</h1>
                </button>
                )}
            </div>
        
        )
    }
}