// I like to write using javascript ES6 convention 😅

const linkContainer = document.getElementById("links");

const createNewLink = (name, url) => {
  var newLink = document.createElement("a");
  var button = document.createElement("button");
  var span = document.createElement("span");

  newLink.href = url;
  span.textContent = name;
  newLink.target = "_blank";
  newLink.classList.add("link-item");

  newLink.appendChild(button);
  button.appendChild(span);
  linkContainer.appendChild(newLink);
  console.log(`Added new link for ${name} pointing to ${url} `); // Remove this if needed
};
