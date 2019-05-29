import React from "react";
import Collapsible from "react-collapsible";
import "./App.css";
import lightsaber from "./assets/bluelightsaber.png";
import "./stars.css";
import "./image.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ employees: data.results });
      });
  }

  render() {
    return (
      <div className="root">
        <div className="main stars">
          <div className="twinkling">
            <div className="header">Star Wars App</div>
            <div className="mainLayout">
              <div className="title">
                <p>Employees list</p>
                <img
                  className="titleImage divider rotate-img"
                  alt="divider"
                  src={lightsaber}
                />
              </div>

              <ul className="employeesList">
                {this.state.employees.map(elem => {
                  return (
                    <li key={elem.name} className="employeeItem">
                      <Collapsible trigger={elem.name} className="employeeName">
                        <div className="employeeDetails">
                          <div className="leftDetails">
                            <span>Height: {elem.height}</span>
                            <span>Mass: {elem.mass}</span>
                            <span>Birth year: {elem.birth_year}</span>
                            <span>Gender: {elem.gender}</span>
                          </div>

                          <div className="rightDetails">
                            <span>Hair: {elem.hair_color}</span>
                            <span>Skin: {elem.skin_color}</span>
                            <span>Eye: {elem.eye_color}</span>
                          </div>
                        </div>
                      </Collapsible>
                      <div className="dividerImage">
                        <img
                          className="divider rotate-img"
                          alt="divider"
                          src={lightsaber}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
