import React from 'react';

class FirstResponder extends React.Component {
    render() {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#f0f0f0" // Light background color for the page
            }}>
                <h1>First Responder Page</h1>
            </div>
        );
    }
}

export default FirstResponder;
