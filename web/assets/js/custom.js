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


		const sidebar = document.getElementsByClassName('sidebar-info')[0];

		const closeIcon = Array.from(document.querySelectorAll('.close-icon'));

		const addNew = document.getElementsByClassName('add-new')[0];
		const aboutProject = document.getElementsByClassName('about-project')[0];

		const sidebarTexts = [addNew, , aboutProject];

		var toggle = false;




		closeIcon.map( map => {
			map.addEventListener('click', function () {
			sidebar.style.transform = 'translateX(-367px)';
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
			arraOfTexts[index].style.opacity = '1';
		}


		function hideText(index) {
			arraOfTexts[index].style.opacity = '0';
		}




		function toggleSidebarOnClick(data) {

			const translateHideSidebar = () => {
				sidebar.style.transform = 'translateX(-367px)';
				toggle = false;
			}

			if (data === 1) {
				translateHideSidebar()
			}
			else if (!toggle) {
				sidebar.style.transform = 'translateX(0)';

				const newSidebarTexts = [...sidebarTexts];
				newSidebarTexts.splice(data, 1);

				newSidebarTexts.map( item => {
					if (item === undefined) return
					else{ item.style.display = 'none'}
				})

				sidebarTexts[data].style.display = 'block';

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

		const cities = ['Poprad', 'Prešov', 'Pezinok', 'Poltar', 'Pardubice', 'Puchov', 'Svidnik', 'Stropkov', 'Sabinov', 'Smizany', 'Senec', 'Senica', 'Spisska', 'Martin', 'Malacky', 'Medzilaborce']

		const listOfResults = document.getElementsByClassName('list-of-results')[0];

		let inputValue = document.getElementById('textbox_id');

		let lowerCaseCities = cities.map(city => city.toLowerCase())


		inputValue.addEventListener('input', event => {

			listOfResults.innerHTML = "";

			let actualValue = event.target.value.toLowerCase()

			let foundCities = lowerCaseCities.filter(el => !el.search(actualValue, 0))

			if (foundCities.length === cities.length) {
				return;
			}

			for (let i = 0; i < foundCities.length; i++) {
				const liElement = document.createElement('li');

				const link = document.createElement('a');
				Object.assign(link,{
								href: '../../detail.html'
				});


				link.innerHTML = foundCities[i].charAt(0).toUpperCase() + foundCities[i].slice(1);

				liElement.appendChild(link);
				listOfResults.appendChild(liElement);

			}

		})







	}

}

/* INIT FUNCTIONS */
Custom.toggleSidebar();
Custom.initAutocomplete();
