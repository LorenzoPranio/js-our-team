esercizio di oggi(10/07/24): Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
Numero push minimo per l'esercizio base: 5/6
Ecco i dati dell'array di oggetti:
Nome - Ruolo - Foto
Wayne Barnett - Founder & CEO - wayne-barnett-founder-ceo.jpg
Angela Caroll	- Chief Editor	- angela-caroll-chief-editor.jpg
Walter Gordon - Office Manager - walter-gordon-office-manager.jpg
Angela Lopez	- Social Media Manager - angela-lopez-social-media-manager.jpg
Scott Estrada	- Developer - scott-estrada-developer.jpg
Barbara Ramos - Graphic Designer - barbara-ramos-graphic-designer.jpg
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
P.s. In allegato trovate un esempio di layout e le immagini da utilizzare


|SOLUZIONE|

MILESTONE 0
1.-Creo un array con all'interno gli oggetti(struttura dati: Our Team)
1.1.-Ogni membro del team deve avere i seguenti dati: Nome, Ruolo, Foto

MILESTONE 1
2.-Creare un console log per ogni membro del team, che mostri le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2
3.-Creare un container che inserisca all'interno del DOM tutte le informazioni 
3.1.-Recupero dal DOM l'elemento in cui andare ad inserire le colonne con le informazioni

4.-Creo un CICLO FOR per l'array
4.1.-Creo la colonna usando const
4.2.-Inserisco all'interno della colonna tutte le informazioni