$(function(){
	$(".typed").typed({
strings: ["finansistką. . .", "fotografką. . .", "uzależniona od czekolady!", "finansistką."],
// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
stringsElement: null,
// typing speed
typeSpeed: 5,
// time before typing starts
startDelay: 2200,
// backspacing speed
backSpeed: 8,
// time before backspacing
backDelay: 2500,
// loop
loop: false,
// false = infinite
loopCount: 3,
// show cursor
showCursor: false,
// character for cursor
cursorChar: "|",
// attribute to type (null == text)
attr: null,
// either html or text
contentType: 'html',
// call when done callback function
callback: function() {},
// starting callback function before each string
preStringTyped: function() {},
//callback for every typed string
onStringTyped: function() {},
// callback for reset
resetCallback: function() {}
	});
});
