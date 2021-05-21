import React, {Component} from "react";
import './Pokecard.css'; 

//Pad the id for fancy images to three digits
let padImgId = (id) => {
    var newId = id.toString();
    var digits = newId.length;
    //start padding
    while (digits < 3) { 
         newId = `0${newId}`; //pad one 0 in front
         digits++;
    }
    //Another way to pad:
    /*
    if ( newId.length < 3) {
        newId = "0".repeat(3 - newId.length) + newId;
    }*/
    return newId;
}

//Another way to pad, pad two 0 in front and just slice 3 digits from the back
function padImgId2(id) {
    return ( id <= 999 ? `00${id}`.slice(-3) : id );
}

class Pokecard extends Component {
    static defaultProps = {
        cname: "DefaultName",
        type: "Generic",
        exp: "000"
    };
    //UI
    render (){
        //Raw image or fancy image, fancy images requires to pad the id with 0 in front of its id to 3 digits
        let img_url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.img_id}.png`;
        let fimg_url=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padImgId2(this.props.img_id)}.png`;
        /* Alternative:
            const POKE_API= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
            let img_url = `${POKE_API}${this.props.img_id}.png`;
        */
        return (
            <div className="Pokecard" id={this.props.id}>
                <h2>{this.props.cname}</h2>
                <div className="Pokecard-image">
                    <img className="Pokecard-img" src={fimg_url} />
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>        
            </div>
        )

    }

}

export default Pokecard;



