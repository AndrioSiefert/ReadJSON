<h1 align="center">
  <img alt="banner" title="#bannner" src="./src/public/banner.png" />
</h1>
<h1 align="center">Read JSON</h1>
<p align="center">This software is an API built with Node.js and Express that provides two endpoints. The first endpoint receives a URL as a query parameter, makes an HTTP request to that URL and formats the JSON response with indentation to make it easier to read, returning the formatted data as a response. The second endpoint also receives a URL as a query parameter, makes an HTTP request to that URL, formats the JSON response with indentation and saves it in a local file, which is then made available for download.</p>

# 🛠️Install the dependencies

```
npm install
```

## 🚀Usage

To use this API, follow these steps:

1. **Start the server:** Run `npm start` to start the server.

2. **Send a GET request:** Send a GET request to the following endpoints:

    - `/?url=YOUR_URL` - This endpoint formats the JSON response from the specified URL with indentation.
    - `/download?url=YOUR_URL` - This endpoint formats the JSON response from the specified URL with indentation and saves it as a local file, which can be downloaded.

📌Example:

```bash
 http://localhost:3000/?url=https://api.example.com/data

 or

 http://localhost:3000/download?url=https://api.example.com/data
```
