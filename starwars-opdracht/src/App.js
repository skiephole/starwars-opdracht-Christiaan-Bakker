import React, {Component} from 'react';
import PeopleList from './PeopleList';
import axios from 'axios';
import SpeciesList from "./SpeciesList";


class App extends Component {
    //constructor for the 2 list of people and species
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            species: []
        }

        this.getPeople = this.getPeople.bind(this);
        this.getSpecies = this.getSpecies.bind(this);
    }
    // Method that gets the people from the API and sets the state
    getPeople() {
        return axios.get("http://swapi.co/api/people", {crossDomain: true})
            .then((response) => {
                this.setState({people: response.data.results})
            })
    }
    // Method that gets the species from the API and sets the state
    getSpecies() {
        return axios.get("http://swapi.co/api/species", {crossDomain: true})
            .then((response) => {
                this.setState({species: response.data.results})
            })
    }
    //get the species from the methods
    componentDidMount() {
        this.getPeople()
        this.getSpecies()
    }
    // the render method for loading html that shows the two lists with information
    render() {
        const {people, species} = this.state;
        return (
            <div className="App">
                <div className="row text-center">
                    <div className="col-xs-0 col-sm-0 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-lg-4">
                        <h5 className="display-4">List of all Species:</h5>
                        <SpeciesList species={species}/>
                    </div>
                    <div className="col-xs-0 col-sm-0 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-12 col-lg-4">
                        <h5 className="display-4">List of all People:</h5>
                        <PeopleList people={people}/>
                    </div>
                    <div className="col-xs-0 col-sm-0 col-lg-1"></div>
                </div>
            </div>
        );
    }
}

export default App;
