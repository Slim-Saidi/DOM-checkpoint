var deleteButtons = document.querySelectorAll(".cancel")
var heartButtons = document.querySelectorAll(".heart")
var plusButtons = document.querySelectorAll(".plusicon");
var minusButtons = document.querySelectorAll(".minusicon")
var total = document.querySelector(".totalprice");

Array.from(deleteButtons).map((el) => {
    el.addEventListener("click", () => {
        el.parentElement.remove();
    });
});

Array.from(heartButtons).map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("red");
    });
});

Array.from(plusButtons).map((el) => {
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML =
        parseInt(el.nextElementSibling.innerHTML) + 1;
        var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace("$", "");
        console.log(price);
        total.innerHTML = 
            parseInt(total.innerHTML.replace("$", "")) + parseInt(price) + "$";
    });
});

Array.from(minusButtons).map((el) => {
    el.addEventListener("click", () => {
        if(el.previousElementSibling.innerHTML > 0) {
        el.previousElementSibling.innerHTML =
        parseInt(el.previousElementSibling.innerHTML) - 1;
        var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace("$", "");
        total.innerHTML = 
            parseInt(total.innerHTML.replace("$", "")) - parseInt(price) + "$";
    }
    });
});


