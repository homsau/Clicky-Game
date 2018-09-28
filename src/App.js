import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clickedCharactersArr: [],
    score: 0,
    wins: 0
  };

  characterClick = event => {
    // Make a copy of the state characters array to work with
    const currentCharacter = event.target.id;

    // Filter for the clicked character
    const clickedCharacters = this.state.clickedCharactersArr.indexOf(currentCharacter) > -1;
    console.log(currentCharacter);
    if (clickedCharacters) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharactersArr: [],
        score: 0
      });
    } else {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharactersArr: this.state.clickedCharactersArr.concat(
          currentCharacter
        ),
        score: this.state.score + 1
      }, () => {
        if (this.state.score ===12) {
          this.setState({
            characters: this.state.characters.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCharactersArr: [],
            score: 0,
            wins: this.state.wins +1
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score}
          wins={this.state.wins}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name_id={character.name_id}
              image={character.image}
              characterClick={this.characterClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
