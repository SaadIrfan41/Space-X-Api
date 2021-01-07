import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Loader from './Loader'

interface MatchParams {
  id: string
}

interface Props extends RouteComponentProps<MatchParams> {}

const rocket_details = gql`
  query Rocket($id: ID!) {
    rocket(id: $id) {
      name
      active
      description
      cost_per_launch
      company
      country
      wikipedia
    }
  }
`

const Rocket_Details = ({ match }: Props) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(rocket_details, {
    variables: { id },
  })

  if (loading) return <Loader />
  if (error) return <h1>Error : </h1>

  return (
    <Container>
      <Row className='my-4'>
        <Col
          md={6}
          className='my-4 text-center'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h4>Name: {data.rocket.name}</h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4 style={{ textTransform: 'capitalize' }}>
                Active: {JSON.stringify(data.rocket.active)}
              </h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Description: {data.rocket.description}</h4>
            </ListGroupItem>

            <ListGroupItem>
              <h4>Cost: {data.rocket.cost_per_launch}</h4>
            </ListGroupItem>

            <ListGroupItem>
              <h4>Country: {data.rocket.country}</h4>
            </ListGroupItem>

            <ListGroupItem>
              <h4>Company: {data.rocket.conpany}</h4>
            </ListGroupItem>

            <ListGroupItem>
              <h3>
                <a href={data.rocket.wikipedia}>Wikipedia Artical</a>
              </h3>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Rocket_Details
