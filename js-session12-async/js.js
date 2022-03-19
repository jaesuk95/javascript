const jsonStr = `{insert JSON api data here}`;
const jsObj = JSON.parse(jsonStr)   // using this method will allow the data to be formatted 

// or you can google json formatter google chrome for extension 
// this will allow the api to be formatted 

// to make this api_url readable, you need to add .then 
// transform response to reponse.json()
// if we do this, you will see the promise results will become an object 
// the response will digest into json string
fetch(API_URL).then(response => response.json())                            // this is asynchronous programming because it could take 0.5s or 2s for response 
    .then(data => {       // this is the data whatever it is from api_url
        document.body.innerHTML = `
                <h1>Conversion data</h1>
                <p1>1ETH : ${Number.parseInt(data.toTokenAmount) / 1000000}USDC </p>    
                <p1>Estimate gas : ${data.estimatedGas}</p1>
                `;
        console.log(data)
        console.timeEnd('fetch')    // result = 417.695ms the time it took for ellapse for request and response
        // this is why we call promises, fetches and async programming
        // while javascript takes time to fetch, it will operate other operations 
    });

    console.log('Operation after the fetch promise');
    console.time('fetch');

 
    async function get1InchEthUsdcData(){
        let response = await fetch(API_URL);  // whenver we use await, it has to be async function
        let data = await response.json();
        document.body.innerHTML = `
            <h1>Conversion data</h1>
            <p1>1ETH : ${Number.parseInt(data.toTokenAmount) / 1000000}USDC </p>    
            <p1>Estimate gas : ${data.estimatedGas}</p1>
            `;
            // whenver we call async function the return value of async function is wrapped inside the promise 
        return data;
    }

    // get1InchEthUsdcData().then(console.log)
    let data = await get1InchEthUsdcData();
    console.log(data)

// you will see Promise {<pending>}
// the issue is the communication takes time so whenever we make a request it takes time to get response back
// that is why we have to use asynchronous program









/*

What is fetch?
The fetch() method is used to request to the server and load the information 
in the webpages. The request can be of any APIs that returns the data of the format
JSON or XML. This method returns a promise 

why do we use fetch? 
fetch() starts a request and returns a promise. When the request completes,
the promise is resolved with the Response object. If the request fails due to some network
problems, the promise is rejected. Async/await syntax fits great with fetch() because 
it simplifies the work with promises 

What is promise in javascript?
While a promise object is "pending"(working), the result is undefined. When a Promise object
is "fulfilled", the result is a value, When a Promise object is "rejected", the result is an error object.
A promise is an object that may produce a single value some time in the future. Either a resolved value 
fulfilled, rejected or pending

What is async?
the word async before a function means one simple thing ; a function always returns a promise. 
Other values are wrapped in a resolved promise automatically. 

What is async and await in JavaScript?
"async and await make promises easier to write" async makes a 
function return a Promise. await makes a function wait for a Promise.
*/
