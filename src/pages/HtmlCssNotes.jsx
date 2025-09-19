import React from 'react'

function HtmlCssNotes() {
  return (
    <div className="container">
      <h2>HTML & CSS Notes</h2>
      <h4>HTML Example</h4>
      <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}</pre>
      <h4>CSS Example</h4>
      <pre>{`body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}`}</pre>
    </div>
  )
}

export default HtmlCssNotes