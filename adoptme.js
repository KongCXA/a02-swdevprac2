document.getElementById("adoptForm").addEventListener("submit", function(event) {
    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let petnum = document.getElementById("petnum").value;
    let agree = document.getElementById("agree").checked;

    if (fullname === "" || phone === "") {
        alert("กรุณากรอกชื่อ-นามสกุล และเบอร์ติดต่อ");
        event.preventDefault();
        return;
    }

    if (petnum === "" || isNaN(petnum) || petnum < 0 || petnum > 100) {
        alert("กรุณากรอกจำนวนสัตว์เลี้ยงเป็นตัวเลข ระหว่าง 0 ถึง 100");
        event.preventDefault();
        return;
    }

    if (!agree) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        event.preventDefault();
        return;
    }

    alert("ส่งฟอร์มสำเร็จ");
});
