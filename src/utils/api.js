export const fetchPosts = async () => {
    let jsonResponse;

    try {
        const response = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
        jsonResponse = await response.json();
    } catch (error) {
        jsonResponse = 'ERROR'
    }
    return jsonResponse;
}