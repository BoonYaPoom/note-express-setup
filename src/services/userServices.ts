
async function listUser() {
   const users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
  return users
}


const userServices = {
  listUser,

};

export default userServices;
