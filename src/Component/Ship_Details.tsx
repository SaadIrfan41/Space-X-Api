import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import {
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import Loader from './Loader'

interface MatchParams {
  id: string
}

interface Props extends RouteComponentProps<MatchParams> {}

const ship_details = gql`
  query ship($id: ID!) {
    ship(id: $id) {
      active
      home_port
      image
      name
      successful_landings
      year_built
    }
  }
`

const Ship_Details = ({ match }: Props) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(ship_details, {
    variables: { id },
  })

  if (loading) return <Loader />
  if (error) return <h1>Error : </h1>

  return (
    <Container>
      <Row className='my-4'>
        <Col md={6}>
          <Image src={data.ship.image} alt={data.ship.name} fluid />
        </Col>
        <Col md={6} className='my-4'>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h4>Name: {data.ship.name}</h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Port: {data.ship.home_port}</h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4>
                Successful Landings:{' '}
                {data.ship.successful_landings
                  ? JSON.stringify(data.ship.successful_landings)
                  : 'None'}
              </h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4 style={{ textTransform: 'capitalize' }}>
                Active: {JSON.stringify(data.ship.active)}
              </h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Built Year: {data.ship.year_built}</h4>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Ship_Details
