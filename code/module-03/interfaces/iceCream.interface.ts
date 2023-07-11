interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string ;
}

const myIceCream : Sundae = { 
    flavor: 'vanilla',
    scoops: 5,
    sauce: 'caramel',
    nuts: true,
    whippedCream: true
}

console.log( myIceCream.flavor )


function tooManyScoops( myIceCream: Sundae ) {
  if ( myIceCream.scoops >= 4 ) {
    return myIceCream.scoops + ' is too many scoops!';
  } else { 
    return 'Your ice cream will be ready soon!';
  }
}

console.log( tooManyScoops( { flavor: 'vanilla', scoops: 5, sauce: 'chocolate'}) );

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr);

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();