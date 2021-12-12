async function getUsers() {
    let users;
    try {
      const data = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      users = await data.json();
      console.log(users);
    } catch (err) {
      console.log(err);
    }
    return users;
  }
  
  async function displayUser() {
    let users = await getUsers();
    //   console.log(users);
    const userList = document.createElement("div");
    userList.innerHTML = "";
    document.body.append(userList);
    users.forEach((user) => {
       userList.innerHTML += `<div class="user-container">
      <img class="brand image" src="${user.image_link}"/>
      <div>
      <h2 class="brand">${user.brand}</h2>
      <h2 class="name">${user.name}</h2>
      <h2 class="price">${user.price}</h2>
      <h2 class="description">${user.description}</h2>
      <a href= "${user.product_link}">product link</a>
      </div>
      </div>`;
    });
  }
  displayUser();
  
  