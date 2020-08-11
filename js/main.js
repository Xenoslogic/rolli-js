
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






