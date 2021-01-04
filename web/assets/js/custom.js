/**
 *
 * CUSTOM JS SNIPPETS
 * vanilla js, please
 *
 */

let Custom = {

	/**
	 * handle navigation
	 */
	toggleSidebar: () => {


		const arrayOfIcons = Array.from(
				document.getElementsByClassName('menu')[0].querySelectorAll('div')
				);


		const arrayOfTexts = Array.from(
				document.getElementsByClassName('menu')[0].querySelectorAll('p')
				);

		const arrayOfDarkIcons = Array.from(document.getElementsByClassName('menu-icon-dark'));


		const sidebar = document.getElementsByClassName('sidebar-info')[0];

		const closeIcon = Array.from(document.querySelectorAll('.close-icon'));

		const addNew = document.getElementsByClassName('add-new')[0];
		const aboutProject = document.getElementsByClassName('about-project')[0];

		const sidebarTexts = [addNew, , aboutProject];

		var toggle = false;
		var text;

		const innerW = window.innerWidth;


		closeIcon.map( map => {
			map.addEventListener('click', function () {
			translateHideSidebar();
			toggle = false;
			})
		})

		arrayOfIcons.map( (icon,i) => {
			icon.addEventListener('mousemove', function() {
				showText(i)
			})

			icon.addEventListener('mouseout', function () {
				hideText(i)
			})

			icon.addEventListener('click', function() {
				toggleSidebarOnClick(i)
			})
		})


		function showText(index) {
			arrayOfTexts[index].style.opacity = '1';
			arrayOfDarkIcons[index].style.opacity = 1;
		}

		function hideText(index) {
			arrayOfTexts[index].style.opacity = '0';
			arrayOfDarkIcons[index].style.opacity = 0;
		}


		document.addEventListener('keyup', event => {
			if (event.key === 'Escape') {
			translateHideSidebar();
			}
		})


		const translateHideSidebar = () => {
			if (window.innerWidth <= 992) {
				sidebar.classList.add('sidebar-mobile-hide');
				sidebar.classList.remove('sidebar-mobile-show');
			} else {
				sidebar.classList.add('sidebar-hide');
				sidebar.classList.remove('sidebar-show');
			}
		}


		const translateShowSidebar = () => {
			if (window.innerWidth <= 992) {
				sidebar.classList.add('sidebar-mobile-show');
				sidebar.classList.remove('sidebar-mobile-hide');
			} else {
 				sidebar.classList.add('sidebar-show');
				sidebar.classList.remove('sidebar-hide');
			}
		}

		const showSidebarText = (data) => {
			const newSidebarTexts = [...sidebarTexts];
			newSidebarTexts.splice(data, 1);

			newSidebarTexts.map(item => {
				if (item === undefined) return
				else { item.style.display = 'none' }
			})

			sidebarTexts[data].style.display = 'block';;

			text = data;
		}



		function toggleSidebarOnClick(data) {

			if (data === 1) {
				translateHideSidebar();
				toggle = false;
				return
			}

			if ( text !== data && toggle) {
				showSidebarText(data);
				return
			}

			else if (!toggle) {
				translateShowSidebar();
				showSidebarText(data);
				toggle = true;

			} else {
				translateHideSidebar();
				toggle = false;
			}

		}

	},

	/**
	 * manage live search
	 * when typing
	 */
	initAutocomplete: () => {


		const listOfResults = Array.from(document.querySelector('.list-of-results').children);

		let inputValue = document.getElementById('textbox_id');

		const capitalize = (word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}


		inputValue.addEventListener('input', event => {

			let actualValue = event.target.value.toLowerCase();

			listOfResults.forEach(element => {

				if (actualValue.length === 0) {
					element.style.display = 'none';
					return
				}

				let datsetNameAttr = element.children[0].dataset.name;

				let found =	datsetNameAttr.indexOf(actualValue, 0);


				if ( found !== -1 && found === 0) {
					element.style.display = 'block';
				} else {
					element.style.display = 'none';
				}

			});

		})




		const checkWidth = () => {
			const mq = window.matchMedia(`(max-width: 992px)`);
			changePlaceholder(mq.matches);
		}

		window.addEventListener("resize", function () {
			checkWidth();
		});

		changePlaceholder = (data) => {
			if (data) {
				inputValue.setAttribute("placeholder", "obec/mesto")
			} else {
				inputValue.setAttribute("placeholder", "Tu zadajte názov obce alebo mesta")
			}
		}
		const innerW = window.innerWidth;

		changePlaceholder(innerW <= 992)


	}

}

/* INIT FUNCTIONS */
Custom.toggleSidebar();
Custom.initAutocomplete();
