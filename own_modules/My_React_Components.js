import React from 'react'

export class MySurvey extends React.Component {
    render() {
        return (
            <form>
                <p>This is a survey for {this.props.company}</p>
                <label for="first_name">First name</label><br />
                <input type="text" id="first_name" placeholder="First name here"></input>
                <br />
                <br />
                <label for="last_name">Last name</label><br />
                <input type="text" id="last_name" placeholder="Last name here"></input>
                <br />
                <br />
                <label for="fav_color">Favourite colour</label><br />
                <input type="color" id="fav_color" name="favourite colour" value="#00ff00"></input>
                <br />
                <br />
                <input type="submit" value="Continue" />
            </form>
        );
    }
};