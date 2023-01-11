let userAccounts = [
  {
    id: 'user-0',
    name: 'Mohammad Rahadian Ghifari',
    email: 'ghifarimohammadrahadian@gmail.com',
    password: 'qwerty',
    saldo: 0
  },
  {
    id: 'user-1',
    name: 'Linggar Kanugroho',
    email: 'linggar@gmail.com',
    password: '12345',
    saldo: 0
  },
  {
    id: 'user-2',
    name: 'Asbon Situmorang',
    email: 'asbon@gmail.com',
    password: 'zxcvb',
    saldo: 0
  },
  {
    id: 'user-3',
    name: 'Muhammad Firdig Hidayat Alfalakhi',
    email: 'alfa@gmail.com',
    password: 'asdfg',
    saldo: 0
  },
];

function login (currentUser, userAccounts) {
  if (!currentUser.email || !currentUser.password) {
    return 'email atau password kosong';
  }

  const userName = currentUser.email;
  const userPassword = currentUser.password;
  let loginChecker = false;

  for (const dataUserAccounts of userAccounts) {
    const checkName = dataUserAccounts.email;
    const checkPassword = dataUserAccounts.password;

    if (userName === checkName && userPassword === checkPassword) {
      loginChecker = true;
    }
  }

  if (!loginChecker) {
    return 'email tidak terdaftar atau password salah';
  }

  return 'login berhasil';
}

let inputUserLogin = {};

inputUserLogin.email = 'ghifarimohammadrahadian@gmail.com';
inputUserLogin.password = 'qwerty';

console.log(login(inputUserLogin, userAccounts));

function register (inputUserData, userAccounts) {
  const inputName = inputUserData.name;
  const inputEmail = inputUserData.email;
  const inputPassword = inputUserData.password;
  let userExisted = false;

  if (!inputName || !inputEmail || !inputPassword) {
    return 'input invalid';
  }

  for (const accountData of userAccounts) { //check existing email
    const userEmail = accountData.email;

    if (inputEmail === userEmail) {
      userExisted = true;
    }
  }

  if (userExisted) {
    return 'email sudah terdaftar, silahkan daftar menggunakan email lain';
  }

  let accountNumber = 0; //create new ID
  const lastUser = userAccounts[userAccounts.length - 1];
  const lastUserId = lastUser.id;
  const splitId = [];
  let tmp = '';

  for (let i = 0; i <= lastUserId.length; i++) { //split user ID
    const element = lastUserId[i];
    if (element === '-' || element === undefined) {
      splitId.push(tmp);
      tmp = '';
    } else {
      tmp += element;
    }
  }

  accountNumber = Number(splitId[1]) + 1; //splitId = ['user', '<string number>']

  userAccounts.push({
    id: `user-${accountNumber}`,
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    saldo: 0
  });

  return userAccounts;
}

let createNewUser = {};

createNewUser.name = 'Andreas Juan Sanjaya';
createNewUser.email = 'juan@gmail.com';
createNewUser.password = 'hehe';

// console.log(register(createNewUser, userAccounts));

/* Re-login using new user
register(createNewUser, userAccounts);

let inputUserLogin2 = {}

inputUserLogin2.email = 'juan@gmail.com';
inputUserLogin2.password = 'hehe';

console.log(login(inputUserLogin2, userAccounts));
*/

function updateSaldo (currentUser, amount, userAccounts) {
  for (const userData of userAccounts) {
    let userAccount = userData.id;

    if (currentUser === userAccount) {
      userData.saldo += amount;
    }
  }

  return userAccounts;
}

let currentUser = 'user-0';

userAccounts = updateSaldo(currentUser, 1000000, userAccounts);

console.log(userAccounts);