function addusers() {
    const username = document.getElementById("user").value;
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
  
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        username: username,
        password: userPassword,
        name: {
          firstname: username,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("user", JSON.stringify(json));
        console.log("Foydalanuvchi saqlandi:", json);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }
  
  addusers();