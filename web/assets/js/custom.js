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
				document.getElementsByClassName('menu')[0].querySelectorAll('img')
				);

		const arraOfTexts = Array.from(
				document.getElementsByClassName('menu')[0].querySelectorAll('p')
				);


		const sidebar = document.getElementsByClassName('sidebar-info');

		const closeIcon = document.getElementsByClassName('close-icon')[0];

		var toggle = false;

		closeIcon.addEventListener('click', function () {
			sidebar[0].style.transform = 'translateX(-367px)';
			toggle = false;
		} )


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
			arraOfTexts[index].style.opacity = '1';
		}


		function hideText(index) {
			arraOfTexts[index].style.opacity = '0';
		}

		function toggleSidebarOnClick(data) {

			const translateHideSidebar = () => {
				sidebar[0].style.transform = 'translateX(-367px)';
				toggle = false;
			}

			if (data === 1) {
				translateHideSidebar()
			}
			else if (!toggle) {
				sidebar[0].style.transform = 'translateX(0)';
				toggle = true;
			} else {
				translateHideSidebar()
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
