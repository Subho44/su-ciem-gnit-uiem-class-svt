import React from 'react'
import { Card } from 'react-bootstrap'

const Citycard = ({city}) => {

  return <>
    <Card className='mt-3'>
    <Card.Img src={city.image} variant='top'/>
    <Card.Body>
         <Card.Title>Cityname:{city.name}</Card.Title>
        <Card.Text>Population:{city.population}</Card.Text>
    </Card.Body>

    </Card>
  </>
}

export default Citycard