import React, {Component} from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]

    }

    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];
        while ( hand1.length < hand2.length ) {
            let randIdx = Math.floor(Math.random(hand2.length)); //Math.random doesn't return 1
            let tempPokemon = hand2.splice(randIdx, 1)[0]; //splice return an array of removed elements, so we need to extract the element by [0]
            hand1.push(tempPokemon);
        }
        // console.log(hand1);
        // console.log(hand2);
        //Calculate scores for each hand
        let score1 = hand1.reduce((total, ele) => (total + ele.base_experience), 0);
        let score2 = hand2.reduce((total, ele) => (total + ele.base_experience), 0)

        return (
            //We have to put a root node here so it can package things up
            //The plan is to render Pokedex component with shuffled data
            <div>
                {/* Individual Pokedex only know its own score, but can't compare with each other
                    So the score calculation has be to done at game level/component.
                */}
                <Pokedex hand={hand1} id="hand1" score={score1} won={score1 > score2} />
                <Pokedex hand={hand2} id="hand2" score={score2} won={score2 > score1} />
            </div>

        )
    }
    

}

export default Pokegame;