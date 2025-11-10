function toggleDisplay(element){
    if(element.style.display === 'none'){
        element.style.display = 'block';
    }else{
        element.style.display = 'none';
    }
}



function displayBrands(){
    let element = document.getElementsByClassName('brand-container')[0];
    toggleDisplay(element);
}

function displayCategories(){
    const element = document.getElementsByClassName('category-container')[0];
    toggleDisplay(element);
}

