let userDB = [
  {
    id: 'user-0',
    name: 'Mohammad Rahadian Ghifari',
    email: 'ghifarimohammadrahadian@gmail.com',
    password: 'qwerty',
    saldo: 0,
    cart: [
      {
        id: 'item-3',
        name: 'Promag Cair',
        price: 15000,
        image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062688211618504795/apotek_online_k24klik_20201127030453359225_PROMAG-SUS.png',
        description: 'Promag cair untuk mengurangi gejala yang berhubungan dengan kelebihan asam lambung, gastritis, tukak lambung, dan tukak usus 12 jari.',
        amount: 1
      },
      {
       id: 'item-4',
        name: 'Miconazole Cream 2%',
        price: 6000,
        image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062690248477380679/0116b0043.png',
        description: 'salep krim anti jamur',
        amount: 1
      } 
    ]
  },
  {
    id: 'user-1',
    name: 'Linggar Kanugroho',
    email: 'linggar@gmail.com',
    password: '12345',
    saldo: 0,
    cart: []
  },
  {
    id: 'user-2',
    name: 'Asbon Situmorang',
    email: 'asbon@gmail.com',
    password: 'zxcvb',
    saldo: 0,
    cart: []
  },
  {
    id: 'user-3',
    name: 'Muhammad Firdig Hidayat Alfalakhi',
    email: 'alfa@gmail.com',
    password: 'asdfg',
    saldo: 0,
    cart: []
  },
];

function login (currentUser, userDB) {
  if (!currentUser.email || !currentUser.password) {
    return 'email atau password kosong';
  }

  const userName = currentUser.email;
  const userPassword = currentUser.password;
  let loginChecker = false;

  for (const userAccount of userDB) {
    const checkName = userAccount.email;
    const checkPassword = userAccount.password;

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

// console.log(login(inputUserLogin, userDB));

function register (inputUserData, userDB) {
  const inputName = inputUserData.name;
  const inputEmail = inputUserData.email;
  const inputPassword = inputUserData.password;
  let userExisted = false;

  if (!inputName || !inputEmail || !inputPassword) {
    return 'input invalid';
  }

  for (const accountData of userDB) { //check existing email
    const userEmail = accountData.email;

    if (inputEmail === userEmail) {
      userExisted = true;
    }
  }

  if (userExisted) {
    return 'email sudah terdaftar, silahkan daftar menggunakan email lain';
  }

  let accountNumber = 0; //create new ID
  const lastUser = userDB[userDB.length - 1];
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

  userDB.push({
    id: `user-${accountNumber}`,
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    saldo: 0,
    cart: []
  });

  return userDB;
}

let createNewUser = {};

createNewUser.name = 'Andreas Juan Sanjaya';
createNewUser.email = 'juan@gmail.com';
createNewUser.password = 'hehe';

// console.log(register(createNewUser, userDB));

/* Re-login using new user
register(createNewUser, userDB);

let inputUserLogin2 = {}

inputUserLogin2.email = 'juan@gmail.com';
inputUserLogin2.password = 'hehe';

console.log(login(inputUserLogin2, userDB));
*/

function updateSaldo (currentUser, amount, userDB) { //Done
  for (const userData of userDB) {
    let userAccount = userData.id;

    if (currentUser === userAccount) {
      userData.saldo += amount;
    }
  }

  return userDB;
}

let currentUser = 'user-0';

userDB = updateSaldo(currentUser, 1000000, userDB);

// console.log(userDB);

/**
 * 
 * 
 * ================ Shop Functions =================
 * 
 * 
 * 
*/

const productList = [
  {
    id: 'item-0',
    name: 'SANMOL Paracetamol',
    price: 2000,
    image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062685104012537916/apotek_online_k24klik_20200810090629359225_SANMOL-4-TAB.png',
    description: 'Sanmol Tablet 500 mg adalah obat yang memiliki kandungan bahan aktif Paracetamol. Paracetamol bekerja dengan cara mengurangi kadar prostaglandin di dalam tubuh, sehingga tanda peradangan seperti demam dan nyeri akan berkurang. Obat ini digunakan untuk meringankan rasa sakit seperti sakit kepala, sakit gigi serta menurunkan demam.'
  },
  {
    id: 'item-1',
    name: 'Sensi Masker Earloop',
    price: 3000,
    image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062686773836259408/apotek_online_k24klik_20190812112550209249_Sensi-50.png',
    description: 'Sensi Masker Earloop merupakan masker sekali pakai dengan 3 lapisan filter untuk menahan bakteri dengan material lembut dan nyaman dipakai, berfungsi untuk melindungi pernafasan dari berbagai macam radikal bebas udara, serta ringan dan mudah dipakai. Desain pas sesuai untuk melindungi hidung dan mulut dengan sempurna. Terdapat kawat penjepit hidung untuk menahan posisi masker dan pengait telinga yang mudah digunakan dan nyaman.'
  },
  {
    id: 'item-2',
    name: 'Promag Tablet',
    price: 10000,
    image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062687637204373625/apotek_online_k24klik_2021101902504923085_Promag-Tablet-10s-1.png',
    description: 'PROMAG CHEW TAB 10S STRIP 3S merupakan obat kombinasi antara antasida dengan simetikon yang digunakan untuk terapi dyspepsia (maag) dengan mengurangi gejala maag seperti kembung, mual, dan bersendawa. Promag mengandung antasida Magnesium (Mg(OH)) dan Hydrotalcite dengan Simetikon yang dapat menetralkan asam lambung dan mengurangi gas yang berlebihan di saluran pencernaan (antiflatulen).'
  },
  {
    id: 'item-3',
    name: 'Promag Cair',
    price: 15000,
    image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062688211618504795/apotek_online_k24klik_20201127030453359225_PROMAG-SUS.png',
    description: 'Promag cair untuk mengurangi gejala yang berhubungan dengan kelebihan asam lambung, gastritis, tukak lambung, dan tukak usus 12 jari.'
  },
  {
   id: 'item-4',
    name: 'Miconazole Cream 2%',
    price: 6000,
    image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062690248477380679/0116b0043.png',
    description: 'salep krim anti jamur'
  } 
];

function addToCart (currentUser, product, userDB) { //Done
  for (const userAccount of userDB) {
    const accountId = userAccount.id;
    const userCart = userAccount.cart;
    
    if (currentUser === accountId) {
      //Check if user alr have the product. if yes, add amount only, if no add the product to cart
      if (userCart.length > 0) {
        for (const cartItem of userCart) {
          const cartItemId = cartItem.id;
          const productId = product.id;
          
          if (productId === cartItemId) {
            cartItem.amount++;
          }
        }
      } else {
        product.amount = 1;
        userCart.push(product);
      }
    }
  }
}

let produkPilihan = {
  id: 'item-4',
  name: 'Miconazole Cream 2%',
  price: 6000,
  image: 'https://cdn.discordapp.com/attachments/1062684871094456380/1062690248477380679/0116b0043.png',
  description: 'salep krim anti jamur'
};

// currentUser = 'user-1';
addToCart(currentUser, produkPilihan, userDB);
// console.log(userDB);

function removeFromCart (currentUser, product, userDB) {
  for (const userAccount of userDB) {
    const accountId = userAccount.id;
    const userCart = userAccount.cart;
    
    if (currentUser === accountId) {
      for (let i = 0; i < userCart.length; i++) {
        const cartItem = userCart[i];
        const cartItemId = cartItem.id;
        const productId = product.id;
        
        if (productId === cartItemId) {
          userCart.splice(i, 1)
        }
      }
    }
  }
}

removeFromCart(currentUser, produkPilihan, userDB);

// console.log(userDB[0]);

// function checkout () {
  
// }

// console.log(checkout(currentUser, cart, userDB));


// start of searh fiture

function getUnique(arrayObat) {
  let result = [];
  for (let i = 0; i < arrayObat.length; i++) {
      let flag = false;
      for (let j = 0; j < result.length; j++) {
          if (arrayObat[i] === result[j]) {
              flag = true;
              break;
          }
      }
      if (flag) {
          continue;
      } else {
          result.push(arrayObat[i])
      }
  }
  return result;
}

function nameToArray (input){
  let arrInput = [];
  let tempString = '';
  for (let i = 0; i <= input.length; i++){
    if (input[i] === ' ' || !input[i]){
      arrInput.push(tempString.toLowerCase());
      tempString = '';
    } else {
      tempString += input[i];
    }
  }
  return arrInput;
}

function cutWord (array, number){
  let tampung = array;
  let finalResult = [];
  for (let i = 0; i < tampung.length; i++){
      let tempString = '';
      for (let j = 0; j < tampung[i].length; j++){
          if (j === number){
              finalResult.push(tempString);
              tempString = '';
          } else {
              tempString += tampung[i][j];
          }
      }
  }
  return finalResult;
}

function searchName(input, listOfProduct) {
  let result = [];
  let inputList = nameToArray(input);
  for (let i = 0; i < inputList.length; i++) {
      let number = inputList[i].length
      for (let j = 0; j < listOfProduct.length; j++) {
          let arrayNamaProduct = nameToArray(listOfProduct[j].name);
          let arrayCut = cutWord(arrayNamaProduct, number);
          for (let k = 0; k < arrayCut.length; k++) {
              if (inputList[i] === arrayCut[k]) {
                  result.push(listOfProduct[j])
              }
          }
      }
  }
  result = getUnique(result)
  return result;
}

console.log (searchName('ear', productList))
// console.log (nameToArray('Miconazole cream 2%'))

//end of search fiture


//start of filter fiture

function filterHarga (input, productList){
  let result = productList
  if (input === 'Terendah'){
    for (let i = 0; i < result.length - 1; i++){
      if (result[i]['price'] > result[i+1]['price']){
        let biggerNumber = result[i];
        let lowerNumber = result[i+1];
        result[i] = lowerNumber;
        result[i+1] = biggerNumber;
        i = -1
      }
    }
  } else if (input === 'Tertinggi') {
    for (let i = 0; i < result.length - 1; i++){
      if (result[i]['price'] < result[i+1]['price']){
        let biggerNumber = result[i+1];
        let lowerNumber = result[i];
        result[i] = biggerNumber;
        result[i+1] = lowerNumber;
        i = -1
      }
    }
  }
  return result
}

// console.log (filterHarga('Tertinggi', productList))

//end of filter fiture


