class PatientSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            database: {},
            userType: props.userType,
        }
    }

    componentDidMount(){
        this.getAllPatients();
    }

    getAllPatients = () => {
        var localDatabase = {};
        
    }
    goToPatientVitals = () => {
        this.props.changePage(<PatientInfoScreen />)
    }
    goToPatientCreate = () => {
        this.props.changePage(<CreatePatient />)
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
                    justigyContent: "center",
                    backgroundColor: "#62ff62",
                    borderRadius: "20px",
                    whiteSpace: "wrap"
                }}>
                    <div style={{backgroundColor:"grey", borderRadius:"50%", width: "50%", height: "50%"}}></div>
                    <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif"}}>Jane Doe</h1>

                </button>
                {isFR && (
                <button onClick={this.goToPatientCreate} style={{
                    width: "18%",
                    height: "10%",
                    position: "relative",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justigyContent: "center",
                    textAlign: "center",
                    margin: "10px",
                    top:"5%",
                    border: "5px solid white",
                    backgroundColor: "black"


                }}>
                    
                    <h1 style={{color:"white", fontFamily: "Julius Sans One, sans-serif"}}>New Patient</h1>
                </button>
            )}
            </div>
        
        )
    }
}