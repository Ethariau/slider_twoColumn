const changingArticle = document.querySelectorAll(".changingArticle");
const numberOfChoice = document.querySelectorAll(".choice");

console.log(changingArticle.style);

for (let index = 0; index < numberOfChoice.length; index++) {
    const e = numberOfChoice[index];
    const x = changingArticle[index];
    e.addEventListener("focus",()=>{
        changingArticle.forEach(el => {
            el.style.display = "none";
        });
        x.style.display = "flex";
        x.classList.add("animation")
    })
}