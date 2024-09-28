
const users = [
    {
      name: "Behruz",
      lastName: "Xolmatov",
      name: "Shaxboz",
      lastName: "Yodgorov",
      name: "Dilbar",
      lastName: "Esanova",
    },
  ];
  
  function getUsers() {
    setTimeout(() => {
      let result = "";
      users.forEach((user) => {
        result += `<li>${user.name}, ${user.lastName}</li>`;
      });
      document.body.innerHTML = result;
    }, 1000);
  }
  
  function addUser(user, callback) {
    setTimeout(() => {
      users.push(user);
      callback();
    }, 2000);
  }
  
  addUser({ name: "Eshmat", lastName: "Toshmatov" }, getUsers);