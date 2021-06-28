var lang = {};

lang.bg = {
			_Icon: 'Вече имате акаунт?',
			_HOME: 'Нaчало',
			_AboutUs: 'За нас',
			_AboutAp: 'За приложението',
			_MoreI: 'Повече Информация',
			_ContentTitle1: 'Вода',
			_ContentTitle2: 'Опазване',
			_ContentParagraph1: 'Има мнго различни видове води, но сновните са подземни, повърхностни и морски води. Нашата планета сама по себе си е 72% вода, но малка част от нея е питейна.  Водите са един от най-важните ресурси за живота на нашата планета. Често чувате, че вредните въздействия се отразяват на всички живи организми.',

			_ContentParagraph2: 'За да нормалното съществуване на организмите те се нуждаят от чиста вода.Последните десетилетия замърсяването е нараснало деастично и трябва да се действа. Всички ВЕЦ-ове са задължени да имат пречиствателни филти за да може поне малкода се намали вредеата, но това не деостатъцно. Множество организаций събиратхора и пари за изчистването на замърсени райони. Множество видове вече са изгубени, но никога не е твърде късно. Подобна организация е "Да изчистим Българияза един ден". Целат не е само да се изчистят огромни тревни площи, а и да се съберат пари за построяването на съоражения предназначени за имерване на нивото,температурата и следенето на популацията на животинските видове във водата.',
};

lang.en = {
			_Icon: 'Вече имате акаунт?',
			_HOME: 'Home',
			_AboutUs: 'About us',
			_AboutAp: 'About application',
			_MoreI: 'More Info',
			_ContentTitle1: 'Water',
			_ContentTitle2: 'Preservation',
			_ContentParagraph1: 'There are many different types of water, but the main ones are groundwater, surface water and seawater. Our planet itself is 72% water, but a small part of it is drinkable. Water is one of the most important resources for life on our planet. You often hear that the harmful effects affect all living organisms.',

			_ContentParagraph2: "In order for organisms to exist normally, they need clean water. Pollution has increased dramatically in recent decades and action must be taken.All HPPs are required to have purification filters in order to be able to do at least a littleto reduce the damage, but this is not enough. Many organizations gatherpeople and money to clean up contaminated areas. Many species are alreadylost, but never too late. Such an organization is Let's clean Bulgariafor one day. The goal is not only to clear huge lawns, but also to raise money for the construction of facilities designed to measure the level, temperature and monitoring of the population of animal species in the water.",
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
