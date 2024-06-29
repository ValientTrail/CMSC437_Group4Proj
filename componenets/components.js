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
                width: "60px",
                height: "32px"
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
    constructor(props){
        super(props);
        this.state = {
            page: props.page
        };
    }

    render(){
        return(
        <div className="appFrame">
            <div className="appBackground">
                <WifiBar/>
                {
                    this.state.page
                }
            </div>
        </div>
    )}
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
        <div className="flex-item-vitals">
            <div className="vitalSigns">
                <p>SPO2: {this.state.spO2}</p>
            </div>
        </div>
        <div className="flex-item-vitals">
            <div className="vitalSigns">
                <p>RR: {this.state.RR}</p>
            </div>
        </div>
        <div className="flex-item-vitals">
            <div className="vitalSigns">
                <p>BP: {this.state.BP}</p>
            </div>
        </div>
        <div className="flex-item-vitals">
            <div className="vitalSigns">
                <p>TEMP: {this.state.Temp}</p>
            </div>
        </div>
    </div>
);
    }
}

class PatientInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name ?? "Jane Doe",
            bd: props.age ?? "11/21/2003",
            street : props.street ?? "1234 Right LN",
            city: props.city ?? "Baltimore",
            state: props.state ?? "MD",
            zip: props.zip ?? 21749
        }
    }
    render(){
        return(
            <div className="flex-container">
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.name}</p>
                    </div>
                </div>
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.street}</p>
                    </div>
                </div>
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.state}</p>
                    </div>
                </div>
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.bd}</p>
                    </div>
                </div>
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.city}</p>
                    </div>
                </div>
                <div className="flex-item-info">
                    <div>
                        <p>{this.state.zip}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class HeartRateGraph extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            heartValues: [0,1,0,1,0,1,0,1,0,1]
        }
    }

    

    render(){
        return(
            <div className="HR_Background">
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