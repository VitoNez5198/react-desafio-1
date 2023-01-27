import React from "react";

const Footer = (props) => {
    const { text } = props
    return (
        <footer className="bg-primary text-light text-center mt-4 mb-0 p-4">{text}</footer>
    )
}

export default Footer