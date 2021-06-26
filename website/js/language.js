var lang = {};

lang.bg = {
			_Icon: 'Вече имате акаунт?',
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
			_AboutPrContent: 'Има мнго различни видове води, но сновните са подземни, повърхностни и морски води.Нашата планета сама по себе си е 72% вода, но малка част от нея е питейна. Водите са един от най-важните ресурси за живота на нашата планета. Често чувате, че вредните въздействия се отразяват на всички живи организми.',
};

lang.en = {
			_Icon: 'Вече имате акаунт?',
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
			_AboutPrContent: 'There are many different types of water, but the main ones are groundwater, surface water and seawater.Our planet itself is 72% water, but a small part of it is drinkable.Water is one of the most important resources for life on our planet.You often hear that the harmful effects affect all living organisms.',
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
