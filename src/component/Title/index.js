import React, { Component } from 'react';
import { $titleText } from "../../constant";


class Title extends Component {
    render() {
        return (
            <div className="psim-title">
               <div className="title-text">
                   { $titleText }
               </div>
            </div>
        )
    }
}

export default Title;