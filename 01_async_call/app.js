const getUsers = () => {
  const users = [
    { firstname: 'Max', lastname: 'Mayr' },
    { firstname: 'John', lastname: 'Dooh' }
  ]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
}


const buttonClicked2 = () => {

}
