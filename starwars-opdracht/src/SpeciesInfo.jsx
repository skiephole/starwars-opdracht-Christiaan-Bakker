import React, {Component} from 'react';

class SpeciesInfo extends Component {
    //constructor with expanded state stored in it. This expanded state is used to open en close the details of the species
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
        const info = this.props.speciesInfo;
        if (!this.state.expanded) {
            return <p className="btn btn-warning" onClick={this.open}>Show info</p>
        }

        return (
            <div className="user-details">
                <p className="btn btn-secondary" onClick={this.close}>Hide info</p>
                <ul>
                    <li><h5>Classification: {info.classification}</h5></li>
                    <li><h5>Designation: {info.designation}</h5></li>
                    <li><h5>Average height: {info.average_height}</h5></li>
                    <li><h5>Skin colors: {info.skin_colors}</h5></li>
                    <li><h5>Hair colors: {info.hair_colors}</h5></li>
                    <li><h5>Eye colors: {info.eye_colors}</h5></li>
                    <li><h5>Average livespan: {info.average_lifespan}</h5></li>
                    <li><h5>Language: {info.language}</h5></li>
                </ul>
            </div>
        )
    }
}

export default SpeciesInfo;