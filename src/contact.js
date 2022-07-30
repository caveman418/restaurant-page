const createDiv = () => {return document.createElement('div');}

const contact = (container) => {
    container.textContent = ''; //clear the container's current content

    let module = createDiv();
    module.classList.add('module');
    module.innerHTML = "<span class='module-title'>Phone: </span><span>(123) 456-7890</span><br><span class='module-title'>Address: </span><span>Champ de Mars, 5 Av. Anatole France, 75007 Paris, France</span>"

    container.append(module);
}

export default contact;