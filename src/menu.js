const createDiv = () => {return document.createElement('div');}

const menu = (container) => {
    container.textContent = ''; //clear the container's current content

    let module1 = createDiv();
    module1.classList.add('module');
    module1.innerHTML = "<div class='module-title'>Chicken Alfredo - $18.49</div><div>Creamy alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, served with fettuccine pasta and topped with sliced grilled chicken. (1,570 cal)</div>";
    
    let module2 = createDiv();
    module2.classList.add('module');
    module2.innerHTML = "<div class='module-title'>Chicken and Shrimp Carbonara - $20.29</div><div>Sauteed seasoned chicken, shrimp and spaghetti tossed in a creamy sauce with bacon and roasted red peppers. (1,390 cal)</div>";
    
    let module3 = createDiv();
    module3.classList.add('module');
    module3.innerHTML = "<div class='module-title'>Lasagna Classico - $17.49</div><div>Prepared fresh daily with layers of pasta, parmesan, mozzarella, pecorino romano and our homemade meat sauce. (940 cal)</div>";

    container.append(module1,module2,module3);
}

export default menu;