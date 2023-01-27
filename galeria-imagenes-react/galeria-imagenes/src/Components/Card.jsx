import React from "react";
import { Card as CardBootstrap } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import show from "./button";

const Card = (props) => {
    const { title, description, photo, } = props;

    return (
        <CardBootstrap className="col-4 p-4 mx-auto " style={{ width: '25%', border: '2px solid blue' }}>
            <CardBootstrap.Img
                variant="top"
                src={photo}
                style={{ height: 'auto', width: 'auto' }} />
            <CardBootstrap.Body>
                <CardBootstrap.Title className="text-primary">{title}</CardBootstrap.Title>
                <CardBootstrap.Text>{description}</CardBootstrap.Text>
                <Button color="primary" className="mx-4" onClick={show}>+ INFO</Button>
            </CardBootstrap.Body>
        </CardBootstrap>
    );
};

export default Card;