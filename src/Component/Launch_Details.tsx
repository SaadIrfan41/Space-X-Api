import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Loader from './Loader'

interface MatchParams {
  id: string
}

interface Props extends RouteComponentProps<MatchParams> {}

const launch_details = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      launch_site {
        site_name_long
      }
      links {
        video_link
        article_link
        reddit_launch
        wikipedia
      }
      launch_success
      launch_date_local
    }
  }
`

const Launch_Details = ({ match }: Props) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(launch_details, {
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
              <h4>Name: {data.launch.site_name_long}</h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4 style={{ textTransform: 'capitalize' }}>
                Active: {JSON.stringify(data.launch.launch_success)}
              </h4>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Built Year: {data.launch.launch_date_local}</h4>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Launch_Details
