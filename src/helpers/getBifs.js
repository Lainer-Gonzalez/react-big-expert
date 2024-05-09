 export const getBifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=snnkwlnJWvRm4ZZUOdXBCVUcGSH0MTxp&q=${ category }&limit=10`;
    const resp = await fetch(url);
    // console.log(resp);
    const { data } = await resp.json();

    const bifs = data.map( img  => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return bifs;
}