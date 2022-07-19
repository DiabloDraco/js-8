var elForm = document.querySelector("#form")
var elInput = document.querySelector("#input")

elForm.addEventListener("submit", function (evt){
    evt.preventDefault();

    var inputValue = elInput.value.trim()

    
    function find(sentece, number) {
        var newArray = sentece.split(" ");
        var longestWord = "";

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].length > longestWord.length) {
                longestWord = newArray[i];
            }
        }

        return longestWord

    }

    var arrayOfWords = find(inputValue);

    document.querySelector("#result").innerHTML = arrayOfWords 
})