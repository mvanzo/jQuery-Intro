// Element
// $('h1').hide()
// Element with a specific id
// $('h1#heading1').hide()
// $('.heading2').hide()

// element within another element
// $('p span').css('color', 'red')

$('ul#list li:first').css('color', 'blue')
$('#list li:last').css('backgroundColor', 'green')
$('ul#list li:even').css('backgroundColor', 'yellow')
$('ul#list li:nth-child(3n)').css('list-style', 'none')

$(':button').hide()
// $(':text').hide()

// Attributes and their values
$('[href]').css('color', 'red')
$('a[href="http://yahoo.com"]').css('color', 'green')
// $('*').hide()