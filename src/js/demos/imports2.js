import $ from 'jquery';
import babies from './babies.json';

babies.forEach(baby => {
	const {
		first_name: first,
		last_name: last,
		weeks: age,
		gender
	} = baby;

	const babyInfo = `${first} ${last} - ${age} weeks old`;

	const $babyElem = $('<div>');
	const $babyInfo = $('<p>')
		.text(babyInfo)
		.css('font-weight', 'bold');

	const color = gender === 'Male' ? '#439bb6' : '#fc6dff';

	$babyElem.css({
		color
	});

	$babyInfo.appendTo($babyElem);
	$babyElem.appendTo('body');
});
