import React from 'react'
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.css";
import "./PokemonCard.css";



const PokemonCard = ({id, image, name, type}) => {
    return (
    <>
    <Card style={{ width: '18rem'}} className='pokemoncard'>
    {id}
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{name.toUpperCase()}</Card.Title>
    <Card.Text>
    {type.toUpperCase()}
    </Card.Text>
    </Card.Body>
    </Card>
    </>
    )
}

export default PokemonCard;