function showWelcome() {
    alert("ยินดีต้อนรับสู่เว็บไซต์ช่องมองไปอ่านมา!");
}

function sayHello() {
    const name = document.getElementById("userInput").value;
    const result = document.getElementById("greetingResult");
    if (name !== "") {
        result.innerText = "สวัสดีคุณ " + name + " ยินดีต้อนรับครับ!";
    } else {
        alert("กรุณากรอกชื่อก่อนนะครับ");
    }
}
