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
		const addIcon = document.getElementsByClassName('menu-erb-icon');
		const searchIcon = document.getElementsByClassName('menu-search-icon');
		const infoIcon = document.getElementsByClassName('menu-info-icon')

		const addText = document.getElementsByClassName('menu-add-text');
		const infoText = document.getElementsByClassName('menu-info-text');
		const searchText = document.getElementsByClassName('menu-search-text');


		const arrayOfIcons = [addIcon[0], searchIcon[0], infoIcon[0]];
		const arraOfTexts = [addText[0], searchText[0], infoText[0]];

		arrayOfIcons.map( (icon,i) => {
			icon.addEventListener('mousemove', function() {
				showText(i)
			})

			icon.addEventListener('mouseout', function () {
				hideText(i)
			})
		})


		function showText(index) {
			arraOfTexts[index].style.color = ' #333333';
		}


		function hideText(index) {
			arraOfTexts[index].style.color = ' #ffffff';
		}

		console.log(arrayOfIcons, arraOfTexts);

	},

	/**
	 * manage live search
	 * when typing
	 */
	initAutocomplete: () => {

	}

}

/* INIT FUNCTIONS */
Custom.toggleSidebar();
Custom.initAutocomplete();
