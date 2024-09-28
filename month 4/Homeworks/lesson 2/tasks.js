function checkWord() {
    let textareaContent = document.getElementById("myTextarea").value;
    const inputWord = document.getElementById("myInput").value;
    const result = document.getElementById("result");

    if (textareaContent.includes(inputWord)) {
        result.textContent = "So'z topildi!";
    } else {
        result.textContent = "So'z topilmadi.";
    }
}
