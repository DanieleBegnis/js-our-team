//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe


//creo array per rappresentare i membri del team
const colleagues = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social media manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]
console.log(colleagues)

//segno la lista dove inserisco i nomi
const mainList = document.querySelector('#text');
console.log(mainList)

//stampo in console le informaxzioni per ogni membro del team

//uso ciclo for per stampare in console
for (let i = 0; i < colleagues.length; i++) {
    colleague = colleagues[i];
    console.log(colleague);
    //creo il li da scrivere 6 volte con dati diversi
    const colleagueList = `
        <li> 
            <h4>${colleague.name}</h4> 
            <h5>${colleague.role}</h5>
            <p><img src="img/${colleague.image}" alt=""></p>
        </li>
    `
    mainList.innerHTML += colleagueList;
}

