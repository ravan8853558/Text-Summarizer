document.getElementById("summarizeBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const summaryOutput = document.getElementById("summaryOutput");

    if (inputText.trim() === "") {
        summaryOutput.textContent = "Please enter some text to summarize.";
        return;
    }

    const sentences = inputText.split(". ");
    const summarySentences = [];

    // Basic logic: Pick every 3rd sentence as important
    for (let i = 0; i < sentences.length; i += 3) {
        summarySentences.push(sentences[i]);
    }

    const summary = summarySentences.join(". ") + ".";
    summaryOutput.textContent = summary || "Text is too short to summarize.";
});
