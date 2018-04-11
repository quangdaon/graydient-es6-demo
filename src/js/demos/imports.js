import $ from 'jquery';
import createBabies from './imports2';

//$('body').css('background', 'pink');

// <button class="btn" data-value="1">Add 1</button>
const data = [1, 2, 3, 4, 5];

$('.btn').on('click', function () {
	data.map(e => e + $(this).data('value')); // this still refers to btn.
});

createBabies();