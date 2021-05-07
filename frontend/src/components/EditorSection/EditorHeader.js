import React from 'react'
import PropTypes from 'prop-types'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EditorHeader = props => {
    return (
        <div style={{paddingTop: 20, paddingBottom: 20}}>
            <Row>
                <Col style={{textAlign: 'left'}}>
                    <h5>Editor</h5>
                </Col>
            </Row>
        </div>
    )
}

EditorHeader.propTypes = {

}

export default EditorHeader
