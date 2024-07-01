class UserSelect extends React.Component {
    constructor(props){
        super(props)
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.handlePowerChange = this.handlePowerChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.state = {
            power: 0,
            userType: "First-Responder"
        }
    }
    handlePatientClick(){
        console.log("clicked!")
    }

    handlePowerChange(power) {
        this.setState({power: power});
    }
    handleUserChange(userType){
        this.setState({userType: userType});
    }

    render(){
        return(
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                    <WifiBar/>
                    <PowerButton power={this.state.power} handlePowerChange={this.handlePowerChange}/>
                    <h1 style={{color: "#FF5000"}}>Select User Type</h1>
                    <StyledButton 
                        onClick = { this.handleUserChange }
                        name="First Responder"
                        style = {{
                            width: "400px"
                        }}
                    />
                    <StyledButton 
                        onClick = { this.handleUserChange }
                        name="Hospital"
                        style = {{
                            width: "400px",
                            backgroundColor: "#0000FF",
                            border: "2px solid rgb(0, 200, 255)"
                        }}
                    />
            </div>
        )
    }
}