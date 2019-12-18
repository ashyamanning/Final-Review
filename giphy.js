let key = "nofgPE7bpvmhOJX8gYW454Tc38ZbMDzO"
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let select = document.querySelector("select");
    let input = document.querySelector("#userInput");
    let submit = document.querySelector("#submit");
    let content = document.querySelector(".content");
    let limit = 10;
    let search = "cats";
    
    let h1 = document.createElement("h1");

    form.addEventListener("Submit", () => {
        giphySearch(search, limit);
    })

    const giphySearch = async (userInput, userLimit) => {
        try {
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            // debugger
        } catch (error) {
            
        }
    }
    
    const populateSelect = () => {
        for (let i = 1; i <= 25; i++) {
            let option = document.createElement("option");
            option.innerText = i;
            option.value = i;
            select.appendChild(option);
        }
    }
    populateSelect();
    
})