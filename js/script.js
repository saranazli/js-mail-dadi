

/* 
1 Mail
  Chiedi all’utente la sua email,
  controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato sull’esito del controllo.

2  Gioco dei dadi
  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// esercizio Mail

/*
1 con prompt chiedo la mail dell'utente
2 in un arrey ho una lista di email che possono accedere
3 confronto il ruisultato del prompt con i dati dell'arrey
4 con una condizione (if) accetto le mail incluse nell'arrey e gli    collego un messaggio
5 a suo interno ci sarà la condizione (else) e le mail non accettate le collego ad un altro messaggio
6 stampo l'esito della condizione che si verifica relativa alla ail inserita
*/

const mailList = ['pina@live.it', 'stella@live.it', 'gio@live.it', 'stello@live.it'];

const userMail = prompt ('inserisci la tua E-mail');


for (let i = 0; i > mailList.length; i++){

  const mailConfront = mailList.at();

  if (mailConfront = userMail)[
    console.log(userMail)
  ];
};

console.log(mailList);

















// esercizio Dadi

/*

1 creo un ciclo che si ripete due volte
2 al suo interno creo un estrattore di numero random da 1 a 6 per una variabile che sarà il giocatore
3 stessa cosa per una variabile che sarà il computer
4 creo un istruzione condizionale in cui confronto i numeri dati
5 il valore più alto sarà la mia variabile vincitrice

*/