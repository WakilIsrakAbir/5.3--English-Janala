// its not connect to any html file just for testing purpus


const createElements = (arr) => {
    // console.log(arr);
    const htmlElements = arr.map(el => `<span class="btn">${el}</span>`);
    console.log(htmlElements.join(" "));
};

const synonyms = [ "I", "Me", "Myself"];
createElements(synonyms);
