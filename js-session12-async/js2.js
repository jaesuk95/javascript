// filter & map 
async function parseTokens() {
    try {
        let response = await fetch('https://api.1inch.exchange/v3.0/1/tokens');
        let tokens = await response.json();
        let tokenList = Object.values(tokens.tokens);  
        // console.log(tokenList);
        // return;

        // map transforms each every element into something else (for example, to format datas from api)
        let listItems = tokenList
            .filter(token => token.decimals === 6)  // this filter only keep those tokens that have 6 decimals 
            .map(token => `<li>${token.name} (${token.symbol}, decimals: ${token.decimals}): ${token.address}</li>`);

        document.body.innerHTML += `<ul>${listItems.join('')}</ul>`;
        console.log(tokenList)
    } catch(e){
        console.log(`ERROR: ${e}`);
    }
}

parseTokens();


const joinExample = ['<li>1</li>', '<li>2</li>']
joinExample.join('')

// example of map
[1,2,3,4,5].map(x => `<li>${x}</li>`)
// result = ['<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>', '<li>5</li>']

// another example of map
[1,2,3,4,5]
    .filter(x => x % 2 === 1)   // only prints out odd numbers from array
    .map(x => `<li>${x}</li>`);
// result = ['<li>1</li>', '<li>3</li>', '<li>5</li>']



