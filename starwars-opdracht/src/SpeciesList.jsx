import React, {Component} from 'react';
import SpeciesInfo from './SpeciesInfo';

class SpeciesList extends Component {
    // constructor that saves the text with contains the species that will be visible in the list on the website. It also binds the handleSubmit
    constructor(props) {
        super(props);
        this.state = {text: "Neimodian, Mon Calamari, Gungan, Trandoshan, Hutt, Yoda's species, Ewok Sullustan, Toydarian, Dug"};
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //show all the species with the mammal class
    onClickButtonMammal = () => {
        this.setState({
            text: " Yoda's species Ewok Sullustan Toydarian Dug"
        });
    }
    // show all the species with gastropod class
    onClickButtonGastropod = () => {
        this.setState({
            text: "Hutt"
        });
    }
    // show all the species with reptile class
    onClickButtonReptile = () => {
        this.setState({
            text: "Trandoshan"
        });
    }
    // show all the species with Amphibian class
    onClickButtonAmphibian = () => {
        this.setState({
            text: "Mon Calamari, Gungan"
        });
    }
    // show all the species with an unknown class
    onClickButtonUnknown = () => {
        this.setState({
            text: "Neimodian"
        });
    }
    // show all the species
    onClickButtonAll = () => {
        this.setState({
            text: "Neimodian, Mon Calamari, Gungan, Trandoshan, Hutt, Yoda's species, Ewok Sullustan, Toydarian, Dug"
        });
    }
    // show all the species who are under 150 cm
    onClickButtonSmall = () => {
        this.setState({
            text: "Yoda's species, Ewok, Toydarian, Dug"
        });
    }
    // show all the species who are larger than 150 cm
    onClickButtonLarge = () => {
        this.setState({
            text: "Hutt, Trandoshan, Mon Calamari, Sullustan, Neimodian, Gungan"
        });
    }
    // this method is the submit handler and gives all the species who you have searched for
    handleSubmit(event) {
        event.preventDefault();
        this.setState({text: this.element.value});
    }
    //renders the search bar, the filters and the list of species
    render() {
        const species = this.props.species;
        return (

            <ul className="list-group">
                <li className="list-group-item">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Here"
                                   aria-describedby="basic-addon2" ref={el => this.element = el}/>
                            <div className="input-group-append">
                                <button value="Submit" className="btn btn-warning" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                    <p>{this.state.value}</p>
                </li>
                <li className="list-group-item">
                    <h3 className="species-name">Class Selector</h3>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-light" onClick={this.onClickButtonMammal}>Mammal
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButtonGastropod}>Gastropod
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButtonReptile}>Reptile
                        </button>
                    </div>
                    <div className="btn-group btn-group-toggle" role="group">
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButtonAmphibian}>Amphibian
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButtonUnknown}>Unknown
                        </button>
                        <button type="button" className="btn btn-light" onClick={this.onClickButtonAll}>All</button>
                    </div>
                </li>
                <li className="list-group-item">
                    <h3 className="species-name">Height Selector</h3>
                    <div className="btn-group btn-group-toggle" role="group">
                        <button type="button" className="btn btn-light" onClick={this.onClickButtonSmall}>&lt;150CM
                        </button>
                        <button type="button" className="btn btn-light" onClick={this.onClickButtonLarge}>&gt;150CM
                        </button>
                    </div>
                </li>
                {
                    species.map((p) => {
                        if (this.state.text.includes(p.name)) {
                            return (
                                <li className="list-group-item">
                                    <h3 className="species-name">{p.name}</h3>
                                    <SpeciesInfo speciesInfo={p}/>
                                </li>
                            )
                        } else {
                            return;
                        }
                    })
                }
            </ul>
        );
    }
}

export default SpeciesList;