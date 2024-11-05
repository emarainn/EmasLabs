fetch("/snippets/header.html") // Update the path to include the folder
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading the header:", error));


fetch("/snippets/footer.html") // Update the path to include the folder
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading the header:", error));
