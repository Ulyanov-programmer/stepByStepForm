//? your scripts //

let formBlocksWrapper = document.querySelector('.main-form__blocks') as HTMLElement
let formBlocks = formBlocksWrapper.children as HTMLCollectionOf<HTMLElement>
let toggleActiveClassInBlocks = document.querySelectorAll('.step')

let submitButtons = document.querySelectorAll('.main-form__submit')
let returnButtons = document.querySelectorAll('.main-form__return')

let currentActiveBlockIndex = 0
let currentTranslateMultipler = currentActiveBlockIndex
let transitionTimeout = 500
formBlocksWrapper.style.display = 'flex'
formBlocksWrapper.style.flexFlow = 'row nowrap'

for (let formBlock of formBlocks) {
	formBlock.style.transition = `transform ${transitionTimeout}ms ease`
}
for (let submitButton of submitButtons) {
	submitButton.addEventListener('click', toggleNextFormBlock)
}
for (let returnButton of returnButtons) {
	returnButton.addEventListener('click', togglePrevFormBlock)
}

toggleActiveClassInBlocks[currentActiveBlockIndex].classList.add('active')
initFormBlocksRow()


function initFormBlocksRow() {
	let activeElement = formBlocks[currentActiveBlockIndex]
	let nextElement = formBlocks[currentActiveBlockIndex + 1]

	if (nextElement == undefined)
		return

	activeElement.style.transform = `translateX(0%)`
	nextElement.style.transform = `translateX(5%)`
}

function toggleNextFormBlock() {
	let activeElement = formBlocks[currentActiveBlockIndex]
	let nextElement = formBlocks[currentActiveBlockIndex + 1]
	let afterNextElement = formBlocks[currentActiveBlockIndex + 2]

	let activeBlock = toggleActiveClassInBlocks[currentActiveBlockIndex + 1]

	if (nextElement == undefined)
		return


	currentTranslateMultipler += 1

	activeElement.style.transform = `translateX(-${currentTranslateMultipler * 100 + 5}%)`
	if (activeBlock) {
		activeBlock.classList.add('active')
	}

	currentActiveBlockIndex += 1

	nextElement.style.transform = `translateX(-${currentTranslateMultipler * 100}%)`

	if (afterNextElement) {
		afterNextElement.style.transform = `translateX(-${currentTranslateMultipler * 100 - 5}%)`
	}
}
function togglePrevFormBlock() {
	let activeElement = formBlocks[currentActiveBlockIndex]
	let prevElement = formBlocks[currentActiveBlockIndex - 1]
	let beforePrevElement = formBlocks[currentActiveBlockIndex - 2]

	let activeBlock = toggleActiveClassInBlocks[currentActiveBlockIndex]

	if (prevElement == undefined)
		return


	currentTranslateMultipler -= 1

	let activeElementTransform = currentTranslateMultipler * 100 - 5
	if (activeElementTransform < 0) {
		activeElementTransform = 5
		activeElement.style.transform = `translateX(${activeElementTransform}%)`
	} else {
		activeElement.style.transform = `translateX(-${activeElementTransform}%)`
	}

	if (activeBlock) {
		activeBlock.classList.remove('active')
	}


	currentActiveBlockIndex -= 1

	prevElement.style.transform = `translateX(-${currentTranslateMultipler * 100}%)`

	if (beforePrevElement) {
		beforePrevElement.style.transform = `translateX(-${currentTranslateMultipler * 100 + 5}%)`
	}
}