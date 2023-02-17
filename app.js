const search = document.querySelector("#search");
const div = document.querySelector("div");
const product = [
   {title: "node js course"},
   {title: "react.js course"},
   {title: "advanced javaScript course"},
   {title: "git course"},
   {title: "github course"},
];

search.addEventListener("input", (e) => searchHandler(e));

function searchHandler(event) {
   const filtered = product.filter((i) => {
      return i.title.toLowerCase().includes(event.target.value.toLowerCase());
   });
   div.innerHTML=""
   filtered.forEach((i) => {
      const p = document.createElement("p");
      p.textContent = i.title;
      div.appendChild(p);
   });
}