// Components
import FolderComponent from './components/FolderSection/FolderComponent'
import NotesComponent from './components/NotesSection/NotesComponent'
import EditorComponent from './components/EditorSection/EditorComponent'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container>
        <Row>
          <Col>
            <FolderComponent/>
          </Col>
          <Col>
            <NotesComponent/>
          </Col>
          <Col xs={6}>
            <EditorComponent/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
