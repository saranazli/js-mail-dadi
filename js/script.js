

// ESERCIZIO MAIL

/*
1 con prompt chiedo la mail dell'utente
2 in un arrey ho una lista di email che possono accedere
3 confronto il ruisultato del prompt con i dati dell'arrey
4 con una condizione (if) accetto le mail incluse nell'arrey e gli    collego un messaggio
5 a suo interno ci sarà la condizione (else) e le mail non accettate le collego ad un altro messaggio
6 stampo l'esito della condizione che si verifica relativa alla ail inserita
*/


const mailList = [ 'pina@live.it', 'stella@live.it', 'gio@live.it', 'stello@live.it'];

const userMail = prompt ('inserisci la tua E-mail');

let message = ' accesso negato ' ;

for ( let i = 0; i <= mailList.length; i++ ) {

  if ( userMail === mailList[i] ) {
  
    message = userMail + ' accesso consentito ' ;

    console.log(message);
    console.log(i);
    
    document.getElementById('mail-yes').innerHTML = `${message}`;
    
  };
  
};

document.getElementById('mail-yes').innerHTML = `${message}`;

// ESERCIZIO DADI 

/*

1 creo un ciclo che si ripete due volte
2 al suo interno creo un estrattore di numero random da 1 a 6 per una variabile che sarà il giocatore
3 stessa cosa per una variabile che sarà il computer
4 creo un istruzione condizionale in cui confronto i numeri dati
5 il valore più alto sarà la mia variabile vincitrice

/*

/*Math.ceil(Math.random() * 100 )*/


const numeroVincente = [];

let messageNum = ' ';

for (let i = 0; i < 1; i++){
  
  const numeroRandomUser = Math.ceil(Math.random() * 100 );

  console.log(numeroRandomUser);

  const numeroRandomPc = Math.ceil(Math.random() * 100 );

  console.log(numeroRandomPc);
  
  document.querySelector('.random-numbers').innerHTML =
  `
  ${ ' il giocatore ha estratto ' + numeroRandomUser + ' il pc ha estratto ' + numeroRandomPc }
  `;

  if ( numeroRandomPc < numeroRandomUser){

    messageNum= 'vince il giocatore';

  } else {

    messageNum = 'vince il pc';

  };
};

console.log(messageNum);

document.getElementById('dadi').innerHTML = `
${messageNum}
`;
