
const button = document.querySelector("#button")
const audioElement = document.querySelector("#audio")

 function sayJoke(joke) {
    voiceRSS.speech({
        key: 'df7f945b856642459f6ab04bcd5cb968',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    })
}

async function getJoke() {
    const url = 'https://api.api-ninjas.com/v1/jokes?limit=1'
    const key = '6+9LdIYv6wItnOKehhMmqg==4E6KOAgDQB76II6z'
    try{
        button.disabled = true;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'X-Api-Key': key
            }
        })
        const joke = await response.json()
        sayJoke(joke[0].joke)
    }
    catch(err) {
        console.log(err)
    }
}

button.addEventListener("click", getJoke)
audioElement.addEventListener("ended", () => button.disabled = false)
