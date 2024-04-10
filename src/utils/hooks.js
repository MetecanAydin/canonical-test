export const useApiData = (data) => {
    const { date, title, featured_media: thumbnail, link, _embedded } = data;

    const author = _embedded.author[0].slug
    const postData = _embedded['wp:term']
    const category = postData[0][0].name
    const tag = postData[1][0].name

    return { date, title, thumbnail, link, author, category, tag }
}

export const usePostDate = (date) => {
    const formatDate = new Date(date)

    const day = formatDate.getDate();
    const month = formatDate.toLocaleString('default', { month: 'long' })
    const year = formatDate.getFullYear()

    const setDate = `${day} ${month} ${year}`

    return setDate
}