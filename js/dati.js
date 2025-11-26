//funzioni che contengono dati e che servono per il riempimento di alcune pagine

//################################################################

/*   inizializzazione di alcuni array e variabili globali utili   */
var dati_slider=[];
var dati_info=[];
var dati_fioriera=[];

// tipo A
var flowfollia_sel_corrente=-1;

// Tipo B
var fioriera_sel_corrente='';
var fiorieraimgname='';

var objCarrello=[];
var objPrezzo=[];

/*  la funzione initDatiSlider() serve ad inizializzare gli slider delle pagine FlowFollia e
    bouquet pronti. Contiene un array con tutte le informazioni dei fiori
    della pagina principale e della pagina di bouquet pronti  */

function initDatiSlider(){
    dati_slider=[
        [1,'Agatea','./immagini/fiori_vendere/agatea.jpg',590],
        [1,'Anemone','./immagini/fiori_vendere/anemone.jpg',650],
        [1,'Azalea','./immagini/fiori_vendere/azalea.jpg',800],
        [1,'Begonia','./immagini/fiori_vendere/begonie.jpg',1350],
        [1,'Bougainvillea','./immagini/fiori_vendere/bougainvillea.jpg',1090],
        [1,'Calla','./immagini/fiori_vendere/calle.jpg',500],
        [1,'Callistemone','./immagini/fiori_vendere/callistemone.jpg',1400],
        [1,'Camelia','./immagini/fiori_vendere/camelie.jpg',1900],
        [1,'Carpobrotus','./immagini/fiori_vendere/carpobrotus.jpg',1500],
        [1,'Ciclamino','./immagini/fiori_vendere/ciclamini.jpg',850],
        [1,'Crisantemo','./immagini/fiori_vendere/crisantemi.jpg',1200],
        [1,'Dalia','./immagini/fiori_vendere/dalia.jpg',490],
        [1,'Dipladenia','./immagini/fiori_vendere/dipladenia.jpg',1370],
        [1,'Gardenia','./immagini/fiori_vendere/gardenie.jpg',700],
        [1,'Garofano','./immagini/fiori_vendere/garofani.jpg',840],
        [2,'Geranio','./immagini/fiori_vendere/geranio.jpg',1240],
        [2,'Gerbera','./immagini/fiori_vendere/gerbere.jpg',600],
        [2,'Giglio','./immagini/fiori_vendere/giglio.jpg',1370],
        [2,'Girasole','./immagini/fiori_vendere/girasole.jpg',940],
        [2,'Ibisco','./immagini/fiori_vendere/ibisco.jpg',1560],
        [2,'Iris','./immagini/fiori_vendere/iris.jpg',1150],
        [2,'Lavanda','./immagini/fiori_vendere/lavanda.jpg',1640],
        [2,'Margherita','./immagini/fiori_vendere/margherite.jpg',1200],
        [2,'Orchidea','./immagini/fiori_vendere/orchidea.jpg',870],
        [2,'Ortensia','./immagini/fiori_vendere/ortensie.jpg',1400],
        [2,'Passiflora','./immagini/fiori_vendere/passiflora.jpg',1530],
        [2,'Peonia','./immagini/fiori_vendere/peonie.jpg',1180],
        [2,'Rosa','./immagini/fiori_vendere/rose.jpg',1000],
        [2,'Tulipano','./immagini/fiori_vendere/tulipani.jpg',980],
        [2,'Viola','./immagini/fiori_vendere/viole.jpg',720],
        [3,'Biancheggio','./immagini/bouquet_pronti/bouquet_gigli_rose_bianche.jpg',2030],
        [3,'Audace','./immagini/bouquet_pronti/bouquet_garofani_gerbere.jpg',2500],
        [3,'Arancio','./immagini/bouquet_pronti/bouquet_gerbere_garofani.jpg',3000],
        [3,'Maria','./immagini/bouquet_pronti/bouquet_gerbere_rose.jpg',2150],
        [3,'Maestoso','./immagini/bouquet_pronti/bouquet_rose_rosse.jpg',4200],
        [3,'Timido','./immagini/bouquet_pronti/bouquet_gigli_rose_gerbere.jpg',1990],
        [3,'Primavera','./immagini/bouquet_pronti/bouquet_peonie.jpg',3100],
        [3,'Rinfresco','./immagini/bouquet_pronti/bouquet_peonie_garofani.jpg',2860],
        [3,'Chiara','./immagini/bouquet_pronti/bouquet_gigli_rose_rosa.jpg',2340],
        [3,'Di classe','./immagini/bouquet_pronti/bouquet_rose_crisantemi.jpg',2780],
        [3,'Tenerezza','./immagini/bouquet_pronti/bouquet_rose_margherite.jpg',3200],
        [3,'Eleganza','./immagini/bouquet_pronti/bouquet_rose_miste.jpg',2040],
        [3,'Spensierato','./immagini/bouquet_pronti/bouquet_rose_miste_accese.jpg',3000],
        [3,'Casareccio','./immagini/bouquet_pronti/bouquet_crisantemi_gerbere.jpg',2670]
    ]

}

/*  la funzione initDatiInfo() serve ad inizializzare le modal di info della pagina FlowFollia.
    Contiene un array con tutte le informazioni dei fiori
    della pagina principale come nome, immagine, descrizione e colori e della
    pagina dei bouquet pronti  */

function initDatiInfo(){
    dati_info=[
        [1,'Agatea','./immagini/fiori_vendere/agatea.jpg',
        'Si tratta di una pianta sempreverde ed è caratterizzata da fiori celesti/indaco, simili a quelli di una margherita che compaiono da maggio fino all\'autunno. Viene chiamata comunemente Felicia.',
        'Predilige esposizioni in pieno sole e irrigazioni regolari. Mal tollera gli inverni rigidi.',
        []
        ],        
        [1,'Anemone','./immagini/fiori_vendere/anemone.jpg',
        'L\'anemone è una pianta perenne che cresce in maniera spontanea in zone ombreggiate e un po\' umide. Coltivabile sia in giardino che in vaso.',
        'L\'anemone preferisce luoghi ben illuminati, ma non direttamente esposti al sole. Resiste bene al freddo, ma non ama il caldo eccessivo.',
        ['red','white','#8223a1']
        ],
        [1,'Azalea','./immagini/fiori_vendere/azalea.jpg',
        'L\'Azalea è una pianta appartenente alla famiglia delle Ericacee, e rientra nel genere dei Rhododendron. Presenta i fusti sottili densamente ramificati, gli arbusti allungati e le foglie ovali di una tonalità verde scura, al tatto ruvide.',
        'Teme il freddo intenso e gradisce terreni acidi e ricchi di sostanze organiche.',
        []
        ],
        [1,'Begonia','./immagini/fiori_vendere/begonie.jpg',
        'Le begonie sono piante ornamentali molto apprezzate per la bellezza di foglie e fiori. Il genere delle begonie include diverse varietà di specie decorative, tutte di facile coltivazione in giardino, balcone e terrazzo.',
        'Si sviluppano a temperatura ambiente e resistono al caldo e al freddo. Vengono coltivate come annuali.',
        ['red','white','#ffa9b7']
        ],
        [1,'Bougainvillea','./immagini/fiori_vendere/bougainvillea.jpg',
        'La Bougainvillea è una pianta rampicante, originaria del sud America. La Bouganville è la pianta perfetta per decorare pergolati, pareti, griglie o formare siepi alte fino a 5 metri.',
        'Può essere coltivata in piena terra in giardino, soltanto nelle zone in cui la temperatura non scende sotto lo zero',
        ['#ff00ae','#ff9900']
        ],
        [1,'Calla','./immagini/fiori_vendere/calle.jpg',
        'La Calla è una pianta perenne originaria dell’Africa meridionale. È conosciuta per i suoi fiori eleganti e distintivi, spesso utilizzati in bouquet da sposa o come decorazioni per eventi speciali.',
        'La Calla preferisce un terreno drenato e ricco di sostanze organiche. Preferisce luoghi luminosi ma non direttamente esposti ai raggi solari.'],
        [1,'Callistemone','./immagini/fiori_vendere/callistemone.jpg',
        'Cresce in forma arrotondata e si presenta caratterizzata da foglie lanceolate rigide, di colore verde scuro. Quando fiorisce, i suoi fiori rossi appaiono come spighe cilindriche.',
        'La resistenza a temperature estreme lo rende una pianta davvero unica. Deve essere irrigato abbondantemente durante le stagioni più calde.'],
        [1,'Camelia','./immagini/fiori_vendere/camelie.jpg',
        'La camelia è una pianta sempreverde, originaria dell\'Asia. Può vantare moltissime specie diverse. In generale tutte le camelie sono a portamento arbustivo o ad alberello.',
        'Il substrato più adatto la camelia è caratterizzato da un pH acido o almeno neutro. È consigliabile per un terriccio specifico per piante acidofile.',
        ['#ff00ae','wheat','#ffa9b7']
        ],
        [1,'Carpobrotus','./immagini/fiori_vendere/carpobrotus.jpg',
        'È un genere di piante rampicanti o semi-erette, con grandi fiori simili a margherite. Appartiene alla famiglia delle Aizoaceae ed è originario principalmente del Sudafrica.',
        'In estate, è necessario evitare una luce troppo forte. Inoltre, è necessario evitare la luce solare diretta dopo l\'irrigazione poiché ciò brucerà le foglie.'],
        [1,'Ciclamino','./immagini/fiori_vendere/ciclamini.jpg',
        'Il ciclamino si adatta benissimo sia in piena terra che in vaso, fioriere o ciotole. Ha dato origine a innumerevoli ibridi molto robusti e generosi, con fioritura lunghissima, anche 4 mesi.',
        'Resiste molto bene alle basse temperature e preferisce ambienti esterni, in vaso o per terra.',
        ['red','white','#ffa9b7','#ff00ae']
        ],
        [1,'Crisantemo','./immagini/fiori_vendere/crisantemi.jpg',
        'Il crisantemo è fra i protagonisti delle fioriture in esterni dell\'autunno o inizio inverno. Presenta molte tonalità e può avere sia fiori piccoli che più grandi tipo margherite.',
        'Il crisantemo deve vivere in esterni. In pieno sole resiste anche a mezz\'ombra, ma termina prima la fioritura. Il freddo non lo turba.',
        ['#ffa9b7','white','#edb7ff']
        ],
        [1,'Dalia','./immagini/fiori_vendere/dalia.jpg',
        'La dalia è una perenne tuberosa con foglie ovali e carnose. Il fiore generalmente composto da più file di petali allungati sovrapposti ma ne esitono di diverse forme e anche i colori sono svariati.',
        'Preferisce un’esposizione soleggiata e climi caldi: sono molto delicate e soffrono il freddo. Il terreno deve essere drenante e ricco di sostanze nutritive.',
        ['#8223a1','#ff9900','#fff700','#ff00ae']
        ],
        [1,'Dipladenia','./immagini/fiori_vendere/dipladenia.jpg',
        'La dipladenia è una bellissima pianta ornamentale che può essere coltivata in appartamento o in giardino. I fiori si sviluppano in primavera-estate e sono molto appariscenti.',
        'Durante l’estate la si può tenere in casa ma d’inverno meglio spostarla su un balcone coperto. Il terreno deve essere ricco e ben drenato.',
        ['#ff00ae','white','#ffa9b7']
        ],
        [1,'Gardenia','./immagini/fiori_vendere/gardenie.jpg',
        'Le Gardenie sono arbusti di dimensioni piccole o medie, sempreverdi, che producono grandi fiori bianchi o crema, intensamente profumati. Hanno grandi foglie di colore scuro, lucide e di forma ovale.',
        'Può essere coltivata sia in appartamento che in giardino. È abituata a un clima non eccessivamente caldo e non troppo freddo.'],
        [1,'Garofano','./immagini/fiori_vendere/garofani.jpg',
        'Il garofano è una pianta erbacea perenne, è a forma di cespuglio con foglie strette e allungate, produce fiori a cinque petali, singoli o a mazzetto.',
        'Amano il sole che stimola ricche fioriture. Se vengono posizionati in ombra non fioriscono. Tollerano l’inquinamento urbano e anche i venti salmastri. Sono indicati per i terrazzi.',
        ['#ff00ae','#ffa9b7']
        ],
        [2,'Geranio','./immagini/fiori_vendere/geranio.jpg',
        'Il geranio è una tra le più amate piante da balcone. Adorna ceste, vasi, fioriere pensili, aiuole fiorite o ciotole. Più l’esposizione è soleggiata, più lussureggiante sarà la fioritura.',
        'Desidera un terreno drenante ma fertile e ricco di sostanza organica con pH neutro. Preferisce la piena esposizione al sole.',
        ['red','#ffa9b7','white']
        ],
        [2,'Gerbera','./immagini/fiori_vendere/gerbere.jpg',
        'La Gerbera è una pianta che fiorisce durante tutta l’estate in bellissimi fiori colorati. E’ una pianta a portamento eretto perenne ideale da coltivare in vaso che può essere recisa per creare mazzi di fiori da regalare o da mettere in casa.',
        'Desidera un terreno fertile con pH neutro. Preferisce un posizionamento in pieno sole.',
        ['white','#ffa9b7','#fff700','#ff00ae']
        ],
        [2,'Giglio','./immagini/fiori_vendere/giglio.jpg',
        'Il giglio è un fiore sontuoso ma anche rustico e resta in terra dopo la fioritura. In vaso, diventa l’ornamento raffinato e profumato del terrazzo e balcone. Ottimo come fiore reciso.',
        'Solo se ha molta luce il suo stelo diventa robusto per restare eretto, meglio ancora se aiutato magari da un tutore, come una canna sottile di bambù.',
        ['#ff00ae','#ff9900','white']
        ],
        [2,'Girasole','./immagini/fiori_vendere/girasole.jpg',
        'Il girasole deve il suo nome al caratteristico comportamento in cui l’inflorescenza è sempre orientata verso il sole. Presenta un fusto robusto con foglie ampie. È noto il suo impiego per la produzione di olio vegetale dai suoi semi.',
        'Ha un’ ottima resistenza al freddo, ma si sviluppa soprattutto in zone dove regnano le estati calde.',
        []
        ],
        [2,'Ibisco','./immagini/fiori_vendere/ibisco.jpg',
        'È una pianta a portamento arbustico, caratterizzata da fiori di colori sgargianti e di dimensioni considerevoli. Con i fiori essiccati di ibisco si prepara un infuso chiamato karkadè.',
        'Ha bisogno di un luogo luminoso per poter fiorire abbondantemente. In estate può satre anche aperto. Fiorisce in zone calde.',
        ['#ff00ae','red']
        ],
        [2,'Iris','./immagini/fiori_vendere/iris.jpg',
        'Hanno foglie lunghe e sottili e fiori chiamati giaggioli, composti da tre petali interni eretti e tre petali esterni ricadenti.',
        'Non necessitano di particolari cure dopo averle messe a dimora. Il terriccio adatto alle Iris è un terreno normale non argilloso e soprattutto deve essere ben drenato e mantenuto il più asciutto possibile.',
        ['white','#8223a1']
        ],
        [2,'Lavanda','./immagini/fiori_vendere/lavanda.jpg',
        'La lavanda fiorisce in piena stagione estiva richiamando tantissime farfalle e altri insetti impollinatori. È una pianta aromatica dai mille benefici, utile per trattare numerosi disturbi e problemi di salute.',
        'Richiede spazio per crescere. Non si deve esagerare con le innaffiature ed è preferibile piantarla al suolo.'],
        [2,'Margherita','./immagini/fiori_vendere/margherite.jpg',
        'Una piccolo arbusto che sviluppa fino a 1 metro di altezza. Forma cuscini densi di fiorellini dal colore acceso da inizio estate fino all’autunno con foglie frastagliate argentate.',
        'Va annaffiata con moderazione e si devono evitare i ristagni d\'acqua. Vive bene in zone soleggiate per almeno mezza giornata.',
        ['#fff700', '#ff00ae', 'white']
        ],
        [2,'Orchidea','./immagini/fiori_vendere/orchidea.jpg',
        'Presenta una rosetta di foglie carnose dalla foglia ovale e allungata, da cui si sviluppano uno o più fusti su cui sbocciano numerosi fiori. Presenta molte varietà e colori.',
        'Ama posizioni luminose non con sole diretto e luoghi arieggiati ma senza correnti di aria fredda. La cosa importante è fornire loro umidità.',
        ['#ffa9b7','white','#003cff','#ff00ae']
        ],
        [2,'Ortensia','./immagini/fiori_vendere/ortensie.jpg',
        'Esistono molte varietà di ortensie che differiscono per portamento e caratteristiche delle infiorescenze. Sono resistenti e presentano fiori che sono in grado di cambiare colore in base al pH del terreno e alla presenza di minerali.',
        'Prediligono un luogo ventilato, in penombra. Devono essere protette dal sole diretto.',
        ['#ffa9b7','white','#edb7ff','#003cff']
        ],
        [2,'Passiflora','./immagini/fiori_vendere/passiflora.jpg',
        'La passiflora è una pianta erbacea perenne, rampicante e ramificata, che possiede uno stelo robusto e legnoso e dei fiori molto particolari. Nota in erboristeria e fitoterapia per le sue proprietà sedative.',
        'Apprezza i luoghi protetti, soleggiati o parzialmente ombreggiati. Occorre anche un terreno ricco di sostanze nutritive e ben drenato.'],
        [2,'Peonia','./immagini/fiori_vendere/peonie.jpg',
        'Sono erbe o arbusti alte fino a circa 2 metri ed ancorate al suolo da radici tuberose. Fioriscono nei mesi di aprile e maggio producendo grandi fiori globosi profumati e molto vistosi.',
        'Il luogo ideale per la peonia è un’aiuola in giardino soleggiata o in penombra. Hanno bisogno di spazio e non devono essere vicine alle radici di altre piante.',
        ['white','#ff00ae']
        ],
        [2,'Rosa','./immagini/fiori_vendere/rose.jpg',
        'Le piante di rosa presentano steli lunghi e ricchi di spine su cui su sviluppano piccole foglie seghettate. I fiori hanno un profumo inconfondibile, sono solitari o in gruppi, dai colori e dalle dimensioni più varie.',
        'Si sviluppano meglio in terra o in contenitori dalle dimensioni medio-grandi, in zone dal clima mite. Amano sole e penombra.',
        ['red','white','#ffa9b7','#fff700']
        ],
        [2,'Tulipano','./immagini/fiori_vendere/tulipani.jpg',
        'È formato da un bulbo sotterraneo a cui si sviluppa uno stelo verde con foglie. Sono utilizzati per abbellire giardini, aiuole, terrazzi e balconi con i loro fiori colorati.',
        'La coltivazione può avvenire in giardino o in vasi. I bulbi vanno annaffiati ogni due o tre giorni.',
        ['#ffa9b7','#fff700','white','red']
        ],
        [2,'Viola','./immagini/fiori_vendere/viole.jpg',
        'Sono erbacee e presentano una rosetta di foglie basali picciolate e cuoriformi. I fiori delle violette hanno generalmente due petali che puntano verso l\'alto e tre petali verso il basso.',
        'Per coltivare le violette è possibile partire dai semi o da piccole piantine e la coltivazione può essere effettuata in piena terra.',
        ['#8223a1','#ff9900','#fff700','white']
        ],
        [3,'Biancheggio','./immagini/bouquet_pronti/bouquet_gigli_rose_bianche.jpg',
        'Bouquet misto di fiori bianchi e verde decorativo',
        'Con rose bianche, nebbiolina e gigli bianchi',
        []
        ],
        [3,'Audace','./immagini/bouquet_pronti/bouquet_garofani_gerbere.jpg',
        'Bouquet dai toni crema e fucsia, con verde decorativo.',
        'Sono presenti garofani, gerbere magenta e crisantemi gialli',
        []
        ],
        [3,'Arancio','./immagini/bouquet_pronti/bouquet_gerbere_garofani.jpg',
        'Festeggia con un bouquet dai colori pesca e arancio.',
        'Fatto da rose, garofani e gerbere dal color pesca.',
        []
        ],
        [3,'Maria','./immagini/bouquet_pronti/bouquet_gerbere_rose.jpg',
        'Bouquet delicato sui toni del rosa, perfetto per un compleanno o una ricorrenza.',
        'Sono presenti rose e gerbere rosa e fiorellini bianchi.',
        []
        ],
        [3,'Maestoso','./immagini/bouquet_pronti/bouquet_rose_rosse.jpg',
        'Bouquet di rose rosse da regalare ad un anniversario, una proposta di matrimonio o un compleanno speciale.',
        'Formato da 30 rose rosse lunghe con petali vellutati.',
        []
        ],
        [3,'Timido','./immagini/bouquet_pronti/bouquet_gigli_rose_gerbere.jpg',
        'Bouquet sui toni caldi con un po\' di bianco, ottimo per arredare la casa.',
        'Sono presenti gerbere e rose tea, con qualche giglio bianco.',
        []
        ],
        [3,'Primavera','./immagini/bouquet_pronti/bouquet_peonie.jpg',
        'Molto semplice, ma fresco, ricorda la stagione primaverile.',
        'Ci sono grandi peonie rosa contornate da tanto verde.',
        []
        ],
        [3,'Rinfresco','./immagini/bouquet_pronti/bouquet_peonie_garofani.jpg',
        'Come dice il nome è un bouquet dai toni caldi ma rinfrescanti.',
        'Composto da garofani di vari colori e un po\' di verde per spezzare.',
        []
        ],
        [3,'Chiara','./immagini/bouquet_pronti/bouquet_gigli_rose_rosa.jpg',
        'Bouquet ottimo per un compleanno o una ricorrenza, nel complesso è m olto delicato.',
        'Presenta rose rosa e gigli bianchi, un po\' di foglioline verdi.',
        []
        ],
        [3,'Di classe','./immagini/bouquet_pronti/bouquet_rose_crisantemi.jpg',
        'Bouquet elegante ma semplice sui toni del bianco-rosso.',
        'Composto da rose rosse con gambo lungo, crisantemi bianchi e nebbiolina.',
        []
        ],
        [3,'Tenerezza','./immagini/bouquet_pronti/bouquet_rose_margherite.jpg',
        'Si tratta di un bouquet semplice ma perfetto per ogni occasione.',
        'Ci sono margherite lilla e tenere rose rosa contornate da nebbiolina.',
        []
        ],
        [3,'Eleganza','./immagini/bouquet_pronti/bouquet_rose_miste.jpg',
        'Questo bouquet è semplice ma perfetto per arredare la casa in grande stile o per occasioni speciali.',
        'Presenta rose rosse, rosa e bianche, con stelo lungo, contornate da nebbiolina per addolcire.',
        []
        ],
        [3,'Spensierato','./immagini/bouquet_pronti/bouquet_rose_miste_accese.jpg',
        'Bouquet fresco e colorato che rallegra la casa o le occasioni.',
        'Ci sono rose tea, garofani di vario colore e un po\' di verde.',
        []
        ],
        [3,'Casareccio','./immagini/bouquet_pronti/bouquet_crisantemi_gerbere.jpg',
        'Bouquet semplice, rustico ma di grande effetto sui toni del giallo.',
        'Formato da grandi gerbere panna, rose rosa e garofani arancioni brillanti.',
        []
        ]
    ]
}

/*  la funzione initDatiFioriera() inizializza i dati degli slider delle fioriere
    e delle carte dei bouquet  */

function initDatiFioriera(){
    dati_fioriera=[
        [1,'Fioriera 4','id_vaso_quadrato','./immagini/vaso_quadrato.jpg',1500],
        [1,'Fioriera 9','id_vaso_quadrato_grande','./immagini/vaso_quadrato_grande.jpg',2800],
        [1,'Fioriera 6','id_vaso_rettangolare','./immagini/vaso_rettangolare.jpg',2500],
        [1,'Fioriera 1','id_vaso_tondo_piccolo','./immagini/vaso_tondo_piccolo.jpg',1000],
        [1,'Fioriera 5','id_vaso_tondo_grande','./immagini/vaso_tondo_grande.jpg',2500],
        [2,'Carta rosa','id_bouquet_rosa','./immagini/carta_velina_rosa.jpg',200],
        [2,'Carta viola','id_bouquet_viola','./immagini/carta_velina_viola.jpg',200],
        [2,'Carta blu','id_bouquet_blu','./immagini/carta_velina_blu.jpg',200],
        [2,'Carta verde','id_bouquet_verde','./immagini/carta_velina_verde.jpg',200],
        [2,'Carta gialla','id_bouquet_giallo','./immagini/carta_velina_gialla.jpg',200]
    ]
}

/*  la funzione initDatiTabella() inizializza i dati della tabella
    che contiene i fiori da mettere nei vasi o nei bouquet */

function initDatiTabella(){
    dati_tabella=[
        [1,'fiore_agatea','./immagini/fiori_mettere_vasi/png/agatea.png',300],
        [1,'fiore_anemone','./immagini/fiori_mettere_vasi/png/anemone.png',400],
        [1,'fiore_azalea','./immagini/fiori_mettere_vasi/png/azalea.png',450],
        [1,'fiore_begonia','./immagini/fiori_mettere_vasi/png/begonia.png',320],
        [1,'fiore_bougainvillea','./immagini/fiori_mettere_vasi/png/bougainvillea.png',500],
        [1,'fiore_calla','./immagini/fiori_mettere_vasi/png/calla.png',550],
        [1,'fiore_callistemone','./immagini/fiori_mettere_vasi/png/callistemone.png',500],
        [1,'fiore_camelia','./immagini/fiori_mettere_vasi/png/camelia.png',460],
        [1,'fiore_carpobrotus','./immagini/fiori_mettere_vasi/png/carpobrotus.png',400],
        [1,'fiore_ciclamino','./immagini/fiori_mettere_vasi/png/ciclamino.png',320],
        [1,'fiore_crisantemo','./immagini/fiori_mettere_vasi/png/crisantemo.png',350],
        [1,'fiore_dalia','./immagini/fiori_mettere_vasi/png/dalia.png',500],
        [1,'fiore_dipladenia','./immagini/fiori_mettere_vasi/png/dipladenia.png',340],
        [1,'fiore_gardenia','./immagini/fiori_mettere_vasi/png/gardenia.png',600],
        [1,'fiore_garofano','./immagini/fiori_mettere_vasi/png/garofano.png',320],
        [1,'fiore_geranio','./immagini/fiori_mettere_vasi/png/geranio.png',300],
        [1,'fiore_gerbera','./immagini/fiori_mettere_vasi/png/gerbera.png',500],
        [1,'fiore_giglio','./immagini/fiori_mettere_vasi/png/giglio.png',600],
        [1,'fiore_girasole','./immagini/fiori_mettere_vasi/png/girasole.png',480],
        [1,'fiore_ibisco','./immagini/fiori_mettere_vasi/png/ibisco.png',600],
        [1,'fiore_iris','./immagini/fiori_mettere_vasi/png/iris.png',550],
        [1,'fiore_lavanda','./immagini/fiori_mettere_vasi/png/lavanda.png',500],
        [1,'fiore_margherita','./immagini/fiori_mettere_vasi/png/margherita.png',300],
        [1,'fiore_orchidea','./immagini/fiori_mettere_vasi/png/orchidea.png',700],
        [1,'fiore_ortensia','./immagini/fiori_mettere_vasi/png/ortensia.png',670],
        [1,'fiore_passiflora','./immagini/fiori_mettere_vasi/png/passiflora.png',600],
        [1,'fiore_peonia','./immagini/fiori_mettere_vasi/png/peonia.png',560],
        [1,'fiore_rosa','./immagini/fiori_mettere_vasi/png/rosa.png',430],
        [1,'fiore_tulipano','./immagini/fiori_mettere_vasi/png/tulipano.png',500],
        [1,'fiore_viola','./immagini/fiori_mettere_vasi/png/viola.png',370],
        [2,'fiore_calla','./immagini/fiori_mettere_vasi/png/calla.png',300],
        [2,'fiore_camelia','./immagini/fiori_mettere_vasi/png/camelia.png',200],
        [2,'fiore_crisantemo','./immagini/fiori_mettere_vasi/png/crisantemo.png',200],
        [2,'fiore_dalia','./immagini/fiori_mettere_vasi/png/dalia.png',350],
        [2,'fiore_gardenia','./immagini/fiori_mettere_vasi/png/gardenia.png',400],
        [2,'fiore_garofano','./immagini/fiori_mettere_vasi/png/garofano.png',300],
        [2,'fiore_gerbera','./immagini/fiori_mettere_vasi/png/gerbera.png',430],
        [2,'fiore_giglio','./immagini/fiori_mettere_vasi/png/giglio.png',500],
        [2,'fiore_girasole','./immagini/fiori_mettere_vasi/png/girasole.png',400],
        [2,'fiore_orchidea','./immagini/fiori_mettere_vasi/png/orchidea.png',600],
        [2,'fiore_peonia','./immagini/fiori_mettere_vasi/png/peonia.png',450],
        [2,'fiore_rosa','./immagini/fiori_mettere_vasi/png/rosa.png',600],
        [2,'fiore_tulipano','./immagini/fiori_mettere_vasi/png/tulipano.png',500]
    ]
}

/*  la funzione createTabellaObj(id, src) prende come parametri un id
    e una src e costruisce il div con l'immagine del fiore  */

function createTabellaObj(id, src) {
    var tabella_obj_str='<div>';
    tabella_obj_str+='<button type="button" class="btn btn-primary mx-1" style="background-color: transparent; border: transparent" draggable="true" ondragstart="drag(event)">';
    tabella_obj_str+='<img id="'+id+'" src="'+src+'" style="height: 80px; width: 80px" />';
    tabella_obj_str+='</button>';
    tabella_obj_str+='</div>';

    var dom_nodes = $($.parseHTML(tabella_obj_str));
    return dom_nodes;
}

/*  la funzione fillTabella(tabellaid, numtabella) prende come parametri
    l'id della tabella da riempire e il numero della tabella. Scorrendo dati tabella
    controlla se il numero corrisponde al parametro passato e chiama la funzione che crea
    i div della tabella e li appende  */

function fillTabella(tabellaid, numtabella){
    for(var i=0;i<dati_tabella.length;i++){
        if (dati_tabella[i][0]==numtabella){
            var dom_obj=createTabellaObj(dati_tabella[i][1],dati_tabella[i][2])
            $( "#"+tabellaid ).append( dom_obj );
        }
    }
}

/*  la funzione createSliderObj1(src,nome,prezzo,id) prende
    in ingresso un'immagine, il nome, il prezzo e l'id
    e crea i div degli slider delle fioriere e dei bouquet  */

function createSliderObj1(src,nome,prezzo,id){

    var slider_obj_str='<div style="float: left;">';
    slider_obj_str+='<button type="button" id="id_fioriera_bouquet" class="btn btn-primary mx-1" style="background-color: white; border: white; width: 150px;" onclick="apri_finestra(\''+id+'\')"><img src="'+src+'"></button>';
    slider_obj_str+='<div class="prezzo" style="background-color: rgba(251, 188, 227, 0.646); width: 150px;"><span class="bottone bottone-login bottone-registrazione">'+nome+': '+fixedDecimal(prezzo/100, ',')+'€</span></div>';
    slider_obj_str+='</div>';
    var dom_nodes = $($.parseHTML(slider_obj_str));
    return dom_nodes;
}

/*  la funzione fillSlider1(sliderid, numslider) prende in ingresso
    l'id dello slider e il numero e riempie lo slider ceh corrisponde a 
    quei parametri  */

function fillSlider1(sliderid, numslider){
    for(var i=0;i<dati_fioriera.length;i++){
        if (dati_fioriera[i][0]==numslider){
            var dom_obj=createSliderObj1(dati_fioriera[i][3],dati_fioriera[i][1],dati_fioriera[i][4],dati_fioriera[i][2])
            $( "#"+sliderid ).append( dom_obj );
        }
    }
}

/*  la funzione getRigaDatiFioriera(id_fioriera) prende come parametro
    l'id della fioriera o dei bouquet e restituisce l'indice dei dati fioriera
    che corrisponde al parametro passato  */

function getRigaDatiFioriera(id_fioriera){
    var result=-1;
    for(var i=0;i<dati_fioriera.length;i++){
        if (dati_fioriera[i][2]==id_fioriera){
            result=i;
            break;
        }
    }
    return result;
}

/*  la funzione getPrezzoFiori(src,id) prende in ingresso
    una source e un id e scorre i dati tabella prendendo il prezzo  */

function getPrezzoFiori(src,id){
    var result=0;
      for(var i=0;i<dati_tabella.length;i++){
          if (dati_tabella[i][2]==src && dati_tabella[i][0]==id){
              result=dati_tabella[i][3];
              break;
          }
      }
      return result;
  }

  /*    la funzione getRigaFiori(src,id) prende in ingresso un'immagine e un id
        e scorrendo i dati tabella prende l'indice del fiore corrispondente ai
        parametri passati  */

  function getRigaFiori(src,id){
    var result=-1;
      for(var i=0;i<dati_tabella.length;i++){
          if (dati_tabella[i][2]==src && dati_tabella[i][0]==id){
              result=i;
              break;
          }
      }
      return result;
  }

  /*    la funzione fixedDecimal(val, sep) prende come parametri un intero e un
        separatore e converte i numeri decimali in stringhe 
        aggiungendo un separatore (es: 1000/100 -> '10,00')  */

function fixedDecimal(val, sep) {
    var valore = '' + val.toFixed(2);
    valore = valore.replace('.', sep);
    return valore;
}

/*  la funzione printDatiSlider(slider) prende in ingresso uno slider
    e lo stampano in console. E' stata usata per debuggare  */

function printDatiSlider(slider){
    for(var i=0;i<dati_slider.length;i++){
        if (dati_slider[i][0]==slider){
            console.log(dati_slider[i]);
        }
    }
}

/*  la funzione createSliderObj(src,nome,prezzo,riga) prende in ingresso un'immagine,
    un nome, il prezzo e la riga e crea il div dello slider con i dati passati  */

function createSliderObj(src,nome,prezzo,riga){
    var slider_obj_str='<div style="float: left">';
    slider_obj_str+='<img src="'+src+'" />';
    slider_obj_str+='<div class="prezzo" style="background-color: rgba(251, 188, 227, 0.646)">';
    slider_obj_str+='<span class="bottone bottone-login bottone-registrazione"><b>'+nome+'</b>';
    slider_obj_str+='<button type="button" class="btn btn-primary" id="id_info" style="background-color: transparent; border: transparent"  onclick="apri_modal_info(\''+nome+'\','+riga+')">';
    slider_obj_str+='<img src="./immagini/info-square-fill.svg" />';
    slider_obj_str+='</button>';
    slider_obj_str+='</span>';
    slider_obj_str+='<br>';
    slider_obj_str+='<span class="bottone bottone-login bottone-registrazione">'+fixedDecimal(prezzo/100, ',')+' €</span>';
    slider_obj_str+='</div>';
    slider_obj_str+='</div>';

    var dom_nodes = $($.parseHTML(slider_obj_str));
    return dom_nodes;
}

/*  la funzione fillSlider(sliderid, numslider) prende l'id dello slider
    e il numero e riempie lo slider corrispondente ai parametri passati  */

function fillSlider(sliderid, numslider){
    for(var i=0;i<dati_slider.length;i++){
        if (dati_slider[i][0]==numslider){
            var dom_obj=createSliderObj(dati_slider[i][2],dati_slider[i][1],dati_slider[i][3],i)
            $( "#"+sliderid ).append( dom_obj );
        }
    }
}

/*  la funzione createInfoObj(src,nome_pianta,info_pianta,necessita,col_vett) 
    prende in ingresso un'immagine, il nome della pianta, le info, un vettore di colori
    e crea la modal che contiene le informazioni della pianta  */

function createInfoObj(src,nome_pianta,info_pianta,necessita,col_vett){
    var info_obj_str='';
    info_obj_str+='<div class="colonna">';
    info_obj_str+='<img id="modal_img" src="'+src+'" style="height: 100%; width: 100%" />';
    info_obj_str+='</div>';
    info_obj_str+='<div class="colonna">';
    info_obj_str+='<h4 id="nome_pianta">'+nome_pianta+'</h4>';
    info_obj_str+='<h6 id="info_pianta">'+info_pianta+'</h6>';
    info_obj_str+='<h6 id="necessita">'+necessita+'</h6>';
    info_obj_str+='</div>';
    info_obj_str+='<br>';
    info_obj_str+='<form action="" method="post">';
    info_obj_str+='<b>Quantità:</b>';
    info_obj_str+='<div>';
    info_obj_str+='<input type="number" id="id_box_quantita" size="10" maxlength="10" min="1" max="10" value="1" required>';
    info_obj_str+='</div>';
    info_obj_str+='</form>';
    info_obj_str+='<br>';

    if(col_vett.length>0){
        info_obj_str+='<b>Colori:</b>';
        info_obj_str+='<br>';
        for(var i=0;i<col_vett.length;i++){
            info_obj_str+='<div class="btn-group" data-toggle="buttons" style="margin-right: 2px;">';
            var chk='';			
            if(i==0){
                chk='checked';
                info_obj_str+='<label id="id_btn_border_color"  class="btn active" style="background-color:'+col_vett[i]+';border-color:black;">';
            }else {
                info_obj_str+='<label id="id_btn_border_color"  class="btn " style="background-color:'+col_vett[i]+';border-color:black";>';
            }

            info_obj_str+='<input type="radio" value="'+i+'"name="options_flowfollia" id="options_flowfollia" autocomplete="off" '+chk+'>';
            //info_obj_str+='<span class="glyphicon glyphicon-ok"></span>';
            info_obj_str+='</label>';
            info_obj_str+='</div>';
        }

    }
    
    var dom_nodes = $($.parseHTML(info_obj_str));
    return dom_nodes;
}

/*  la funzione searchInfo(info) prende in ingresso una info
    e scorre il vettore dati info prendendo l'indice corrispondente al parametro passato  */

function searchInfo(info){
    var result=-1;
    for(var i=0;i<dati_info.length;i++) {
        if (info==dati_info[i][1]) {
            result=i;
            break;
        }
    }
    return result;
}

/*  la funzione fillInfo(info) prende in ingresso una info e 
    cerca i parametri necessari per il riempimento della modal di info dei fiori
    e crea l'oggetto per poi appenderlo  */

function fillInfo(info){
    var idx=searchInfo(info);
    var src=dati_info[idx][2];
    var nome_pianta=dati_info[idx][1];
    var info_pianta=dati_info[idx][3];
    var necessita=dati_info[idx][4];
    var col_vett=dati_info[idx][5];
    var dom_obj=createInfoObj(src,nome_pianta,info_pianta,necessita,col_vett);
    $('#id_modal_body_info').empty();
    $('#id_modal_body_info').append( dom_obj );
}