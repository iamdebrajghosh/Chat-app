$(document).ready(function() {
    // Polling function to update the chat box
    function updateChat() {
        $.ajax({
            url: 'chatlog.html',
            cache: false,
            success: function(data) {
                $('#chat-box').html(data);
                $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
            }
        });
    }

    // Update chat every 2 seconds
    setInterval(updateChat, 2000);

    // Submit form using AJAX
    $('#chat-form').submit(function(e) {
        e.preventDefault();

        var message = $('#message').val();

        if (message.trim() !== '') {
            $.ajax({
                type: 'POST',
                url: 'php/chat.php',
                data: { message: message },
                success: function() {
                    $('#message').val('');
                    updateChat(); // Update chat after sending a message
                }
            });
        }
    });
});
