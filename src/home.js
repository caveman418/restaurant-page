const createDiv = () => {return document.createElement('div');}

const home = (container) => {
    container.textContent = ''; //clear the container's current content

    let module1 = createDiv();
    module1.classList.add('module');
    module1.textContent = 'Come experience a one of a kind dining experience catered by world-class chefs from across the globe! View our menu and contact information using the links above.'

    let module2 = createDiv();
    module2.classList.add('module');
    module2.innerHTML = '<div class="module-title">Hours</div><div>Sunday: 9am - 11pm <br> Monday-Friday: 11am - 11pm <br> Saturday: 9am-Midnight</div>'

    container.append(module1,module2);
}

export default home;