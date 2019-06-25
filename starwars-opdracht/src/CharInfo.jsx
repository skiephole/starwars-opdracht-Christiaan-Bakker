import React, {Component} from 'react';

class CharInfo extends Component {
    //constructor with expanded state stored in it. This expanded state is used to open en close the details of the people
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    // opens the detailed information
    open() {
        this.setState({expanded: !this.state.expanded})
    }
    // closes the detailed information
    close() {
        this.setState({expanded: !this.state.expanded})
    }
    //renders the detailed information or a button that can be clicked to show the info
    render() {
        const info = this.props.charInfo;

        if (!this.state.expanded) {
            return <p className="btn btn-warning" onClick={this.open}>Show info</p>
        }

        return (
            <div className="user-details">
                <p className="btn btn-secondary" onClick={this.close}>Hide info</p>
                <ul>
                    <li><h5>Height: {info.height}</h5></li>
                    <li><h5>Mass: {info.mass}</h5></li>
                    <li><h5>Hair color: {info.hair_color}</h5></li>
                    <li><h5>Skin color: {info.skin_color}</h5></li>
                    <li><h5>Birth date: {info.birth_year}</h5></li>
                    <li><h5>Gender: {info.gender}</h5></li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;