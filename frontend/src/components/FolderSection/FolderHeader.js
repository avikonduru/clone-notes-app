import React from 'react'
import PropTypes from 'prop-types'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FolderHeader = props => {
    return (
        <div style={{paddingTop: 20, paddingBottom: 20}}>
            <Row>
                <Col style={{textAlign: 'left'}}>
                    <h5>Folders</h5>
                </Col>
                <Col style={{textAlign: 'right'}}>
                    <Button variant="primary">Add</Button> 
                </Col>
            </Row>
        </div>
    )
}

FolderHeader.propTypes = {

}

export default FolderHeader
