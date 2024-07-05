class WifiBar extends React.Component {
    constructor(props){
        super(props);
        this.LTE = "./images/LTE.png";
    }

    render(){
        return (
            <div className="wb-Background">
                <div className="battery-background">
                    <div className="battery" style={{width:"70%"}}></div>
                </div>
                <img src={this.LTE} alt="LTE" style={{
                    position: "absolute",
                    left: "45%",
                    top: "12%",
                    width: "20%",
                    height: "70%"
                }}></img>
                <h1 style={{    
                    position: "absolute",
                    right: "5%",
                    bottom: "-25%"}}
                    >10:09</h1>
                
            </div>
        )
    }
}


class AppBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page,
            goBack: props.goBack ?? null,
            showBack: props.showBack ?? false,
            userType: props.userType ?? "First Responder", // Default to "First Responder" if undefined
            pageType: props.pageType ?? "UserSelect" // Default to "UserSelect" if undefined
        };
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.state.goBack();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page === undefined || this.props.page?.type !== prevProps.page?.type ||
            prevProps.showBack !== this.props.showBack || this.props.goBack !== prevProps.goBack ||
            this.props.userType !== prevProps.userType || this.props.pageType !== prevProps.pageType) { // Check for pageType changes
            this.setState({
                page: this.props.page,
                goBack: this.props.goBack ?? null,
                showBack: this.props.showBack ?? false,
                userType: this.props.userType ?? "First Responder", // Update userType
                pageType: this.props.pageType ?? "UserSelect" // Update pageType
            });
        }
    }

    render() {
        const { userType, pageType } = this.state;
        const currentUserText = pageType === "UserSelect" ? "current user:" :
                                userType === "First Responder" ? "current user: first responder" : 
                                userType === "Hospital" ? "current user: hospital" : 
                                "current user:";

        return (
            <div className="appFrame">
                <div className="appBackground">
                    <WifiBar />
                    {
                        this.state.page
                    }
                    {this.state.showBack &&
                        <StyledButton
                            style={{
                                position: "absolute",
                                top: "2%",
                                left: "2%",
                                height: "6%",
                            }}
                            name="< Back"
                            onClick={this.handleBack}
                        />
                    }
                    <div style={{
                        position: "absolute",
                        bottom: "4.5%",
                        left: "4.5%",
                        color: "white",
                        fontFamily: "Julius Sans One, sans-serif",
                        fontSize: "16px"
                    }}>
                        {currentUserText}
                    </div>
                </div>
            </div>
        );
    }
}


class StyledButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            style: props.style ?? {},
            onClick: props.onClick ?? null,
            name: props.name ?? "Button",
            hoverColor: props.hoverColor ?? "#ff7171"
        }
    }

    render() {
        const style = {...this.state.style, "--hoverColor": this.state.hoverColor}
    
        return(
            <div className="styledButton">
                <button id="button" style={style} onClick={ this.state.onClick }>
                    <h1>{this.state.name}</h1>
                </button>
            </div>
        )
    }
}

// Code for Patient Vitals Page ----------------------------------------------------------------------

class VitalSigns extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            spO2: props.heartRate ?? "97%",
            RR: props.oxygenLevel ?? 75,
            BP: props.temperature ?? 123/80,
            Temp: props.temp ?? "96.2F"
        }
    }

    render() {
        
        return (
            <div className="flex-container">
                
                    <div className="vitalSigns">
                        <p>SPO2: {this.state.spO2}</p>
                    </div>
               
                
                    <div className="vitalSigns">
                        <p>RR: {this.state.RR}</p>
                    </div>
               
                
                    <div className="vitalSigns">
                        <p>BP: {this.state.BP}</p>
                    </div>
                
                
                    <div className="vitalSigns">
                        <p>TEMP: {this.state.Temp}</p>
                    
                </div>
            </div>
        );
    }
}

class PatientInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: props.form
        }
    }

    handleChange = () => {
        return;
    }

    render(){
        return(
            <>
            <h1 style={{
                position: "relative",
                left: "45%",
                top: "-10%",
                fontFamily:"Julius Sans One, sans-serif, bold",
                    fontSize: "20px",
                    color:"white",
            }}>Patient Info</h1>

            <div style={{
                width: "50%%",
                height: "70%",
                display: "flex",
                flexWrap: "wrap",
            }}>

                {
                    Object.keys(this.state.form).map((key, index) => {
                        return(
                            <div className="flex-item-info" key={key} style={{
                                width: "25%",
                                height: "45%",
                                position: "relative",
                                top: "-15%",
                            }}>
                                <label style={{
                                    fontFamily: "Julius Sans One, sans-serif",
                                    fontSize: "15px",
                                    color: "white",
                                }}>{key.toUpperCase()}</label>
                                <input value={this.state.form[key]} style={{
                                    width: "80%",
                                    borderRadius: "1rem",
                                    backgroundColor: "#272222",
                                    color: "white",
                                }}>
                                </input>
                            </div>

                        )
                    })
                }
            </div>
            </>
        )
    }
}



class HeartRateGraph extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            heartValues: [0,1,0,1,0,0,1,0,1,0],
            style: props.style ?? {},
        }
    }

    render(){
        return(
            <div className="HR_Background" style={this.state.style}>
                <div className="scroller">
                {
                    this.state.heartValues.map((value, i) => {
                        if(value){
                            return(
                                <HeartBeat key={i} style = {{
                                    height:"100%",
                                    width:"100%",
                                }}/>
                            )
                        }
                        return(
                        <Line key={i} style = {{
                            height:"100%",
                            width:"100%",
                        }}/>)
                    })
                }
                </div>

            </div>
        )
    }
}

class PowerButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: {backgroundColor: "red", padding: "1rem"},
            isPowerOn: props.power ?? 0
        }
    }

    powerState = () => {
        const powerVal = this.props.power;
        if(powerVal == 0){
            this.props.handlePowerChange(1);
            this.setState({style: {backgroundColor: "green", padding: "1rem"}});
        }else{
            this.setState(prevState => ({...prevState, isPowerOn: 1}), () => {this.countdown()});
        }
    }

    countdown = () => {
        setTimeout(() => {
            this.setState(prevState => ({...prevState, isPowerOn: 0}));
        }, 10000);
    }

    powerOff = () => {
        this.setState({style: {backgroundColor: "red", padding: "1rem"}});
        this.props.handlePowerChange(0);
        this.setState(prevState => ({...prevState, isPowerOn: 0}));
    }

    render(){
        return(
            <div style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div className="power-button-container">
                    <button onClick={this.powerState} style={this.state.style}>
                        <img src="./images/power-button-96.png" style={{height: "50px", width: "50px"}}/>
                    </button>
                </div>
                { this.state.isPowerOn == 1 ?               
                    <div style={{
                        backgroundColor: "#211e1e",
                        height: "50%",
                        width: "50%",
                        borderRadius: "15%",
                        border: "3px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "3"
                    }}>
                        <h1 style={{position: "relative", color:"white", 
                        fontFamily: "Julius Sans One, sans-serif"}}>
                            Power Off
                        </h1>
                        <p style={{color:"white"}}>Do you want to turn the device off?</p>
                        <p style={{color:"white"}}>Automatically Abort after 10 seconds</p>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "20%"
                        }}>
                            <StyledButton name="Abort" style={{width:"80%", height:"100%"}} onClick={() => {
                                this.setState(prevState => ({...prevState, isPowerOn: 0
                                }))}}/>
                            <StyledButton name="Confirm" style={{width:"90%", height:"100%", backgroundColor:"#14e414",
                            border: "2px solid #01fc44", "--hoverColor": "#01fc44"}} onClick={this.powerOff}/>
                        </div>
                    </div> : <></>
                }
            </div>
        );
    }
}

function Line(props){
    const [canvas, setCanvas] = React.useState();
    const [style, setStyle] = React.useState(props.style);
    React.useEffect(() => {
        if(canvas != null){
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(0, ctx.canvas.height / 2);
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
            ctx.closePath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#880808';
            ctx.stroke();
        }
    }, [canvas])

    return (
        <div className="canvas-container">
            <canvas style={style} ref={setCanvas}/>
        </div>
    )
}

function HeartBeat(props){
    const [canvas, setCanvas] = React.useState();
    const [style, setStyle] = React.useState(props.style);



    React.useEffect(() => {
        if(canvas != null){
            const ctx = canvas.getContext('2d');
            const fithOfWidth = ctx.canvas.width / 5;
            const peakHeight = ctx.canvas.height - (ctx.canvas.height / 10);
            const minHeight = ctx.canvas.height / 10

            ctx.beginPath();
            ctx.moveTo(0, ctx.canvas.height / 2);
            ctx.lineTo(fithOfWidth, ctx.canvas.height / 2);
            ctx.lineTo(2*fithOfWidth, minHeight);
            ctx.lineTo(3*fithOfWidth, peakHeight);
            ctx.lineTo(4*fithOfWidth, ctx.canvas.height / 2);
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
            ctx.moveTo(0, ctx.canvas.height / 2);
            ctx.closePath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#880808';
            ctx.stroke();            
        }
    }, [canvas])

    return (
        <div className="canvas-container">
            <canvas style={style} ref={setCanvas}/>
        </div>
    )
}
// ------------------------------------------------------------------------------