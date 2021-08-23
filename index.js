/*const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

<div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
*/



const element = document.getElementById("main")
element.remove()
//const newHeader = document.createElement("h1#victory")
//element.append(newHeader)
const newHeader = document.createElement("h1"); 
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Scooty is the champion";