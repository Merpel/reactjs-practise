import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div style={{ marginTop: '1.5em' }}>
                <p>This page is still under development and will change over time</p>
                <hr />
                <p>Currently these tabs are being developed: <strong>{this.props.tab1}</strong> and <strong>{this.props.tab2}</strong> </p>
                <hr />
                <p>These tabs are done or have actual content in them <strong>{this.props.tab3}</strong> .</p>
            </div >
        );
    }
}
