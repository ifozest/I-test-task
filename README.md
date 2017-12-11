# URL shortener

install dependencies

```javascript
npm i
```
## Production Build

Build js, css and etc. files with command

```javascript
npm run build
```
and start the server with

```javascript
npm run server-prod
```

To test this app, open your browser and go to **http://localhost:3000**

## Development Mode

run in separated terminals 

```javascript
npm run server
```

and 

```javascript
npm start
```

it will open your default browser on **http://localhost:9000**

## Tests

run
 
```javascript
npm run test
```
result of tests in the **coverage** folder.

100% coverage in progress...


## Main Idea

Build a page with a field to type in and submit links, and which shows you the generated URL once submitted.

### Changes

Due the limitations of remote server API to handle list of submitted URLs, sessionStorage were chosen to store all Links. 

Visits are always 0 because data in sessionStorage not synchronized with the data on remote Server. Also *last visited* was changed on *created* to add some interactivity in this column. 

Implemented Clear History and Copy Link to ClipBoard on click on the link. Added notification.
