$(document).ready(function() {
    $('.filter-button').on('click', function() {
        $(this).toggleClass('clicked'); // Toggle 'clicked' class on the clicked button
        
        var filters = []; // Array to store selected filters
        $('.filter-button.clicked').each(function() {
            filters.push($(this).data('filter')); // Add selected filters to the array
        });
        
        if (filters.length > 0) {
            $('.project-item').hide();
            filters.forEach(function(filter) {
                $('.' + filter).show(); // Show project items with selected filters
            });
        } else {
            $('.project-item').show(); // If no filters selected, show all project items
        }
    });


    // $('.toggle-btn').on('click', function() {
    //     const targetId = $(this).data('target'); // the-client
    //     const content = $('#' + targetId); // #the-client
    //     const arrow = $(this).find('.arrow');

    //     if (content.css('display') === 'none') {
    //         content.show();
    //         arrow.addClass('open');
    //     } else {
    //         content.hide();
    //         arrow.removeClass('open');
    //     }
    // });
});