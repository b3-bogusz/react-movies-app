
const getSlugFromTitle = movieTitle => {
    return movieTitle
        .toLowerCase()
        .replace(/[%#<>@;:/?!&=+${}|`,.-]/g, '')
        .split(' ')
        .join('-')
};

export default getSlugFromTitle;
