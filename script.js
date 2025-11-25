const userContainer = document.getElementById("userContainer");
const rldBtn = document.getElementById("rldBtn");

async function fetchUsers() {
  // Maine nayi cheez seekhi, jo mai pichli files mei ` ko ' se replace kar rahi thi na, thinking the internet was wrong somehow (silly, yes I know); actually ` ko backtick kehte hain and it is used to create a template literal in JS. ${...} ke andar jo cheeze rehti haina, woh evaluate hoti hain, aur andar ka value accordingly replace ho jaata hain, unlike with ', jahan jo value do, sui chu gacxhan print.
  userContainer.innerHTML = `<p>Loading Your Soulmeow (get it? please, tell me you get it TT)</p>`;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response wasn't feeling very meow meow!");
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = "";
  // show up to 15 cards, but cycle through users if fewer
  for (let i = 1; i <= 15; i++) {
    const card = document.createElement("div");
    card.className = "userCard";

    const imgSrc = `kittyCats/kittyCat${i}.jpg`;
    const user = users[(i - 1) % users.length]; // cycle through users

    card.innerHTML = `
<img src="${imgSrc}" alt="Kitten friend" class="kitten-img" style="height:275px; width:400px;">
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
    userContainer.appendChild(card);
  }
}


rldBtn.addEventListener("click", fetchUsers);

fetchUsers();
