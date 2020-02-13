import React, { Component } from "react";

/** Service */
import { getSpeciesService, createCharacterService } from "../../services/api";

const errorMsg = "This field is required";

class CharacterForm extends Component {
  state = {
    nameClasses: ["form-control"],
    nameValue: "",
    nameError: false,
    speciesList: [],
    speciesValue: "Choose one option",
    speciesClasses: ["custom-select"],
    speciesError: false,
    genderValue: "male",
    homeWorldValue: "",
    btnClasses: ["btn", "btn-primary"],
    isCreatingCharacter: false
  };

  componentDidMount() {
    getSpeciesService().then(response => {
      this.setState({
        speciesList: ["Choose one option", ...response]
      });
    });
  }

  setValue = (field, value) => {
    const { nameClasses, speciesClasses } = this.state;

    this.setState({
      [field]: value
    });

    switch (value) {
      case "speciesValue":
        this.desactiveError("nameError", "nameClasses", nameClasses);
        break;
      case "nameValue":
      default:
        this.desactiveError("speciesError", "speciesClasses", speciesClasses);
        break;
    }
  };

  onFocusName = () => {
    const { nameClasses } = this.state;

    this.setState({
      nameError: false,
      nameClasses: [...nameClasses].filter(item => item !== "is-invalid")
    });
  };

  onBlurName = () => {
    const { nameValue, nameClasses } = this.state;

    if (!nameValue) {
      this.activeError("nameError", "nameClasses", nameClasses);
    } else {
      this.desactiveError("nameError", "nameClasses", nameClasses);
    }
  };

  onFocusSpecies = () => {
    const { speciesClasses } = this.state;

    this.setState({
      speciesError: false,
      speciesClasses: [...speciesClasses].filter(item => item !== "is-invalid")
    });
  };

  onBlurSpecies = () => {
    const { speciesValue, speciesList, speciesClasses } = this.state;

    if (speciesValue === speciesList[0]) {
      this.activeError("speciesError", "speciesClasses", speciesClasses);
    } else {
      this.desactiveError("nameError", "nameClasses", speciesClasses);
    }
  };

  setSpeciesError = () => {
    const { speciesClasses } = this.state;

    this.setState({
      speciesError: true,
      speciesClasses: [...speciesClasses, "is-invalid"]
    });
  };

  setGender = value => {
    this.setState({
      genderValue: value
    });
  };

  activeError = (error, classesName, classesSelected) => {
    this.setState({
      [error]: true,
      [classesName]: [...classesSelected, "is-invalid"]
    });
  };

  desactiveError = (error, classesName, classesSelected) => {
    this.setState({
      [error]: false,
      [classesName]: [...classesSelected].filter(item => item !== "is-invalid")
    });
  };

  addCharacter = e => {
    const { history } = this.props;
    const {
      nameValue,
      nameClasses,
      speciesValue,
      speciesList,
      speciesClasses,
      genderValue,
      homeWorldValue,
      btnClasses,
      isCreatingCharacter
    } = this.state;
    const newCharacter = {
      name: nameValue,
      species: speciesValue,
      gender: genderValue,
      homeworld: homeWorldValue
    };

    e.preventDefault();

    if (!isCreatingCharacter) {
      if (!nameValue) {
        this.nameRef.focus();
        this.activeError("nameError", "nameClasses", nameClasses);
      } else if (speciesValue === speciesList[0]) {
        this.speciesRef.focus();
        this.activeError("speciesError", "speciesClasses", speciesClasses);
      } else {
        this.setState({
          btnClasses: [...btnClasses, "disabled"],
          isCreatingCharacter: true
        });

        createCharacterService(newCharacter).then(response => {
          setTimeout(() => {
            history.push("/");
          }, 1000);
        });
      }
    }
  };

  render() {
    const {
      nameClasses,
      nameValue,
      nameError,
      speciesList,
      speciesValue,
      speciesClasses,
      speciesError,
      genderValue,
      homeWorldValue,
      btnClasses
    } = this.state;

    return (
      <form>
        <div className="form-group">
          <label>
            <span className="text-primary mr-2">*</span>Name
          </label>
          <input
            className={nameClasses.join(" ")}
            placeholder="Name"
            onFocus={this.onFocusName}
            onBlur={this.onBlurName}
            value={nameValue}
            onChange={e => {
              this.setValue("nameValue", e.currentTarget.value);
            }}
            ref={name => {
              this.nameRef = name;
            }}
          />
          {nameError && <p className="mt-2 text-danger">{errorMsg}</p>}
        </div>
        <div className="form-group">
          <label>
            <span className="text-primary mr-2">*</span>Species
          </label>
          <select
            className={speciesClasses.join(" ")}
            onFocus={this.onFocusSpecies}
            onBlur={this.onBlurSpecies}
            value={speciesValue}
            onChange={e => {
              this.setValue("speciesValue", e.currentTarget.value);
            }}
            ref={species => {
              this.speciesRef = species;
            }}
          >
            {speciesList.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {speciesError && <p className="mt-2 text-danger">{errorMsg}</p>}
        </div>
        <div className="form-group">
          <label>
            <span className="text-primary mr-2">*</span>Gender
          </label>
          <div>
            <label className="mr-3">
              <input
                className="mr-1"
                type="radio"
                value="male"
                name="optradio"
                checked={genderValue === "male"}
                onChange={e => {
                  this.setGender(e.currentTarget.value);
                }}
              />
              Male
            </label>
            <label className="mr-3">
              <input
                className="mr-1"
                type="radio"
                value="female"
                name="optradio"
                checked={genderValue === "female"}
                onChange={e => {
                  this.setGender(e.currentTarget.value);
                }}
              />
              Female
            </label>
            <label className="mr-3">
              <input
                className="mr-1"
                type="radio"
                value="n/a"
                name="optradio"
                checked={genderValue === "n/a"}
                onChange={e => {
                  this.setGender(e.currentTarget.value);
                }}
              />
              n/a
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Homeworld</label>
          <input
            className="form-control"
            placeholder="Homeworld"
            value={homeWorldValue}
            onChange={e => {
              this.setValue("homeWorldValue", e.currentTarget.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={btnClasses.join(" ")}
          onClick={e => this.addCharacter(e)}
        >
          Add Character
        </button>
      </form>
    );
  }
}

export default CharacterForm;
