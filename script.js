document.getElementById("loadData").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.come/users") 
    .then(response => response.json)
    .then(data => {
      const userList = document.getElementById("userList");
      data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.names;  
        userList.appendChild(li);
      });
    })
    .catch(error => console.log("Something went wrong!", error));
});