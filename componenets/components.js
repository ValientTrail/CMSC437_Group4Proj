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