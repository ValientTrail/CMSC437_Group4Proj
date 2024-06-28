

class AppBackground extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: props.page
        };
        console.log(props);
    }

    render(){return(
        <div className="appFrame">
            <div className="appBackground">
                {
                    this.state.page
                }
            </div>
        </div>
    )}
}
