
// ESERCIZIO MAIL

const mailList = [ 'pina@live.it', 'stella@live.it', 'gio@live.it', 'stello@live.it'];

const userMail = prompt ('inserisci la tua E-mail');

let message = userMail + ' accesso negato ' ;

for ( let i = 0; i <= mailList.length; i++ ) {

  if ( userMail === mailList[i] ) {
  
    message = userMail + ' accesso consentito ' ;

    console.log(message);
    console.log(i);
    
  };
  
};

document.getElementById('mail-yes').innerHTML = `${message}`;

// ESERCIZIO DADI 

const numeroVincente = [];

let messageNum = ' ';

for (let i = 0; i < 1; i++){
  
  const numeroRandomUser = Math.ceil(Math.random() * 6 );

  console.log(numeroRandomUser);

  document.querySelector('.random-numbers-u').innerHTML =
  `
  ${ ' il giocatore ha estratto ' + numeroRandomUser} 
  `;
  
  const numeroRandomPc = Math.ceil(Math.random() * 6 );

  document.querySelector( '.random-numbers-pc' ).innerHTML = 
  `
  ${ ' il pc ha estratto ' + numeroRandomPc }
  `;

  console.log(numeroRandomPc);

  if ( numeroRandomPc < numeroRandomUser ){

    messageNum = 'vince il giocatore';

  } else if ( numeroRandomPc > numeroRandomUser ) {

    messageNum = 'vince il pc';

  } else {

    messageNum = 'pareggio';

  };
};

console.log(messageNum);

document.getElementById('dadi').innerHTML = `
${messageNum}
`;