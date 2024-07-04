class UserSelect extends React.Component {
    constructor(props){
        super(props)
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.state = {
            changePage: props.changePage,
            goBack: props.goBack
        }
    }
    handlePatientClick(){
        this.state.changePage(<PatientInfoScreen goBack={goBack}/>)
    }

    render(){
        return(
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div>
                    <StyledButton 
                        onClick = { this.handlePatientClick }
                        style = {{
                            width: "400px",
                        }}
                        name={"Patient Data"}
                    />
                </div>
                
            </div>
        )
    }
}