//MILESTONE 0
//Struttura dati: Our Team

const our_team = [

    //Ogni membro del team deve avere i seguenti dati: Nome, Ruolo, Foto
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]

//MILESTONE 1
//Creare un console log per ogni membro del team, che mostri le informazioni di nome, ruolo e la stringa della foto

//Wayne Barnett
//console.log(our_team[0])

//Angela Caroll
//console.log(our_team[1])

//Walter Gordon
//console.log(our_team[2])

//Angela Lopez
//console.log(our_team[3])

//Scott Estrada
//console.log(our_team[4])

//Barbara Ramos
//console.log(our_team[5])

//Creo un CICLO FOR per l'array

for (let i = 0; i < our_team.length; i++){
    console.log(our_team[i].name, our_team[i].role, our_team[i].img)
}

//MILESTONE 2
//Creare un container che inserisca all'interno del DOM tutte le informazioni 
//Recupero dal DOM l'elemento in cui andare ad inserire le colonne con le informazioni

//Creo la colonna usando const

//Inserisco all'interno della colonna tutte le informazioni