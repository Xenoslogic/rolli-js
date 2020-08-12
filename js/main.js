
// Находим контролы управления (кнопки - и +).
let buttons = document.querySelectorAll('[data-action]');

// Для каждого контрола вешаем событие по клику.
buttons.forEach(function(item){
	item.addEventListener('click', function(){
// div со счетчиком
		let counterWrapper = this.closest('.counter-wrapper');
		let counter = counterWrapper.querySelector('[data-counter]');

// Для плюса - счетчик инкрементируем, для минуса - декрементируем (проверяем >1)
			if (this.dataset.action === 'plus'){
			
			counter.innerText = ++counter.innerText;
		} else {
			
			if (parseInt(counter.innerText) > 1) {
				counter.innerText = --counter.innerText;
			}
		}
	})
})

// Находим все кнопки добавить в корзину по data аттрибуту
let cartButtons = document.querySelectorAll('[data-cart]');

// Отслеживаем клик на кнопке в корзину
cartButtons.forEach(function(item){
	item.addEventListener('click', function(){
		// Определяем внутри какой карточки кликнули
		let currentCard = this.closest('.card');

		// собираем данные с этой карточки
		let imgSrc = currentCard.querySelector('.product-img').getAttribute('src');
		let title = currentCard.querySelector('.item-title').innerText;
		let pcsInBox = currentCard.querySelector('.text-muted').innerText;
		let counter = currentCard.querySelector('.items__current').innerText;
		let weight = currentCard.querySelector('.price__weight').innerText;
		let price = currentCard.querySelector('.price__currency').innerText;
		
		// собранные данные подставляем в шаблон для товара в корзине
		let cartItemHTML = `
							<div class="cart-item">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${title}</div>
										<div class="cart-item__weight">${pcsInBox} / ${weight}</div>

										
										<div class="cart-item__details">

											<div class="items items--small">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter>${counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${price}</div>
											</div>

										</div>
										

									</div>
								</div>
							</div>
							`;
		// находим в разметке место (.cart-wrapper) для добавления полученного
		let cartWrapper = document.querySelector('.cart-wrapper');						
		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		document.querySelector('.alert').classList.add('none');


	});

})







