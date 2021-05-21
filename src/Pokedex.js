import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.js';

class Pokedex extends Component {
    render (){
        // const dex = [
        //     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        //   ];
        
        //Calculate total scoreusing map, but preferably should use reduce(), 
        //Also this function should be on game level for comparison
        // let total = 0;
        // this.props.hand.map( e => total += e.base_experience);

        console.log(this.props);  
        let title;
        if (this.props.won){
            title = <h1 className="Pokedex-winner">You win!</h1>
        } else {
            title = <h1 className="Pokedex-loser">You lose!</h1>
        }

        return (
            // Print one pokedex instance
            <div className="Pokedex" id={this.props.id}>
                <p className="game">
                    Total score: {this.props.score}
                    {title}
                </p>

                {                            
                this.props.hand.map (d => 
                <Pokecard 
                        id={d.id}
                        cname={d.name} 
                        type={d.type} 
                        img_id={d.id} 
                        exp={d.base_experience}></Pokecard>)
                                
                }


            </div>
        )

    }

}

export default Pokedex;