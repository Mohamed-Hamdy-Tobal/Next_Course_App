// ## Clint Side ##

const PostDetails = (props) => {
    console.log(props.PostDetails)
    return (
        <div className="flex justify-center items-center py-10">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1>Number Of Post {props.PostDetails.id}</h1>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.PostDetails.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.PostDetails.body}</p>
            </div>
        </div>
    )
}

export default PostDetails


// ## Server Side ##

// export async function getServerSideProps(context) {
//     const productId = context.params.postID;

//     // Fetch product data from your database or API using the productId
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
//     const PostDetails = await response.json();

//     return {
//         props: {
//             PostDetails,
//         },
//     };
// }

export async function getStaticPaths () {
    // Fetch the list of possible values for postId
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Get the paths we want to pre-render based on postId
    const paths = posts.map(post => {
        return {
            params: { postID: `${post.id}` },
        }
    })

    return { paths: paths, fallback: false };
};

export async function  getStaticProps(context) {
    const id = context.params.postID;
    
    // Fetch data for the current postID
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const PostDetails = await response.json();

    return {
        props: {
            PostDetails,
        },
    };
};