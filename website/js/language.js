var lang = {};

lang.bg = {
			_Icon: 'Вече имате акаунт?',
			_HOME: 'Нaчало',
			_AboutUs: 'За нас',
			_AboutAp: 'За проложението',
			_MoreI: 'Повече Информация',
};

lang.en = {
			_Icon: 'Вече имате акаунт?',
			_HOME: 'Home',
			_AboutUs: 'About us',
			_AboutAp: 'About application',
			_MoreI: 'More Info',
};


function translate(){

			//Get current language
			var current_lang = localStorage.getItem('current_lang');

			//Translate
			$.each( lang[current_lang], function( key, value ) {
				$('.'+key).text(value);
			});

			//Change Flag
			if(current_lang == 'en'){
				$('#flag').attr("src","https://img2.pngio.com/fileflag-of-great-britain-17071800svg-wikimedia-commons-great-britain-flag-png-1024_614.png");
			} else {
				$('#flag').attr("src","https://www.countryflags.com/wp-content/uploads/bulgaria-flag-png-large.png");
			}
}


function change_language(new_lang){
				localStorage.setItem('current_lang', new_lang);
				translate();
}


$(document).ready(function(){
	translate();
});
