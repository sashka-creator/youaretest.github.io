
function copyToClipboard() {
    var copyText = document.getElementById("copyText");
    
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    
    alert("Пошта скопійована");
}

function copyToClipboardTel() {
    var copyTextTel = document.getElementById("copyTextTel");
    
    var textAreaTel = document.createElement("textarea");  // Здесь должно быть "textarea", а не "textareaTel"
    textAreaTel.value = copyTextTel.textContent;
    document.body.appendChild(textAreaTel);
    textAreaTel.select();
    document.execCommand("Copy");  // Используйте "copy", а не "CopyTel"
    document.body.removeChild(textAreaTel);  // Здесь должно быть "textAreaTel", а не "textArea"
    
    alert("Телефон скопійовано");  // Вы также можете изменить текст алерта на "Телефон скопійовано" или что-то подобное
}


function copyToClipboardTel2() {
    var copyTextTel2 = document.getElementById("copyTextTel2");
    
    var textAreaTel2 = document.createElement("textarea");  // Исправлено: textarea2 -> textarea
    textAreaTel2.value = copyTextTel2.textContent;
    document.body.appendChild(textAreaTel2);
    textAreaTel2.select();
    document.execCommand("copy");  // Исправлено: "Copy" -> "copy"
    document.body.removeChild(textAreaTel2);  // Исправлено: textAreaTel2 (вместо textArea)
    
    alert("Телефон скопійовано");
}
