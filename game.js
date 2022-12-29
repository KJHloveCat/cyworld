function search() {
    
    let current_word = document.getElementById("word").innerText

    let input_word = document.getElementById("myword").value

    if(current_word[current_word.length-1] === input_word[0]){
        document.getElementById("word").innerText = input_word
        document.getElementById("result").innerText = "정답입니다!"
        input_word = document.getElementById("myword").value = ""
    }else {
        document.getElementById("result").innerText = "땡!"
        input_word = document.getElementById("myword").value = ""
    }
}