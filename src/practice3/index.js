export const getPoetry = () => {
    fetch("https://v1.jinrishici.com/all.json")
        .then((response) => response.json())
        .then((date) => [date.origin, date.author, date.content])
        .catch((error) => console.info(error));
}

export const getPoetry1 = async () => {
    await fetch("https://v1.jinrishici.com/all.json")
        .then((response) => response.json())
        .then((date) => [date.origin, date.author, date.content])
        .catch((error) => console.info(error));
}
