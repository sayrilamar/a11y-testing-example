import React from "react";

const handleFormSubmit = () => {
    console.log("I handled it!");
};

export default() => (
    <main style={{
        color: "#222"
    }}>
        <h1>Hello world !</h1>
        <img src="https://picsum.photos/800/450" alt="me"></img>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"></input>
        </form>
        <a href="#" onClick={handleFormSubmit}>
            Submit
        </a>
        <span onClick={() => alert("hello world!")}>Click Me</span>
    </main>
);
