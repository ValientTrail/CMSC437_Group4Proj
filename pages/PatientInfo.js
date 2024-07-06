class PatientInfoScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: props.style ?? {},
            form: {
                name: props.name ?? "Jane Doe",
                DOB: props.age ?? "11/21/2003",
                street : props.street ?? "1234 Right LN",
                city: props.city ?? "Baltimore",
                state: props.state ?? "MD",
                zip: props.zip ?? 21749
            }
        }
    }

    render(){
        return(
            <>
                
                <div style={{
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}>
                <h1 style={{
                            position: "absolute",
                            top: "-5%",
                            fontFamily:"Julius Sans One, sans-serif, bold",
                                fontSize: "50px",
                                color:"white",
                        }}>{ this.state.form.name }</h1> 
                <div style={{
                    height:"40%",
                    width: "95%",
                    backgroundColor: "#8F8D8D",
                    borderRadius: "1rem",
                    margin: "10px",
                    padding: "20px",
                    display: "flex",
                    boxShadow: "0px 0px 30px #191a19"
                    
                    }}>
                        <h1 style={{
                            position: "absolute",
                            left: "5%",
                            top: "8%",
                            fontFamily:"Julius Sans One, sans-serif, bold",
                                fontSize: "50px",
                                color:"white",
                        }}>Vitals</h1>
                        <div style={{
                            margin: "0px",
                            width:"80%",
                            height: "100%",
                            transform: "translateY(20%)",
                        }}>
                            <div style={{
                                height:"15%",
                                width: "100%",
                                display: "flex",
                                margin: "20px",
                            }}>
                            <HeartRateGraph style={{
                                    width: "80%",
                                    height: "100%",
                                }} />
                            <h1 style={{
                            
                                fontFamily:"Julius Sans One, sans-serif",
                                fontSize: "30px",
                                color:"white",
                                
                            }}>EKG</h1>
                            </div>
                            <div style={{
                                height:"15%",
                                width: "100%",
                                display: "flex",
                                margin: "20px",
                            }}>
                            <HeartRateGraph style={{
                                    width: "80%",
                                    height: "100%",
                                }} />
                            <h1 style={{
                            
                                fontFamily:"Julius Sans One, sans-serif",
                                fontSize: "30px",
                                color:"white",
                                
                            }}>PPG</h1>
                            </div>
                            <div style={{
                                height:"15%",
                                width: "100%",
                                display: "flex",
                                margin: "20px",
                            }}>
                            <HeartRateGraph style={{
                                    width: "80%",
                                    height: "100%",
                                }} />
                            <h1 style={{
                            
                                fontFamily:"Julius Sans One, sans-serif",
                                fontSize: "30px",
                                color:"white",
                                
                            }}>BP</h1>
                            </div>
                        </div>
                        <VitalSigns /> 
                    </div>
                    <div style={{
                        height:"20%",
                        width: "95%",
                        backgroundColor: "#8F8D8D",
                        borderRadius: "1rem",
                        margin: "10px",
                        padding: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0px 0px 30px #191a19"
                    
                    }}>

                        <PatientInfo form={this.state.form}/>
                    </div>
                </div>
                <SendDataToHospitalComp />
            </>
        )
    }
} 

function SendDataToHospitalComp(){
    const [showAlert, setShowAlert] = React.useState(false);
    return(
        <div style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
           { showAlert ? <div style={{
                        backgroundColor: "#211e1e",
                        height: "50%",
                        width: "50%",
                        borderRadius: "20px",
                        border: "3px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "3"
                    }}>
                        <h1 style={{position: "relative", color:"white", 
                        fontFamily: "Julius Sans One, sans-serif"}}>
                            Data sent to hospital!
                        </h1>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "20%"
                        }}>
                            <StyledButton name="Confirm" style={{width:"90%", height:"100%", backgroundColor:"#14e414",
                            border: "2px solid #01fc44", "--hoverColor": "#01fc44"}} onClick={() => {setShowAlert(false)}}/>
                        </div>
                    </div>:<></>
                    }
                    <StyledButton
                            style={{
                                position: "absolute",
                                bottom: "2%",
                                right: "2%",
                                height: "6%",
                            }}
                            name="Send Data"
                            onClick={() => {setShowAlert(true)}}
                        />

        </div>

    )
}