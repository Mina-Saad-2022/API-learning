<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Guide - Read Only</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3f4f6;
            color: #333;
            line-height: 1.6;
        }
        h1, h2, h3 {
            color: #4a90e2;
            text-align: center;
        }
        p, code {
            font-size: 1.1em;
            margin-bottom: 1em;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }
        .code-block {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            color: #333;
            font-family: "Courier New", Courier, monospace;
        }
        .code-comment {
            color: #6a737d;
        }
        .section {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>API Guide - Sending and Receiving Data</h1>
        
        <div class="section">
            <h2>Step 1: Sending Data to the Backend</h2>
            <p>To send data from your frontend to the backend, use a POST request. Below is an example:</p>
            <div class="code-block">
                <code>
                    <span class="code-comment">// Example of sending data to the API</span><br>
                    const sendData = async () => {<br>
                        &nbsp;&nbsp;const response = await fetch('<span style="color: #d73a49;">https://your-backend-url.com/api/endpoint</span>', {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;headers: {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json'<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;},<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify({<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: 'John Doe',<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: 'john.doe@example.com'<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;})<br>
                        &nbsp;&nbsp;});<br>
                        &nbsp;&nbsp;const data = await response.json();<br>
                        &nbsp;&nbsp;console.log(data); <span class="code-comment">// Handle the response data</span><br>
                    };<br>
                    sendData();
                </code>
            </div>
        </div>

        <div class="section">
            <h2>Step 2: Receiving Data from the Backend</h2>
            <p>To fetch and display data from the backend, use a GET request. Here’s how you can implement it:</p>
            <div class="code-block">
                <code>
                    <span class="code-comment">// Example of receiving data from the API</span><br>
                    const getData = async () => {<br>
                        &nbsp;&nbsp;const response = await fetch('<span style="color: #d73a49;">https://your-backend-url.com/api/endpoint</span>');<br>
                        &nbsp;&nbsp;const data = await response.json();<br>
                        &nbsp;&nbsp;console.log(data); <span class="code-comment">// Handle the received data</span><br>
                    };<br>
                    getData();
                </code>
            </div>
        </div>
        
        <div class="section">
            <h2>Step 3: Running the Code</h2>
            <p>Simply include this code in your JavaScript file, and call the <code>sendData()</code> and <code>getData()</code> functions to test the API functionality.</p>
        </div>
    </div>
</body>
</html>
