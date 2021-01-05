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
		let $menuItems = document.querySelectorAll(".js-menu-item");
		let $closeIcns = document.querySelectorAll(".js-close-sidebar");
		let $sidebar = document.getElementById("sidebar");
		let openSidebar = () => {
			$sidebar.classList.add("is-active");
		};
		let closeSidebar = () => {
			$sidebar.classList.remove("is-active");
		};
		let toggleContent = function() {
			let target = this.getAttribute("data-target");
			let $target = document.getElementById(target); 

			if( $sidebar.classList.contains("is-active") && $target.classList.contains("is-active") ){
				closeSidebar();
			} else {
				document.querySelectorAll(".sidebar-tab").forEach(el => el.classList.remove("is-active"));
				$target.classList.add("is-active");
				openSidebar();
			}
		};

		$menuItems.forEach(el => el.addEventListener("click", toggleContent));
		$closeIcns.forEach(el => el.addEventListener("click", closeSidebar));
	},

	/**
	 * manage live search
	 * when typing
	 */
	initAutocomplete: () => {
		let search = function(){
			let val = this.value.toLowerCase();
			let $results = document.querySelectorAll(".list-of-results li");

			$results.forEach(function(el){
				let name = el.querySelector("a").getAttribute("data-name");
				
				if( name.startsWith(val) && val ){
					el.style.display = "block";
				} else {
					el.style.display = "none";
				}
			});
		}

		document.getElementById("textbox_id").addEventListener("input", search);
	},

}

/* INIT FUNCTIONS */
Custom.toggleSidebar();
Custom.initAutocomplete();