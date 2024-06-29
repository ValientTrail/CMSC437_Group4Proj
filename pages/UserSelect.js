class UserSelect extends React.Component {
    constructor(props){
        super(props)
        this.handlePatientClick = this.handlePatientClick.bind(this);
    }
    handlePatientClick(){
        console.log("clicked!")
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
                    />
                </div>
                
            </div>
        )
    }
}