document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById('category-filter'); // Фильтр категорий
    const priceFilter = document.getElementById('price-filter'); // Фильтр цен
    const products = document.querySelectorAll('.product'); // Все товары на странице

    // Функция для фильтрации товаров
    function filterProducts() {
        const selectedCategory = categoryFilter.value; // Получаем выбранную категорию
        const selectedPrice = priceFilter.value; // Получаем выбранный диапазон цен

        products.forEach(function(product) {
            const productCategory = product.getAttribute('data-category'); // Категория товара
            const productPrice = parseInt(product.getAttribute('data-price')); // Цена товара

            let showProduct = true;

            // Фильтрация по категории
            if (selectedCategory !== 'all' && productCategory !== selectedCategory) {
                showProduct = false;
            }

            // Фильтрация по цене
            if (selectedPrice !== 'all') {
                if (selectedPrice === '1' && productPrice > 10000) {
                    showProduct = false; // Прячем товары с ценой больше 10 000
                } else if (selectedPrice === '2' && (productPrice < 10000 || productPrice > 30000)) {
                    showProduct = false; // Прячем товары, цена которых меньше 10 000 или больше 30 000
                } else if (selectedPrice === '3' && (productPrice < 30000 || productPrice > 50000)) {
                    showProduct = false; // Прячем товары, цена которых меньше 30 000 или больше 50 000
                } else if (selectedPrice === '4' && productPrice <= 50000) {
                    showProduct = false; // Прячем товары, цена которых меньше или равна 50 000
                }
            }

            // Показываем или скрываем товар в зависимости от условий
            if (showProduct) {
                product.style.display = 'block'; // Показываем товар
            } else {
                product.style.display = 'none'; // Скрываем товар
            }
        });
    }

    // Слушаем изменения в фильтрах и обновляем отображение товаров
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);

    // Инициализация фильтрации при загрузке страницы
    filterProducts();
});
