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

// export async function getServerSideProps(context) {
//     const productId = context.params.index;

//     // Fetch product data from your database or API using the productId
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
//     const PostDetails = await response.json();

//     return {
//         props: {
//             PostDetails,
//         },
//     };
// }

export const getStaticPaths = async () => {
    // Fetch the list of possible values for postId
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Get the paths we want to pre-render based on postId
    const paths = posts.map((post) => ({
        params: { postId: post.id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const postId = params.postId;
    
    // Fetch data for the current postId
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postDetails = await response.json();

    return {
        props: {
            postDetails,
        },
    };
};