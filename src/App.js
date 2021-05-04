import logo from './logo.svg';
import './App.css';
import {Form,Navbar,Button , Col, Image, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <div className="bg">
  <br />
  <Navbar bg="brown" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-chocolate-candy-with-chocolate-slice-png-image_4959828.jpg"
        width="70"
        height="70"
        className="d-inline-block align-top"
       
      />{' '}
home    </Navbar.Brand>
  </Navbar>
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-chocolate-with-almonds-nuts-vector-illustration-png-image_4895090.jpg"  height ="70" width =" 70" thumbnail />
    </Col>
    <Col xs={6} md={4}>
   
     <Image src="https://png.pngtree.com/png-clipart/20200226/original/pngtree-three-dimensional-elements-of-chocolate-filled-with-gift-boxes-png-image_5317700.jpg"   width="90"
        height="70" thumbnail />
  
    </Col>
  
    <Col xs={6} md={4}>
      <Image src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-chocolate-ice-cream-scoop-with-chocolate-pieces-slice-png-image_4959830.jpg" width= "90" height ="90" thumbnail />
    </Col>
  </Row>
</Container>
      
      <div  className="App" Form inline>

  <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
     <h1> <span>please choose</span> the number of chocolate tablets</h1>
  </Form.Label>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="3">more than three</option>

  </Form.Control>
  <Form.Check
    type="checkbox"
    className="my-1 mr-sm-2"
    id="customControlInline"
    label="save your command"
    custom
  />
  <Button type="submit" className="my-1 btn">
    Submit
  </Button>
</div>

    </div>
  );
}

export default App;
