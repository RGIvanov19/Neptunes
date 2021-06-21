var lang = {};

lang.bg = {
			_HOME: 'Нaчало',
			_AboutUs: 'За нас',
			_AboutPr: 'За програмата',
			_SIGNIN: 'Влизане',
			_SIGNUP: 'Регистрация',
			_UName: 'Потребителско име',
			_FName: 'Име',
			_LName: 'Фамилия',
			_Email: 'Имейл',
			_Password: 'Парола',
			_CPassword: 'Потвърди Паролата',
			_HAccount: 'Вече имате акаунт?',

};

lang.en = {
			_HOME: 'Home',
			_AboutUs: 'About us',
			_AboutPr: 'About programme',
			_SIGNIN: 'Sing in',
			_SIGNUP: 'Sing up',
			_UName: 'User name',
			_FName: 'First name',
			_LName: 'Last name',
			_Email: 'Email',
			_Password: 'Password',
			_CPassword: 'Confirm Password',
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
