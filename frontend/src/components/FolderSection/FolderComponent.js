import React from 'react'
import PropTypes from 'prop-types'
import FolderHeader from './FolderHeader'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FolderComponent = props => {
    return (
        <div>
            <Container style={{backgroundColor: "#AED7EB", height: "100vh"}}>
                <FolderHeader/>
                <Row>
                    <Col>
                        Folder 1
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Folder 2
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Folder 3
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

FolderComponent.propTypes = {

}

export default FolderComponent
