const output = document.getElementById("output");

fetch(`https://api.github.com/users`)
  .then((res) => res.json())
  .then((results) => displayUi(results));

function displayUi(user) {
  var itemList = "";
  user.map((eachUser) => {
    itemList += `<div id="container">
    <img id="picture" alt="" src=${eachUser.avatar_url} />
    <b>${eachUser.login}</b>
    </div>`;
  });
  output.innerHTML = itemList;
}
