var menuBtn = document.getElementsByClassName('navslinks');
var sortBtn = document.querySelector('.filter-menu').children;
var products = document.querySelector('.row-smartphone').children;

document.getElementById('default-filter').classList.add('current')
document.getElementById('default-nav').classList.add('current')
console.log(menuBtn);
for (var i = 0; i < menuBtn.length; i++) {
menuBtn[i].addEventListener('click', function () {
    for (var j = 0; j < menuBtn.length; j++) {
        menuBtn[j].classList.remove('current');
    }
    this.classList.add('current');
})}

for (var k = 0; k < products.length; k++) {
    products[k].classList.add('active');
}
for (var i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
        for (var j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current');
        }
        this.classList.add('current');
        var targetData = this.getAttribute('data-target');
        for (var k = 0; k < products.length; k++) {
            products[k].classList.remove('active');
            products[k].classList.add('delete');

            if (products[k].getAttribute('data-item') == targetData || targetData == 'all') {
                products[k].classList.remove('delete');
                products[k].classList.add('active');
            }
        }

    });
}