import React, { Component } from 'react'

export default class Length extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <div id="break-label">
                    <p>Break Length</p>
                    <span className="incre-arrow" role="img">⬆️</span>
                        5
                    <span className="decre-arrow" role="img">⬇️</span>
                </div>
                <div id="session-label">
                    <p>Session Length</p>
                    <p>
                        <span className="incre-arrow" role="img">⬆️</span>
                        25
                        <span className="decre-arrow" role="img">⬇️</span>
                    </p>
                </div>
            </div>
        )
    }
}
