function genRandom(x) {
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let s = "";
    for (i = 0; i < x; ++i) {
        d = Math.floor(Math.random() * arr.length);
        s = s + arr[d];
        arr.splice(d, d);
    }
    return s;
}
let ans = genRandom(4);
console.log(ans);
function check() {
    let guess = document.querySelector("#guess").value;
    document.querySelector("#guess").value = "";
    console.log(guess);
    let a_cnt = 0, b_cnt = 0;
    for (i = 0; i < guess.length; ++i) {
        if (!(guess.charCodeAt(i) >= 48 && guess.charCodeAt(i) <= 57)) {
            alert("輸入應該只包含數字!!!");
            return;
        }
        for (j = 0; j < guess.length; ++j) {
            if (i == j) continue;
            if (guess[i] == guess[j]) {
                alert("輸入裡面不應該有兩個一樣的數字!!!");
                return;
            }
        }
    }
    for (i = 0; i < ans.length; ++i) {
        if (ans[i] == guess[i])
            a_cnt++;
    }
    for (i = 0; i < ans.length; ++i) {
        for (j = 0; j < ans.length; ++j) {
            if (i == j) continue;
            if (ans[i] == guess[j])
                b_cnt++;
        }
    }
    if (a_cnt == ans.length)
        alert("正確!!!");
    else
        alert(a_cnt.toString()+"A"+b_cnt.toString()+"B!!!");
    return;
}