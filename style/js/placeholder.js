$(function(){if(!placeholderSupport()){$("[placeholder]").focus(function(){var l=$(this);if(l.val()==l.attr("placeholder")){l.val("");l.removeClass("placeholder")}}).blur(function(){var l=$(this);if(l.val()==""||l.val()==l.attr("placeholder")){l.addClass("placeholder");l.val(l.attr("placeholder"))}}).blur()}});function placeholderSupport(){return"placeholder"in document.createElement("input")}