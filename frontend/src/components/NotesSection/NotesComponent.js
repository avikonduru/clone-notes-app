import React from 'react'
import PropTypes from 'prop-types'
import NotesHeader from './NotesHeader'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FaTrash } from 'react-icons/fa';

const NotesComponent = props => {
    return (
        <div>
            <Container style={{backgroundColor: "#FFDECA", height: "100vh"}}>
                <NotesHeader/>
                <Row>
                    <Col style={{textAlign: 'left'}}>
                        Note 1
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Button variant="danger">
                            <FaTrash/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'left'}}>
                        Note 2
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Button variant="danger">
                            <FaTrash/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'left'}}>
                        Note 3
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Button variant="danger">
                            <FaTrash/>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

NotesComponent.propTypes = {

}

export default NotesComponent
