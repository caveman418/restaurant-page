const content = document.getElementById('content');
const createDiv = () => {return document.createElement('div');}

function createHeader() {
    let header = createDiv();
    header.classList.add('header');

    let name = createDiv();
    name.classList.add('restaurant-name');

    let tabs = createDiv();
    tabs.classList.add('tabs');

    let tab1 = createDiv();
    tab1.id = 'tab1';
    tab1.textContent = 'Home';
    tab1.classList.add('active');

    let tab2 = createDiv();
    tab2.id = 'tab2';
    tab2.textContent = 'Menu';

    let tab3 = createDiv();
    tab3.id = 'tab3';
    tab3.textContent = 'Contact';

    tabs.append(tab1,tab2,tab3);

    header.append(name,tabs);

    content.appendChild(header);
}

export default createHeader;