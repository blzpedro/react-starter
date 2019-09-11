import React from "react";

const DeepPage = (props) => {
    const { id } = props.match.params;
    return (<h1>DeepPage {id}</h1>);
};

export default DeepPage;