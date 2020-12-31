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

		const sidebar = document.getElementsByClassName('sidebar-info');

		const arrayOfIcons = [addIcon[0], searchIcon[0], infoIcon[0]];
		const arraOfTexts = [addText[0], searchText[0], infoText[0]];

		var toggle = false;

		arrayOfIcons.map( (icon,i) => {
			icon.addEventListener('mousemove', function() {
				showText(i)
			})

			icon.addEventListener('mouseout', function () {
				hideText(i)
			})


			icon.addEventListener('click', function() {
				toggleSidebarOnClick()
			})

		})


		function showText(index) {
			arraOfTexts[index].style.color = ' #333333';
		}


		function hideText(index) {
			arraOfTexts[index].style.color = ' #ffffff';
		}

		function toggleSidebarOnClick() {

			if (!toggle) {
				sidebar[0].style.left = '0';
				toggle = true;
				console.log(toggle);
			} else {
				sidebar[0].style.left = '-367px';
				toggle = false;
			}
		}




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
