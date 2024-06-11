const myUrl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?user=abc&query=string#hash');

// console.log(myUrl.hash);
// console.log('port'+myUrl.port);

// console.log('user : '+myUrl.searchParams.get('user'));
// console.log('query : '+myUrl.searchParams.get('query'));

console.log('user : '+myUrl.searchParams.toString());
