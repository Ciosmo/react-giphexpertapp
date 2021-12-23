export const getGifs = async(categorias) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=5&api_key=BzFcJGrBECFGxKKYZDrdAxE6kBjeZDnD`;
    const rsp = await fetch(url);
    const {data} = await rsp.json();
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}