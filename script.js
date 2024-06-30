let count = 0;
let savedCounts = "";

document.getElementById("increment-btn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = count;
});

document.getElementById("decrement-btn").addEventListener("click", function() {
    if (count > 0) {
        count--;
    }
    document.getElementById("counter").innerText = count;
});

document.getElementById("save-btn").addEventListener("click", function() {
    savedCounts += count + " - ";
    document.getElementById("saved-counts").innerText = savedCounts;
    count = 0;
    document.getElementById("counter").innerText = count;
});
