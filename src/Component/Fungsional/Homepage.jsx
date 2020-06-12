import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

const Homepage = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Homepage</h1>
                            <p className="lead"> Nothin Last Forefer, We Can Change The Future</p>
                            <p className="text-info">Created by: Nanda Satria Putra</p>
                        </Container>
            </Jumbotron>
        </div>
    );
}

export default Homepage;