//Initialising variables
sidebar = document.querySelector('.sideBar')
burger = document.querySelector('.burger')
close = document.querySelector('.close')

burger.addEventListener('click', () => {
	sidebar.style.left = 0;
	sidebar.style.boxShadow = '0 0 0 10000px rgba(0, 0, 0, 0.5)'
	sidebar.style.opacity = 1;
})

close.addEventListener('click', () => {
	sidebar.style.left = '-400px'
	sidebar.style.boxShadow = '0 0 0 0'
	sidebar.style.opacity = 0;
})

Array.from(document.getElementsByClassName('sideBar-items')).forEach( e => {
	e.addEventListener('click', () => {
		sidebar.style.left = '-400px'
		sidebar.style.boxShadow = '0 0 0 0'
		sidebar.style.opacity = 0;
	})
})