import React, {Component} from 'react';
import CharInfo from './CharInfo';

class PeopleList extends Component {
    // constructor that saves the text with contains the persons that will be visible in the list on the website. It also binds the handleSubmit
    constructor(props) {
        super(props);
        this.state = {text: "Owen Lars, Luke Skywalker, C-3PO, R2-D2, Darth Vader, Leia Organa, Beru Whitesun lars, R5-D4, Biggs Darklighter, Obi-Wan Kenobi"};
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //This method shows all the youngest persons
    onClickButton25 = () => {
        this.setState({
            text: "Luke Skywalker, Leia Organa, Biggs Darklighter"
        });
    }
    //This method shows all the middle old persons
    onClickButton2550 = () => {
        this.setState({
            text: "R2-D2, Darth Vader, Beru Whitesun lars"
        });
    }
    // this method shows all the oldest persons
    onClickButton50 = () => {
        this.setState({
            text: "C-3PO, Obi-Wan Kenobi, Owen Lars"
        });
    }
    //this method shows all the persons who's birth year is unknown
    onClickButtonUnknown = () => {
        this.setState({
            text: "R5-D4"
        });
    }
    //this method shows all the persons
    onClickButtonAll = () => {
        this.setState({
            text: "Owen Lars, Luke Skywalker, C-3PO, R2-D2, Darth Vader, Leia Organa, Beru Whitesun lars, R5-D4, Biggs Darklighter, Obi-Wan Kenobi"
        });
    }
    // this method is the submit handler and gives all the people who you have searched for
    handleSubmit(event) {
        event.preventDefault();
        this.setState({text: this.element.value});
    }
    // this method renders the list of people, the filters to filter through the people and the search bar
    render() {
        const people = this.props.people;
        people.sort();
        return (
            <div className="list-group">
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
                    <h3 className="species-name">Birth Year Selector</h3>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-light" onClick={this.onClickButton25}>&lt;25BBY
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButton2550}>25-50
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButton50}>&gt;50BBY
                        </button>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-light" onClick={this.onClickButtonUnknown}>Unknown
                        </button>
                        <button type="button" className="btn btn-light"
                                onClick={this.onClickButtonAll}>All
                        </button>
                    </div>
                </li>
                {
                    people.map((p) => {
                        if (this.state.text.includes(p.name)) {
                            return (
                                <li className="list-group-item">
                                    <h3 className="char-name">{p.name}</h3>
                                    <CharInfo charInfo={p}/>
                                </li>
                            )
                        } else {
                            return;
                        }
                    })
                }
            </div>
        );
    }
}

export default PeopleList;