import home from "./home";
import menu from "./menu";
import contact from "./contact";
const content = document.getElementById('content');
const createDiv = () => {return document.createElement('div');}

function createHeader(container) {
    let header = createDiv();
    header.classList.add('header');

    let name = createDiv();
    name.classList.add('restaurant-name');
    name.textContent = 'Lieu de Salade';

    let tabs = createDiv();
    tabs.classList.add('tabs');

    let tab1 = createDiv();
    tab1.id = 'tab1';
    tab1.textContent = 'Home';
    tab1.classList.add('active');
    tab1.addEventListener('mousedown', ()=> {
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab1.classList.add('active');
        home(container);
    });

    let tab2 = createDiv();
    tab2.id = 'tab2';
    tab2.textContent = 'Menu';
    tab2.addEventListener('mousedown', ()=> {
        tab1.classList.remove('active');
        tab3.classList.remove('active');
        tab2.classList.add('active');
        menu(container);
    });

    let tab3 = createDiv();
    tab3.id = 'tab3';
    tab3.textContent = 'Contact';
    tab3.addEventListener('mousedown', ()=> {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.add('active');
        contact(container);
    });

    tabs.append(tab1,tab2,tab3);

    header.append(name,tabs);

    content.appendChild(header);
}

export default createHeader;