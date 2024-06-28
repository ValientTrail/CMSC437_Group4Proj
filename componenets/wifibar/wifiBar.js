



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

