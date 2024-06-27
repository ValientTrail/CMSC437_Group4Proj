import React from "react";
import './appBackground.css'

const AppBackground = (props) => {
    const [page, setPage] = React.useState(props.page)
    console.log(props);
    return(
        <div className="appFrame">
            <div className="appBackground">
                {
                    page
                }
            </div>
        </div>
    )
}

export default AppBackground