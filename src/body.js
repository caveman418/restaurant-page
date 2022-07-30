const content = document.getElementById('content');
const createDiv = () => {return document.createElement('div');}

const createBody = () => {
    let backgroundImage = document.createElement('img');
    backgroundImage.setAttribute('src', '../src/background-pic.jpg');
    backgroundImage.setAttribute('alt', 'salad pic');

    let main = createDiv();
    main.classList.add('main');

    let container = createDiv();
    container.classList.add('container');

    main.appendChild(container);

    content.append(backgroundImage,main);

    return container;
}

export default createBody;