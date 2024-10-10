/**
 * Ở trường hợp này có thể dùng const vì giá trị này mình sẽ không gán lại
 * đối với var và let có thể gán lại giá trị
 * var khai báo dùng cho biên toàn cục
 */
var inputbox = document.getElementById("inputBox");
var tasklist = document.getElementById("taskList");
/**
 * trường hợp nếu ta đặt class, khi lấy sẽ trả về HTMLCollection
 * HTMLCollection là gì??
 */
function addTask() {
    if(inputbox.value === "") {
        alert("Please write your task!");
    } else {
        // Add task
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li);
    /**
     * 1. Nếu input có text, ta tạo một tag li.
     * 2. Gán nội dung của text vào thẻ li đã tạo
     * 3. thêm thẻ li là con của thẻ <ul class="taskList">
     */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span);
    /**
     * Sau khi tạo được thẻ li trên, ta thêm ký hiệu x (close) vào thẻ span
     * Thẻ span = x là con của thẻ li, và x nằm bên cạnh nội dung đã nhập
     */
    }
    inputbox.value = ""; 
    saveDate();
    /**
     * Sau khi thêm các task, ta làm trống thẻ input
     * Và lưu nội dung đã nhập vào local storage
     */
}

tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveDate()
    }
/**
 * Nếu ta click vào thẻ li (classList), ta sẽ đánh dấu checked đã css
 * sau đó lưu vào local storage
 */
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveDate()
    }
/**
 * Nếu ta click vào x <span> thì thẻ cha của tag span là thẻ li sẽ bị xóa
 * lưu lại
 */
}, false);

// function khi sử dụng phím enter thay vì click
inputbox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") { 
      addTask();
    }
});

function saveDate() {
    localStorage.setItem("data", tasklist.innerHTML);
/**
 * - LocalStorage:tưởng tự như cookie, html hỗ trợ lưu trữ và truy cập ngày trong trình duyệt
 * - Dữ liệu được lưu sẽ tồn tại ngay cả sau khi đã đóng
 * - Sẽ mất nếu dùng clear history của trình duyệt
 * - Hạn chế là nội dung chỉ được lưu trên trình duyệt của người dùng KHÔNG PHẢI SERVER
 */
}

function showTask(){
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();

/**
 * 1. Fix bug addEventListener ---- Checked!!!
 * 2. các kiểu khai báo var, const, let
 * 3. let, innerHTML, appendChild
 * 4. localStorage -- checked!!!
 * 
 */