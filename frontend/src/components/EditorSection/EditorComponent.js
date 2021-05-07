import React from 'react'
import PropTypes from 'prop-types'
import EditorHeader from './EditorHeader'

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/InputGroup';

const EditorComponent = props => {
    return (
        <div>
            <Container style={{backgroundColor: "#FFF1D1", height: "100vh"}}>
                <EditorHeader/>
                <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" style={{ height: '90vh' }} />
                </InputGroup>
            </Container>
        </div>
    )
}

EditorComponent.propTypes = {

}

export default EditorComponent
