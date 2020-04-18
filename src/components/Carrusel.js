import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import medium from '../assets/images/medium.png';

class Carrusel extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "LinkedIn",
                    subTitle: "Check out my Experience!",
                    imgSrc: linkedin,
                    link: "https://www.linkedin.com",
                    selected: false
                },
                {
                    id: 1,
                    title: "GitHub",
                    subTitle: "Check out my Projects!",
                    imgSrc: github,
                    link: "https://www.github.com/PabloRR100",
                    selected: false
                },
                {
                    id: 2,
                    title: "Medium",
                    subTitle: "Check out my Posts about AI!",
                    imgSrc: medium,
                    link: "https://medium.com/@pabloruizruiz",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) => {
        //  
        let items = [...this.state.items];
        
        // Turn the selected card to treu
        items[id].selected = items[id].selected ? false : true;

        // Turn all other non-selcted cards to false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        // Persist changes
        this.setState({
            items
        });
    }

    // Map and create the components
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render () {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carrusel;