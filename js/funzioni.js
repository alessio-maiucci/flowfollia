//Script in cui sono contenute tutte le funzioni del sito

//#######################################################################

/*  la funzione registrazione() serve per la registrazione dell'utente
    prende i dati inseriti negli appositi campi della modal ed effettua
    i controlli necessari, come quelli sulla password, nome, cognome, email, etc
    se tutti i controlli sono andati a buon fine allora viene effettuata
    una chiamta AJAX e registra l'utente nel database */

function registrazione() {
    // Ottieni i valori dai campi del form
    var cognome = document.getElementById('id_cognome_registrazione').value;
    var nome = document.getElementById('id_nome_registrazione').value;
    var username = document.getElementById('id_username_registrazione').value;
    var email = document.getElementById('id_email_registrazione').value;
    var password = document.getElementById('id_password_registrazione').value;
    var confermaPassword = document.getElementById('id_conferma_password_registrazione').value;
  
    // Controlla che tutti i campi siano compilati
    if (!cognome || !nome || !username || !email || !password || !confermaPassword) {
      //alert('Compila tutti i campi');
      myalert('ATTENZIONE','Compila tutti i campi.');
      return false;
    }
  
    // Controlla che l'email contenga '@'
    if (email.indexOf('@') === -1) {
      //alert('Email deve contenere il carattere @');
      myalert('ATTENZIONE','Email deve contenere il carattere @.');
      return false;
    }
  
    // Definisci il pattern per la password
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[*\/\-+!%&$]).{4,}$/;
  
    // Controlla che la password rispetti i criteri richiesti
    if (!passwordPattern.test(password)) {
      //alert('La password deve contenere almeno 4 caratteri, di cui almeno una lettera maiuscola, una minuscola, un numero e un simbolo (* / - + ! % & $).');
      myalert('ATTENZIONE','La password deve contenere almeno 4 caratteri, di cui almeno una lettera maiuscola, una minuscola, un numero e un simbolo (* / - + ! % & $).');
      return false;
    }
  
    // Controlla che le password coincidano
    if (password !== confermaPassword) {
      //alert('Le password non coincidono');
      myalert('ATTENZIONE','Le password non coincidono.');
      return false;
    }
  
    // Se tutti i controlli sono passati, invia i dati con AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './php/reg.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var result = this.responseText;
        //alert(result);
        var obj = JSON.parse(result);
        
        if (obj['regStatus'] != 'success') {
          chiudi_modal_registrati();
          myalert('ATTENZIONE','La registrazione non è andata a buon fine. Riprovare più tardi.');
         // window.location.href = 'FlowFollia.html';
          
        }
        else {
          //se la registrazione è avvenuta con successo
          chiudi_modal_registrati();
          myalert('ATTENZIONE','Registrazione avvenuta con successo.');
          //window.location.href = 'FlowFollia.html';
        }

      }

    };

    xhr.send('cognome=' + encodeURIComponent(cognome) +
             '&nome=' + encodeURIComponent(nome) +
             '&username=' + encodeURIComponent(username) +
             '&email=' + encodeURIComponent(email) +
             '&password=' + encodeURIComponent(password));
}

/*  la funzione login() si occupa del login dell'utente e prende i dati
    che si trovano negli appositi campi della modal ed effettua una chiamata
    AJAX per controllare se i dati sono nel database. Se il login va a buon fine
    vengono visualizzati una scritta di benvenuto col nome utente inserito
    e il pulsante di logout  */

function login() {
    var username = document.getElementById('id_username_login').value;
    var password = document.getElementById('id_password_login').value;
  
    // Utilizza AJAX per inviare i dati al server e controllare l'accesso
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './php/login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var result = this.responseText;
        var obj = JSON.parse(result);
        
        if (obj['loginStatus'] == 'success') {

          // Nascondi i pulsanti LOGIN e REGISTRATI
          document.getElementById('id_span_login').style.display = 'none';
          document.getElementById('id_span_registrati').style.display = 'none';
  
          // Visualizza la scritta Benvenuto!
          document.getElementById('id_span_loggato').style.display = 'block';
          
          $("#id_span_username").text(obj['username']);
  
          // Crea il pulsante LOGOUT
          var logoutBtn = document.createElement('button');
          logoutBtn.innerHTML = 'Logout';
          logoutBtn.onclick = logout;
          logoutBtn.className = 'btn btn-primary mx-1';
          logoutBtn.style.backgroundColor = '#4f3a23';
          logoutBtn.style.border = '#4f3a23';
          document.getElementsByClassName('blocco-header bottoni-login')[0].appendChild(logoutBtn);
          chiudi_modal_login();

        } else {

          chiudi_modal_login();
          myalert('ATTENZIONE','Username o password errati.');
          //alert('Username o password errati.');

        }
        
      }
    };

    xhr.send('username=' + username + '&password=' + password);
  
    // Impedisci il submit del form
    return false;
}

/*  la funzione logout() si abilita solo dopo che è stato effettuato il login in 
    quanto compare il tasto 'logout'. Serve per il logout dell'utente e chiude la
    sessione col server. Inoltre se al momento del logut si avevano degli
    articoli nel carrello questi vengono eliminati automaticamente e il
    carrello risulta vuoto  */

function logout() {
    // Distruggi la sessione di login sul server
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './php/logout.php', true);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Nascondi la scritta Benvenuto!
        document.getElementById('id_span_loggato').style.display = 'none';
  
        // Rimuovi il pulsante LOGOUT
        var logoutBtn = document.querySelector('.blocco-header bottoni-login button:last-child');
        logoutBtn.parentNode.removeChild(logoutBtn);
  
        // Mostra nuovamente i pulsanti LOGIN e REGISTRATI
        document.getElementById('id_login').style.display = 'inline-block';
        document.getElementById('id_registrazione').style.display = 'inline-block';
      }
    };

    xhr.send();
  
    // Ritorna alla pagina corrente
    window.location.href = window.location.href;
}

/*  la funzione checkLogin() serve per controllare in ogni pagina se l'utente 
    ha effettuato la login e serve a mantenere attivi la scritta di benvenuto
    con lo username e il pulsante di logout. Questa funzione crea il pulsante di logout
    e nasconde i pulsanti 'login' e 'registrati'. Effettua una chiamata AJAX  */

function checkLogin(){
    // Utilizza AJAX per inviare i dati al server e controllare l'accesso
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './php/checklogin.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var result = this.responseText;
        var obj = JSON.parse(result);
        //alert(result);
        if (obj['loginStatus'] == 'success') {

          // Nascondi i pulsanti LOGIN e REGISTRATI
          document.getElementById('id_span_login').style.display = 'none';
          document.getElementById('id_span_registrati').style.display = 'none';
  
          // Visualizza la scritta Benvenuto!
          document.getElementById('id_span_loggato').style.display = 'block';          
          $("#id_span_username").text(obj['username']);

            // Crea il pulsante LOGOUT
            var logoutBtn = document.createElement('button');
            logoutBtn.innerHTML = 'Logout';
            logoutBtn.onclick = logout;
            logoutBtn.className = 'btn btn-primary mx-1';
            logoutBtn.style.backgroundColor = '#4f3a23';
            logoutBtn.style.border = '#4f3a23';
            document.getElementsByClassName('blocco-header bottoni-login')[0].appendChild(logoutBtn);

        } else {
          // Visualizza i pulsanti LOGIN e REGISTRATI
          document.getElementById('id_span_login').style.display = 'block';
          document.getElementById('id_span_registrati').style.display = 'block';
  
          // Visualizza la scritta Benvenuto!
          document.getElementById('id_span_loggato').style.display = 'none';          
          $("#id_span_username").text(obj['username']);
        }    
      }
    };

    xhr.send('');
  
    // Impedisci il submit del form
    return false;
}

/*  la funzione pagamento() permette all'utente di effettuare il pagamento
    degli articoli che sono nel carrello. Prende tutti i dati negli appositi
    campi, quali indirizzo, nome, carta, cvv, etc ed effettua dei controlli.
    Se i controlli vanno a buon fine permette l'apertura di una modal
    di avvenuto pagamento  */

function pagamento() {
  var indirizzo = document.getElementById('indirizzo').value;
  var nome = document.getElementById('nome').value;
  var carta = document.getElementById('carta').value;
  var scadenza = document.getElementById('scadenza').value;
  var cvv = document.getElementById('cvv').value;
  var oggi = new Date();
  var meseAnno = scadenza.split('/');

  // Controllo che il campo "Indirizzo Spedizione:" contenga solo lettere, spazi e numeri
  if (!/[a-zA-Z]/.test(indirizzo) || !/\d/.test(indirizzo) || !/\s/.test(indirizzo)) {
    alert('L\'indirizzo di spedizione deve contenere almeno una lettera, uno spazio e un numero.');
    return false;
  }

  // Controllo che il campo "Titolare Carta:" contenga solo lettere o spazi vuoti
  if (!/^[a-zA-Z\s]+$/.test(nome)) {
    alert('Il campo "Titolare Carta:" deve contenere solo lettere e spazi.');
    return false;
  }

  // Controllo che il campo "Numero Carta:" contenga 16 numeri nel formato NNNN NNNN NNNN NNNN
  if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(carta)) {
    alert('Il campo "Numero Carta:" deve contenere 16 numeri nel formato NNNN NNNN NNNN NNNN.');
    return false;
  }

  // Controllo che il campo "Data Scadenza:" contenga una data nel formato mm/aaaa
  if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(scadenza)) {
    alert('Il campo "Data Scadenza:" deve contenere una data nel formato mm/aaaa.');
    return false;
  }

  // Controllo che la data di scadenza sia futura
  if (oggi.getFullYear() > parseInt(meseAnno[1]) || (oggi.getFullYear() === parseInt(meseAnno[1]) && oggi.getMonth() + 1 > parseInt(meseAnno[0]))) {
    alert('La data di scadenza deve essere futura.');
    return false;
  }

  // Controllo che il campo "CVV:" contenga un numero di 3 cifre
  if (!/^\d{3}$/.test(cvv)) {
    alert('Il campo "CVV:" deve contenere un numero di 3 cifre.');
    return false;
  }

  // Se tutti i controlli sono passati, mostra la finestra modale
  mostraFinestraModale();
  return false; // Per evitare il submit del form
}

/*  la funzione mostraFinestraModale() si attiva solo dopo
    che il pagamento è andato a buon fine. Si occupa di cancellare
    tutti i campi del pagamento e crea una modal che informa
    l'utente che il pagamento è andato a buon fine. Il carrello
    viene svuotato  */

function mostraFinestraModale() {
  // Innanzitutto cancellare i dati inseriti nel form di pagamento
  document.getElementById('indirizzo').value='';
  document.getElementById('nome').value='';
  document.getElementById('carta').value='';
  document.getElementById('scadenza').value='';
  document.getElementById('cvv').value='';

  // Crea un elemento div per la modale
  var modale = document.createElement('div');
  modale.className = 'modal fade';
  modale.id = 'miaModale';
  modale.tabIndex = -1;
  modale.setAttribute('role', 'dialog');
  modale.setAttribute('aria-labelledby', 'titoloModale');
  modale.setAttribute('aria-hidden', 'true');

  // Crea il contenuto della modale
  var modaleDialog = document.createElement('div');
  modaleDialog.className = 'modal-dialog';
  modaleDialog.setAttribute('role', 'document');

  var modaleContent = document.createElement('div');
  modaleContent.className = 'modal-content';

  var modaleHeader = document.createElement('div');
  modaleHeader.className = 'modal-header text-center';
  var titoloModale = document.createElement('h4');
  titoloModale.className = 'modal-title w-100 text-success';
  titoloModale.id = 'titoloModale';
  titoloModale.textContent = 'Pagamento effettuato';
  var bottoneChiudi = document.createElement('button');
  bottoneChiudi.className = 'close';
  bottoneChiudi.setAttribute('type', 'button');
  bottoneChiudi.setAttribute('data-dismiss', 'modal');
  bottoneChiudi.setAttribute('aria-label', 'Chiudi');
  var span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '×';
  bottoneChiudi.appendChild(span);

  modaleHeader.appendChild(titoloModale);
  modaleHeader.appendChild(bottoneChiudi);

  var modaleBody = document.createElement('div');
  modaleBody.className = 'modal-body text-center';
  modaleBody.textContent = 'Se non lo vedi nella lista degli incassi potrebbe essere ancora in fase di elaborazione. Prima di ritentare, eventualmente accertarsi con la propria banca che il pagamento non sia già stato incassato.';

  var modaleFooter = document.createElement('div');
  modaleFooter.className = 'modal-footer justify-content-center';
  var bottoneSalva = document.createElement('button');
  bottoneSalva.className = 'btn btn-success';
  bottoneSalva.setAttribute('type', 'button');
  bottoneSalva.textContent = 'OK';
  // Aggiungi un gestore di eventi per chiudere la modale
  bottoneSalva.onclick = function() {
      $('#miaModale').modal('hide');
      var objCarrelloNew=[];
      objCarrello=objCarrelloNew;
      jsonObjStr=JSON.stringify(objCarrello);
      aggiungicarrello(jsonObjStr,false);
      window.location.href = './FlowFollia.html';
  };

  modaleFooter.appendChild(bottoneSalva);

  // Assembla la modale
  modaleContent.appendChild(modaleHeader);
  modaleContent.appendChild(modaleBody);
  modaleContent.appendChild(modaleFooter);
  modaleDialog.appendChild(modaleContent);
  modale.appendChild(modaleDialog);
  document.body.appendChild(modale);

  // Mostra la modale
  $('#miaModale').modal('show');
}

/*  la funzione riepilogoOrdine() effettua una chiamata AJAX per verificare lo stato
    del login, mostra un pannello in cui si vede il totale degli articoli nel 
    carrello e un tasto che permette all'utente di procedere con l'ordine  */

function riepilogoOrdine() {
  // Chiamata AJAX per verificare lo stato del login
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Assumiamo che la risposta sia un oggetto JSON con una proprietà 'loginStatus'
      var response = JSON.parse(this.responseText);

      // Controlla lo stato del login
      if (response.loginStatus === 'success') {
        // Nasconde la sezione Riepilogo dell'Ordine
        document.getElementById('ordine_riepilogato').style.display = 'none';
        // Mostra la sezione Modulo di Pagamento
        document.getElementById('modulo-pagamento').style.display = 'block';
      } else {
        // Se l'utente non ha effettuato il login, mostra la finestra modale di login
        // creaModaleLogin();
        $('#id_modal').modal('show');
      }
    }
  };

  xhr.open('GET', './php/checklogin.php', true);
  xhr.send();
}

/*  la funzione apri_finestra(param) prende in ingresso una stringa
    che rappresenta un id di un articolo da mostrare. Gli id
    possono riguardare le fioriere o i bouquet. Si occupa di nascondere
    lo slider di scelta delle fioriere o delle carte dei bouquet e 
    di mostrare il vaso o la carta selezionata con i rispettivi css */

function apri_finestra(param) {
  $('#id_slider_fioriere').addClass('hideme');
  $('#id_slider_bouquet').addClass('hideme');
  $('#id_mostra_vaso_img_4').addClass('hideme');
  $('#id_mostra_vaso_img_6').addClass('hideme');
  $('#id_mostra_vaso_img_9').addClass('hideme');
  $('#id_mostra_vaso_img_tondo_piccolo').addClass('hideme');
  $('#id_mostra_vaso_img_tondo_grande').addClass('hideme');
  $('#id_mostra_bouquet_rosa').addClass('hideme');
  $('#id_mostra_bouquet_viola').addClass('hideme');
  $('#id_mostra_bouquet_blu').addClass('hideme');
  $('#id_mostra_bouquet_verde').addClass('hideme');
  $('#id_mostra_bouquet_giallo').addClass('hideme');
  
  if(param==='id_vaso_quadrato') {
      fioriera_sel_corrente=param;
      fiorieraimgname='fioriera4';
      $('#id_mostra_vaso_img_4').addClass('fioriera_4');
      $('#id_mostra_vaso_img_4').removeClass('hideme');
      $('#id_scelta_fioriera').removeClass('hideme');
      $('#container_indietro').addClass('hideme');
  }

  if(param==='id_vaso_quadrato_grande') {        
    fioriera_sel_corrente=param;
    fiorieraimgname='fioriera9';
      $('#id_mostra_vaso_img_9').addClass('fioriera_9');
      $('#id_mostra_vaso_img_9').removeClass('hideme');
      $('#id_scelta_fioriera').removeClass('hideme');
      $('#container_indietro').addClass('hideme');
  }

  if(param==='id_vaso_rettangolare') {        
    fioriera_sel_corrente=param;
    fiorieraimgname='fioriera6';
      $('#id_mostra_vaso_img_6').addClass('fioriera_6');
      $('#id_mostra_vaso_img_6').removeClass('hideme');
      $('#id_scelta_fioriera').removeClass('hideme');
      $('#container_indietro').addClass('hideme');
  }

  if(param==='id_vaso_tondo_piccolo') {
    fiorieraimgname='fioriera1';
    fioriera_sel_corrente=param;
      //immagine.src="./immagini/vaso_tondo_piccolo_alto.png";
      $('#id_mostra_vaso_img_1').addClass('fioriera_1');
      $('#id_mostra_vaso_img_1').removeClass('hideme');
      $('#id_scelta_fioriera').removeClass('hideme');
      $('#container_indietro').addClass('hideme');
  }

  if(param==='id_vaso_tondo_grande') {
    fioriera_sel_corrente=param;
    fiorieraimgname='fioriera5';
    $('#id_mostra_vaso_img_5').addClass('fioriera_5');
    $('#id_mostra_vaso_img_5').removeClass('hideme');
    $('#id_scelta_fioriera').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

  if(param==='id_bouquet_rosa') {
    bouquet_sel_corrente=param;
    fiorieraimgname='bouquet_rosa';
    $('#id_mostra_bouquet_rosa').addClass('bouquet_rosa');
    $('#id_mostra_bouquet_rosa').removeClass('hideme');
    $('#id_scelta_bouquet').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

  if(param==='id_bouquet_viola') {
    bouquet_sel_corrente=param;
    fiorieraimgname='bouquet_viola';
    $('#id_mostra_bouquet_viola').addClass('bouquet_viola');
    $('#id_mostra_bouquet_viola').removeClass('hideme');
    $('#id_scelta_bouquet').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

  if(param==='id_bouquet_blu') {
    bouquet_sel_corrente=param;
    fiorieraimgname='bouquet_blu';
    $('#id_mostra_bouquet_blu').addClass('bouquet_blu');
    $('#id_mostra_bouquet_blu').removeClass('hideme');
    $('#id_scelta_bouquet').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

  if(param==='id_bouquet_verde') {
    bouquet_sel_corrente=param;
    fiorieraimgname='bouquet_verde';
    $('#id_mostra_bouquet_verde').addClass('bouquet_verde');
    $('#id_mostra_bouquet_verde').removeClass('hideme');
    $('#id_scelta_bouquet').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

  if(param==='id_bouquet_giallo') {
    bouquet_sel_corrente=param;
    fiorieraimgname='bouquet_giallo';
    $('#id_mostra_bouquet_giallo').addClass('bouquet_giallo');
    $('#id_mostra_bouquet_giallo').removeClass('hideme');
    $('#id_scelta_bouquet').removeClass('hideme');
    $('#container_indietro').addClass('hideme');
  }

}

/*  la funzione apri_modal_login() si occupa di aprire la modal che permette
    l'inserimento dei dati per il login  */

function apri_modal_login() {
    $("#id_username_login").val("");
    $("#id_password_login").val("");
    $('#id_modal_login').modal("show");
}

/*  la funzione apri_modal_login_logreg() gestisce l'apertura
    di una modal che permette sia il login che la registrazione al momento
    del pagamento nel carrello  */

function apri_modal_login_logreg() {
  $("#id_username_login").val("");
  $("#id_password_login").val("");
  $('#id_modal').modal("hide");
  $('#id_modal_login').modal("show");
}

/*  la funzione chiudi_modal_login() chiude la modal del login  */

function chiudi_modal_login() {
    $('#id_modal_login').modal("hide");
}

/*  la funzione apri_modal_registrati() apre la modal che permette
    la registrazione dell'utente, ma prima provvede a svuotare tutti i campi  */

function apri_modal_registrati() {
    $("#id_nome_registrazione").val("");
    $("#id_cognome_registrazione").val("");
    $("#id_username_registrazione").val("");
    $("#id_email_registrazione").val("");
    $("#id_password_registrazione").val("");
    $("#id_conferma_password_registrazione").val("");
    $('#id_modal_registrazione').modal("show");
}

/*  la funzione chiudi_modal_registrati() chiude la modal della registrazione  */

function chiudi_modal_registrati() {
    $('#id_modal_registrazione').modal("hide");
}

/*  la funzione apri_modal_info(param,selezione) prende in ingresso una stringa (param)
    e un numero (selezione) che rappresentano un id e il fiore selezionato sullo slider.
    Permette di aprire la modal di informazione della pianta selezionata */

function apri_modal_info(param,selezione) {
    flowfollia_sel_corrente=selezione;
    fillInfo(param);
    $('#id_modal_info').modal("show");
}

/*  la funzione chiudi_modal_info() chiude la modal di informazione della pianta e 
    chiama le funzioni di reset dei radio button dei colori e del campo della quantità */

function chiudi_modal_info() {
    $('#id_modal_info').modal("hide");
    resetRadio();
    resetCampo();
}

/*  la funzione myalert(titolo,messaggio) prende come parametri un titolo da dare
    alla modal di alert e un messaggio che va a costituire il corpo dell'alert  */

function myalert(titolo,messaggio) {
    $('#id_modal_alert_msg').text(messaggio);
    $('#id_modal_alert_titolo').text(titolo);
    $('#id_modal_alert').modal("show");
}

/*  la funzione resetRadio() si occupa si resettare i radio button dei colori
    che si trovano nelle modal di info delle piante  */

function resetRadio() {
    var radios = document.getElementsByName('colore');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}

/*  la funzione resetCampo() si occupa si resettare il
    campo quantità che si trova nelle modal di info delle piante  */

function resetCampo() {
    document.getElementById('id_box_quantita').value = '';
}

/*  la funzione elimina_elementi_dal_carrello(event) prende in ingresso come
    parametro un evento, ad esempio il click del pulsante a cui è collegata e si
    occupa dell'eliminazione degli articoli del carrello, sia dall oggetto
    objCarrello che visivamente lato client eliminando i div che li contengono.
    Cerca la riga del carrello ed effettua uno split sull'id per trovare l'indice che
    serve alla rimozione dell'articolo da objCarrello. Una volta trovato l'elemento rimuove
    il div che lo contiene e poi procede alla costruzione di un nuovo carrello che contiene
    tutti gli elementi tranne quello che ha l'indice uguale a quello trovato. Si calcola i nuovi totali
    da mostrare e manda in sessione il nuovo carrello creato. Se il nuovo carrello è
    vuoto mostra la schermata di carrello vuoto  */

function elimina_elementi_dal_carrello(event) {
  // Trova il div più vicino con la classe riga_carrello e lo rimuove
  var elemento = event.target.closest('.riga_carrello');
  //recupero l'indice del carrello dall'id del div che ho modificato nella creazione dei div dove trovi il css riga_carrello
  var idx=$(elemento).attr('id').split('_')[1];

  if (elemento) {
    elemento.remove();
  }

  // con  idx che indica la riga del carrello da eliminare in memoria 
  // ricostruisco il carrello in memoria saltando l'oggetto che ha l'indice trovato
  var objCarrelloNew=[];
  for(var i=0; i<objCarrello.length; i++) {
    if(i!=idx){
      objCarrelloNew.push(objCarrello[i]);
    }
  }

  objCarrello=objCarrelloNew;
  // A QUESTO PUNTO SI AGGIORNA LA SESSIONE CON IL CARRELLO IN MEMORIA, COME QUANDO SI AGGIUNGE UN ELEMENTO AL CARRELLO
  jsonObjStr=JSON.stringify(objCarrello);
  aggiungicarrello(jsonObjStr,false);    //HO modificato questa funzione aggiungendo un booleano in modo da bypassare la funzione che chiude la modal
  var tot=calcolaPrezzoTotale(objCarrello);
  $("#id_calcola_totale").text(fixedDecimal(tot/100, ','));
  $("#id_calcola_totale_1").text(fixedDecimal(tot/100, ','));
  $( "#articoli-carrello").empty();

  if(objCarrello.length>0){
    disegnaCarrello();
  }else{
    $('#carrello-vuoto').removeClass('hideme');
    $('#contenuto_carrello').addClass('hideme');
  }

}

/*  la funzione creaDivCarrelloFlow(selezione,quant,options_flowfollia,prezzo,colori,idx_carrello) 
    prende in ingresso la selezione del fiore scelto dallo slider, la quantità, il colore selezionato,
    il prezzo, l'array dei colori disponibili e l'indice che andrà nell'id per il carrello. 
    Si occupa della creazione di una stringa che andrà a costruire il div con i dati e la parsa
    trasformandola in oggetto json  */

function creaDivCarrelloFlow(selezione,quant,options_flowfollia,prezzo,colori,idx_carrello){
  var divcarrelloflow_obj_str='<div id="id_'+idx_carrello+'" class="btn riga_carrello">'; 
  divcarrelloflow_obj_str+='<div class="colonna_carrello_foto">';
  divcarrelloflow_obj_str+='<img id="carrello_img" src="'+dati_slider[selezione][2]+'" style="height: 100%; width: 100%">';
  divcarrelloflow_obj_str+=' </div>';
  divcarrelloflow_obj_str+='<div class="colonna_carrello" style="text-align: left;">';
  divcarrelloflow_obj_str+=' <h7 class="modal-title"><b>PIANTA</b></h7><span><button type="button" class="btn btn-primary" id="id_trash" style="background-color: transparent; border: transparent"><img src="./immagini/trash-fill.svg"></button></span>';
  divcarrelloflow_obj_str+='<div><b>Nome: </b><span>'+dati_slider[selezione][1]+'</span></div>';
  if(options_flowfollia>-1){
    divcarrelloflow_obj_str+='<div><b>Colore: </b><span>'+colori[options_flowfollia]+'</span></div>';
  }
  divcarrelloflow_obj_str+='<div><b>Quantità: </b><span>'+quant+'</span></div>';
  divcarrelloflow_obj_str+='<div><b>Prezzo: </b><span>'+fixedDecimal(prezzo/100, ',')+'€</span></div>';
  divcarrelloflow_obj_str+='</div>';
  divcarrelloflow_obj_str+='</div>';

  var dom_nodes = $($.parseHTML(divcarrelloflow_obj_str));
  dom_nodes.find('#id_trash').on('click', elimina_elementi_dal_carrello);
  return dom_nodes;
}

/*  la funzione aggiungiFiori(vett_fiori) prende in ingresso un vettore di fiori, 
    lo scandisce e trova il nome dei fiori nei dati_tabella. Aggiunge il nome ad una stringa e
    la restituisce */

function aggiungiFiori(vett_fiori){
  var fiori="";
  for(var i=0; i<vett_fiori.length;i++){
    fiori+=dati_tabella[vett_fiori[i]][1].split('_')[1];
    if(i<vett_fiori.length-1) fiori+=', ';
  }
  return fiori;
}

/*  la funzione getNomeFioriera(id_fioriera) prende in ingresso
    un id che rappresenta una fioriera o una carta di un bouquet
    e trova il nome nei dati_fioriera e lo restituisce  */

function getNomeFioriera(id_fioriera){
  var nome="";
  for(var i=0; i<dati_fioriera.length;i++){
    if(dati_fioriera[i][2]==id_fioriera){
      nome=dati_fioriera[i][1];
      break
    }
  }
  return nome;
}

/*  la funzione apri_modal_carrello(fioristr) prende in ingresso una stringa
    che contiene i nomi dei fiori che vanno a costituire la composizione
    e si occupa di mostrare la modal di informazione dei fiori presenti nella
    composizione che si trova nel carrello  */

function apri_modal_carrello(fioristr){
  $('#id_elenco_fiori').empty();
  $('#id_elenco_fiori').append( '<b>Fiori nella composizione:</b>' );
  $('#id_elenco_fiori').append( '</br>' );
  $('#id_elenco_fiori').append( fioristr );
  $('#id_modal_fioricarrello').modal('show');
}

/*  la funzione creaDivCarrelloFioriera(selezione,prezzo,vett_fiori,idx_carrello) prende in ingresso
    la selezione del vaso scelto dallo slider, il prezzo, il vettore dei fiori
    presenti nella composizione e l'indice che andrà nell'id del div presente nel carrello. Si occupa
    di creare una stringa che andrà a formare i div una volta parsata in oggetto json  */

function creaDivCarrelloFioriera(selezione,prezzo,vett_fiori,idx_carrello){
  var divcarrellofioriera_obj_str='<div id="id_'+idx_carrello+'" class="btn riga_carrello">'; 
  divcarrellofioriera_obj_str+='<div class="colonna_carrello_foto">';
  divcarrellofioriera_obj_str+='<img id="carrello_img" src="./immagini/fioriera_stilizzata.jpg" style="height: 100%; width: 100%">';
  divcarrellofioriera_obj_str+=' </div>';
  divcarrellofioriera_obj_str+='<div class="colonna_carrello" style="text-align: left;">';
  divcarrellofioriera_obj_str+=' <h7 class="modal-title"><b>COMPOSIZIONE FIORIERA</b></h7><span><button type="button" class="btn btn-primary" id="id_trash" style="background-color: transparent; border: transparent"><img src="./immagini/trash-fill.svg"></button></span>';
  divcarrellofioriera_obj_str+='<div><b>Tipo vaso: </b><span>'+getNomeFioriera(selezione)+'</span></div>';
  divcarrellofioriera_obj_str+='<div><b>Fiori: </b><span>';
  divcarrellofioriera_obj_str+='<button type="button" class="btn btn-primary" id="id_info" style="background-color: transparent; border: transparent"  onmouseover="apri_modal_carrello(\''+aggiungiFiori(vett_fiori)+'\')">';
  divcarrellofioriera_obj_str+='<img src="./immagini/info-square-fill.svg" />';
  divcarrellofioriera_obj_str+='</button>';
  divcarrellofioriera_obj_str+='</span></div>';
  divcarrellofioriera_obj_str+='<div><b>Prezzo: </b><span>'+fixedDecimal(prezzo/100, ',')+'€</span></div>';
  divcarrellofioriera_obj_str+='</div>';
  divcarrellofioriera_obj_str+='</div>';

  var dom_nodes = $($.parseHTML(divcarrellofioriera_obj_str));
  dom_nodes.find('#id_trash').on('click', elimina_elementi_dal_carrello);
  
    $('a.popper').hover(function() {
        $('#pop').toggle();
    });

  return dom_nodes;
}

/*  la funzione creaDivCarrelloBouquet(selezione,prezzo,vett_fiori,idx_carrello) prende in ingresso
    la selezione della carta del bouquet scelta dallo slider, il prezzo, il vettore dei fiori
    presenti nella composizione e l'indice che andrà nell'id del div presente nel carrello. Si occupa
    di creare una stringa che andrà a formare i div una volta parsata in oggetto json  */

function creaDivCarrelloBouquet(selezione,prezzo,vett_fiori,idx_carrello){
  var divcarrellobouquet_obj_str='<div id="id_'+idx_carrello+'" class="btn riga_carrello">'; 
  divcarrellobouquet_obj_str+='<div class="colonna_carrello_foto">';
  divcarrellobouquet_obj_str+='<img id="carrello_img" src="./immagini/bouquet_stilizzato.jpg" style="height: 100%; width: 100%">';
  divcarrellobouquet_obj_str+=' </div>';
  divcarrellobouquet_obj_str+='<div class="colonna_carrello" style="text-align: left;">';
  divcarrellobouquet_obj_str+=' <h7 class="modal-title"><b>COMPOSIZIONE BOUQUET</b></h7><span><button type="button" class="btn btn-primary" id="id_trash" style="background-color: transparent; border: transparent"><img src="./immagini/trash-fill.svg"></button></span>';
  divcarrellobouquet_obj_str+='<div><b>Tipo carta: </b><span>'+getNomeFioriera(selezione)+'</span></div>';
  divcarrellobouquet_obj_str+='<div><b>Fiori: </b><span>';
  divcarrellobouquet_obj_str+='<button type="button" class="btn btn-primary" id="id_info" style="background-color: transparent; border: transparent"  onmouseover="apri_modal_carrello(\''+aggiungiFiori(vett_fiori)+'\')">';
  divcarrellobouquet_obj_str+='<img src="./immagini/info-square-fill.svg" />';
  divcarrellobouquet_obj_str+='</button>';
  divcarrellobouquet_obj_str+='</span></div>';
  divcarrellobouquet_obj_str+='<div><b>Prezzo: </b><span>'+fixedDecimal(prezzo/100, ',')+'€</span></div>';
  divcarrellobouquet_obj_str+='</div>';
  divcarrellobouquet_obj_str+='</div>';

  var dom_nodes = $($.parseHTML(divcarrellobouquet_obj_str));
  dom_nodes.find('#id_trash').on('click', elimina_elementi_dal_carrello);
  return dom_nodes;
}

/*  la funzione creaDivCarrelloBouquetPronti(selezione,quant,prezzo,idx_carrello) 
    prende in ingresso la selezione del bouquet scelto dallo slider, la quantità,
    il prezzo e l'indice che andrà nell'id per il carrello. 
    Si occupa della creazione di una stringa che andrà a costruire il div con i dati e la parsa
    trasformandola in oggetto json   */

function creaDivCarrelloBouquetPronti(selezione,quant,prezzo,idx_carrello){
  var divcarrellobouqetpronti_obj_str='<div id="id_'+idx_carrello+'" class="btn riga_carrello">'; 
  divcarrellobouqetpronti_obj_str+='<div class="colonna_carrello_foto">';
  divcarrellobouqetpronti_obj_str+='<img id="carrello_img" src="'+dati_slider[selezione][2]+'" style="height: 100%; width: 100%">';
  divcarrellobouqetpronti_obj_str+=' </div>';
  divcarrellobouqetpronti_obj_str+='<div class="colonna_carrello" style="text-align: left;">';
  divcarrellobouqetpronti_obj_str+=' <h7 class="modal-title"><b>BOUQUET PRONTO</b></h7><span><button type="button" class="btn btn-primary" id="id_trash" style="background-color: transparent; border: transparent"><img src="./immagini/trash-fill.svg"></button></span>';
  divcarrellobouqetpronti_obj_str+='<div><b>Nome: </b><span>'+dati_slider[selezione][1]+'</span></div>';
  divcarrellobouqetpronti_obj_str+='<div><b>Quantità: </b><span>'+quant+'</span></div>';
  divcarrellobouqetpronti_obj_str+='<div><b>Prezzo: </b><span>'+fixedDecimal(prezzo/100, ',')+'€</span></div>';
  divcarrellobouqetpronti_obj_str+='</div>';
  divcarrellobouqetpronti_obj_str+='</div>';
  
  var dom_nodes = $($.parseHTML(divcarrellobouqetpronti_obj_str));
  dom_nodes.find('#id_trash').on('click', elimina_elementi_dal_carrello);
  return dom_nodes;
}

/*  la funzione trasformaNomiColori(colori) serve per trasformare i nomi dei colori.
    In sostanza modifica i nomi che sono in inglese e quelli che sono rappresentati da un codice
    in italiano */

function trasformaNomiColori(colori){
  var rosso='Rosso';
  var arancione='Arancione';
  var bianco='Bianco';
  var blu='Blu';
  var crema='Crema';
  var giallo='Giallo';
  var lilla='Lilla';
  var magenta='Magenta';
  var rosa='Rosa';
  var viola='Viola';

  for(var i=0; i<colori.length;i++) {
    if(colori[i]=='red') colori[i]=rosso;
    if(colori[i]=='#ff9900') colori[i]=arancione;
    if(colori[i]=='white') colori[i]=bianco;
    if(colori[i]=='#003cff') colori[i]=blu;
    if(colori[i]=='wheat') colori[i]=crema;
    if(colori[i]=='#fff700') colori[i]=giallo;
    if(colori[i]=='#edb7ff') colori[i]=lilla;
    if(colori[i]=='#ff00ae') colori[i]=magenta;
    if(colori[i]=='#ffa9b7') colori[i]=rosa;
    if(colori[i]=='#8223a1') colori[i]=viola;
  }

  return colori;
}

/*  la funzione aggiungicarrello(datiCarrello,chiudiModalInfo) effettua una
    chiamata AJAX e invia al server i dati dell'articolo da aggiungere
    al carrello  */

function aggiungicarrello(datiCarrello,chiudiModalInfo) {

  // Utilizza AJAX per inviare i dati al server e controllare l'accesso
  var xhr = new XMLHttpRequest();
  xhr.open('POST', './php/aggiungicarrello.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (this.status == 200) {

        //aggiornare numerico  carrello
        
    } else {
      myalert('ATTENZIONE','Aggiornamento carrello errato.');
    }
    if(chiudiModalInfo){
      chiudi_modal_info();
    }
  };

  xhr.send('carrello=' + datiCarrello);

  // Impedisci il submit del form
  return false;
}

/*  la funzione disegnaCarrello() si occupa della creazione degli oggetti che andranno a
    costituire il carrello. Per ogni oggetto presente in objCarrello
    distingue la tipologia: A, se è un fiore della pagina FlowFollia, B, se è una composizione
    fioriera, C, se è una composizione bouquet e D, se è un bouquet pronto. In base alla tipologia
    estrapola i dati necessari e chiama le funzioni che si occupano della creazione dei div tramite
    oggetti json. Poi gli oggetti vengono aggiunti al div opportuno   */

function disegnaCarrello(){
  for (var i=0; i<objCarrello.length; i++){
    obj=objCarrello[i];
    tipologia=obj['tipo'];
    if(tipologia=='A') {
      quant=obj['quantita'];
      colori=obj['col_vett'];
      colori=trasformaNomiColori(colori);
      selezione=obj['selezione'];
      prezzo=obj['prezzo'];

      if(colori.length>0){
        options_flowfollia=obj['options_flowfollia'];
      } else {
        options_flowfollia=-1;
      }                
      var objAcquisto=creaDivCarrelloFlow(selezione,quant,options_flowfollia,prezzo,colori,i);
      $( "#articoli-carrello").append( objAcquisto );
      
    }

    if(tipologia=='B') {
      selezione=obj['selezione'];
      prezzo=obj['prezzo'];
      vett_fiori=obj['vettfiori'];
      var objAcquisto=creaDivCarrelloFioriera(selezione,prezzo,vett_fiori,i);
      $( "#articoli-carrello").append( objAcquisto );
    }

    if(tipologia=='C') {
      selezione=obj['selezione'];
      prezzo=obj['prezzo'];
      vett_fiori=obj['vettfiori'];
      var objAcquisto=creaDivCarrelloBouquet(selezione,prezzo,vett_fiori,i);
      $( "#articoli-carrello").append( objAcquisto );
    }

    if(tipologia=='D') {
      quant=obj['quantita'];
      selezione=obj['selezione'];
      prezzo=obj['prezzo'];
      var objAcquisto=creaDivCarrelloBouquetPronti(selezione,quant,prezzo,i);
      $( "#articoli-carrello").append( objAcquisto );
    }
  }

}

/*  la funzione getcarrello() effettua una chiamata AJAX e verifica
    se il carrello è vuoto. Se objCarrello ha dimensione maggiore di zero
    viene chiamata la funzione che disegna il carrello e viene calcolato il totale.
    Questa funzione ha il compito di tenere sempre in sessione il carrello, se non vuoto  */

function getcarrello() {
  
  // Utilizza AJAX per inviare i dati al server e controllare l'accesso
  var xhr = new XMLHttpRequest();
  xhr.open('POST', './php/getcarrello.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //alert(this.responseText);      
      var result = this.responseText;
      if (result!=''){
        var obj = JSON.parse(result);
        objCarrello=obj;

        if(objCarrello.length>0){
        
          disegnaCarrello();
          $('#carrello-vuoto').addClass('hideme');
          $('#contenuto_carrello').removeClass('hideme');
          var tot=calcolaPrezzoTotale(objCarrello);
          $("#id_calcola_totale").text(fixedDecimal(tot/100, ','));
          $("#id_calcola_totale_1").text(fixedDecimal(tot/100, ','));

        } else {
          $('#carrello-vuoto').removeClass('hideme');
          $('#contenuto_carrello').addClass('hideme');
        }

      }
        
    } 
    
  };

  xhr.send();

  // Impedisci il submit del form
  return false;
}

/*  la funzione calcolaPrezzoTotale(objCarrello) prende in ingresso
    il vettore carrello, lo scorre e prende i prezzi di tutti gli
    articoli presenti e ne calcola il totale  */

function calcolaPrezzoTotale(objCarrello) {
  var totale=0;
  for(var i=0; i<objCarrello.length; i++) {
    totale+=objCarrello[i]['prezzo'];
  }
  return totale;
  
}

/*  la funzione isListaFioriEmpty(listafiori) prende in ingresso una lista di fiori
    e la scorre cercando l'attributo source. Se il source corrisponde all'immagine
    del fiore placeholder allora ritorna true. Questa funzione serve a verificare che in lista
    fiori non ci siano fiori placeholder ma solo fiori scelti nella composizione */

function isListaFioriEmpty(listafiori){
  var result=false;
  for(var j=0;j<listafiori.length;j++){
    var objimg=listafiori[j];
    var src=$(objimg).attr("src");
    if (src=='./immagini/flower1.svg'){
      result=true;
      break;
    }
  }
  return result;
}

/*  la funzione inserisciFlowfolliaCarrello(tipologia) prende in ingresso una stringa
    che indica il tipo di oggetto acquistato e in base al valore della stringa prende i dati
    dell'oggetto e li aggiunge a objCarrello. Poi il carrello viene reso una stringa e
    passato alla funzione aggiungicarrello per essere inserito in sessione  */

function inserisciFlowfolliaCarrello(tipologia){
  
  var tipo=tipologia;
  var jsonObj = {};

  if(tipo=='A'){
    //fiori flofollia
    var selezione=flowfollia_sel_corrente;
    var col_vett=dati_info[selezione][5];
    var options_flowfollia = $("input[name='options_flowfollia']:checked").val();
    var quantita=$('#id_box_quantita').val();
    var prezzo=dati_slider[selezione][3];
   
    jsonObj['tipo']=tipo;
    jsonObj['quantita']=quantita;
    jsonObj['selezione']=selezione;
    jsonObj['prezzo']=prezzo;
    jsonObj['col_vett']=col_vett;
    jsonObj['options_flowfollia']=options_flowfollia;

  } else if (tipo=='B') {
    //fiori creafioriera
    var selezione=fioriera_sel_corrente;
    var idx=getRigaDatiFioriera(selezione);
    var prezzo=dati_fioriera[idx][4];

    var listafiori = $("img[name='"+fiorieraimgname+"']");
    if(!isListaFioriEmpty(listafiori)){
      var vett_fiori=[];
      for(var j=0;j<listafiori.length;j++){
        var objimg=listafiori[j];
        var src=$(objimg).attr("src");
        var prezzo1=getPrezzoFiori(src,1);
        prezzo+=prezzo1;
        var idxfiori=getRigaFiori(src,1);
        vett_fiori.push(idxfiori);
      }
      jsonObj['tipo']=tipo;
      jsonObj['selezione']=selezione;
      jsonObj['prezzo']=prezzo;
      jsonObj['vettfiori']=vett_fiori;
      window.location.href = './CreaFioriera.html';
    } else {
      myalert('ATTENZIONE','Riempi tutti i posti dei fiori.');
      return;
    }

  } else if (tipo=='C') {
    //fiori creabouquet
    var selezione=bouquet_sel_corrente;
    var idx=getRigaDatiFioriera(selezione);
    var prezzo=dati_fioriera[idx][4];

    var listafiori = $("img[name='"+fiorieraimgname+"']");
    if(!isListaFioriEmpty(listafiori)){
      var vett_fiori=[];
      for(var j=0;j<listafiori.length;j++){
        var objimg=listafiori[j];
        var src=$(objimg).attr("src");
        var prezzo1=getPrezzoFiori(src,2);
        prezzo+=prezzo1;
        var idxfiori=getRigaFiori(src,2);
        vett_fiori.push(idxfiori);
      }
      jsonObj['tipo']=tipo;
      jsonObj['selezione']=selezione;
      jsonObj['prezzo']=prezzo;
      jsonObj['vettfiori']=vett_fiori;
      window.location.href = './CreaBouquet.html';
    } else {
      myalert('ATTENZIONE','Riempi tutti i posti dei fiori.');
      return;
    }

  } else if (tipo=='D') {
    //fiori bouquetpronti
    var quantita=$('#id_box_quantita').val();
    var selezione=flowfollia_sel_corrente;
    var prezzo=dati_slider[selezione][3];
    jsonObj['tipo']=tipo;
    jsonObj['quantita']=quantita;
    jsonObj['selezione']=selezione;
    jsonObj['prezzo']=prezzo;
  }

  objCarrello.push(jsonObj);
  jsonObjStr=JSON.stringify(objCarrello);
  aggiungicarrello(jsonObjStr,true);
  //alert(jsonObjStr);
  
}