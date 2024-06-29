class PatientInfoScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: props.style ?? {},
                        
        }
    }

    render(){
        return(
            <div style={{
                display:"flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }}>
                
                <HeartRateGraph />
            </div>
        )
    }
} 