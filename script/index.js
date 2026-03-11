const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then(res => res.json()) // promise of json data
    .then(json => {
        // console.log(json);
        displayLesson(json.data);
    })
};

const loadLevelWord = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayLevelWord(data.data);
    })
}

const displayLevelWord = (words) => {
    // console.log(words);
    // 1. Get The Container and empty it
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length == 0) {
        // alert("No Word Detected");
        wordContainer.innerHTML = `
        <div class="text-center col-span-full font-bangla">
            <div class="text-5xl mb-2"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <p class="font-medium text-gray-700 mb-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-2xl font-medium text-gray-800">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return;
    }

//     {
//     "id": 81,
//     "level": 1,
//     "word": "Ball",
//     "meaning": "বল",
//     "pronunciation": "বল"
//      }

    // 2. Get into Every word
    
    words.forEach(word => {
        // console.log(word);
        // 3. create element
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-gray-100 rounded-xl shadow-sm text-center py-10 px-5 space-y-3">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
            <p class="font-semibold">Meaning & Pronounciation</p>
            <div class="text-2xl font-bangla font-medium">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} | ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-sky-50 hover:bg-sky-200"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-sky-50 hover:bg-sky-200"><i class="fa-solid fa-volume"></i></button>
            </div>
        </div>
        `
        // 4. Append into container
        wordContainer.append(card);
    });
}

const displayLesson = (lessons) => {
    // console.log(lessons);
    // 1. Get The Container and empty it
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. Get into Every Lesson
    for(let lesson of lessons) {
        // console.log(lesson);
        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
        `;

        // 4. Append into container
        levelContainer.append(btnDiv);
    }
};

loadLessons()