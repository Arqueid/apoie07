function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).innerText;
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Chave PIX copiada para a área de transferência!");
}
