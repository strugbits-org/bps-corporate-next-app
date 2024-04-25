import React from 'react'

const About = ({data}) => {
    console.log("data", data);
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export const getServerSideProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await response.json();
    console.log("response", res);
    return {
        props: {
            data: res,
        },
    };
}

export default About;
