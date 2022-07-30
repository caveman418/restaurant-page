const content = document.getElementById('content');
const createDiv = () => {return document.createElement('div');}

const createFooter = () => {
    let footer = createDiv();
    footer.classList.add('footer');

    let copyright = document.createElement('a');
    copyright.classList.add('copyright-info');
    copyright.textContent = 'Background image provided by - Louis Hansel';
    copyright.setAttribute('href', 'https://unsplash.com/photos/MlPD-AzZYMg');

    let about = createDiv();
    about.classList.add('about-me');
    about.textContent = 'Matt Cave 2022';

    footer.append(copyright,about);

    content.append(footer);
}

export default createFooter;