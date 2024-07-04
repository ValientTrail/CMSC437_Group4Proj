class UserSelect extends React.Component {
    constructor(props){
        super(props)
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.handlePowerChange = this.handlePowerChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.state = {
            changePage: props.changePage,
            power: 0,
            userType: "First-Responder"
        }
    }
    handlePatientClick(){
        this.state.changePage(<CreatePatient />)
    }

    handlePowerChange(power) {
        this.setState({power: power});
    }

    handleUserChange(userType){
        this.setState({userType: userType});
    }

    render() {
        const isPowerOn = this.state.power === 1;

        return (
            <div style={{
                position: "relative", // Set position relative for absolute positioning inside
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>


                {/* Render other components only if power is on */}
                {isPowerOn && (
                    <div style={{position: "relative", zIndex: 1}}>
                        <h1 style={{color: "#FF5000"}}>Select User Type</h1>
                        <StyledButton 
                            onClick={this.handlePatientClick}
                            name="First Responder"
                            style={{
                                width: "400px"
                            }}
                        />
                        <StyledButton 
                            onClick={this.handleUserChange}
                            name="Hospital"
                            style={{
                                width: "400px",
                                backgroundColor: "#0000FF",
                                border: "2px solid #0066ff"
                            }}
                            hoverColor="#0066ff"
                        />
                    </div>
                )}                
                {/* Always render the power button */}
                <PowerButton power={this.state.power} handlePowerChange={this.handlePowerChange} />
            </div>
        );
    }
}
