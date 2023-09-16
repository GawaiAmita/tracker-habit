import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h2 className='fw-bold'>HABIT TRACKER</h2>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header
