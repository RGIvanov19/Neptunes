var lang = {};

lang.bg = {
			_HOME: 'Нчало',
			_SIGNIN: 'Влизане',
			_SIGNUP: 'Регистриране',

};

lang.en = {
			_HOME: 'Home',
			_SIGNIN: 'Sing in',
			_SIGNUP: 'Sing up',
};


function translate(){

			var current_lang = localStorage.getItem('current_lang');

			$.each( lang[current_lang], function( key, value ) {
				$('.'+key).text(value);
			});
}


function change_language(new_lang){
				localStorage.setItem('current_lang', new_lang);
				translate();
}


$(document).ready(function(){
	translate();
});
