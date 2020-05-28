import React from 'react'

export class MySurvey extends React.Component {
    render() {
        // Gets the default rgb values from user for color input
        let rgb = [this.props.r, this.props.g, this.props.b];
        let hex = rgbDecToHex(rgb);

        return (
            <form>
                <p>This is a survey for {this.props.company}</p>
                <label htmlFor="first_name">First name</label><br />
                <input type="text" id="first_name" placeholder="First name here"></input>
                <br />
                <br />
                <label htmlFor="last_name">Last name</label><br />
                <input type="text" id="last_name" placeholder="Last name here"></input>
                <br />
                <br />
                <label htmlFor="fav_color">Favourite colour</label><br />
                <input type="color" id="fav_color" name="favourite colour" value={hex}></input>
                <br />
                <br />
                <input type="submit" value="Continue" />
            </form>
        );
    }
};

// Turns an array from decimal rgb values into a hexadecimal rgb string
function rgbDecToHex(rgb) {
    let res = '#';
    for (let i = 0; i < 3; i++) {
        let val = rgb[i];

        // Check if the value is set and if it is a number
        if (val === undefined || isNaN(val)) {
            res += "00";
        } else {
            res += componentToHex(val);
        }
    }
    return res;
}

// Turn single decimal number to hexadecimal number
function componentToHex(c) {
    let hex = parseInt(c, 10).toString(16);

    // Handle small and too big numbers
    if (hex.length > 2) hex = "00";
    else if (hex.length === 1) hex = "0" + hex;
    
    return hex;
}