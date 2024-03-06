$(document).ready(function() {
    $('.filter-button').on('click', function() {
        var filter = $(this).data('filter');
        $('.project-item').hide();
        $('.' + filter).show();
    });
});