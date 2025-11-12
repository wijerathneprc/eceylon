function leftScroll(container){
    container.scrollBy({
        left:100,
        behavior: 'smooth'
    });
}

function rightScroll(container){
    container.scrollBy({
        left: -100,
        behavior: 'smooth'
    });
}


document.getElementById('left-btn-customer').addEventListener('click', ()=>{
    const container = document.getElementsByClassName('customer-grid')[0];
    leftScroll(container);
});

document.getElementById('right-btn-customer').addEventListener('click', ()=>{
    let container = document.getElementsByClassName('customer-grid')[0];
    rightScroll(container);
});


document.getElementById('left-btn-new').addEventListener('click', ()=>{
    const container = document.getElementsByClassName('product-grid')[1];
    leftScroll(container);
});

document.getElementById('right-btn-new').addEventListener('click', ()=>{
    const container = document.getElementsByClassName('product-grid')[1];
    rightScroll(container);
});

document.getElementById('left-btn-discount').addEventListener('click', ()=>{
    const container = document.getElementsByClassName('product-grid')[0];
    leftScroll(container);
});

document.getElementById('right-btn-discount').addEventListener('click', ()=>{
    const container = document.getElementsByClassName('product-grid')[0];
    rightScroll(container);
});