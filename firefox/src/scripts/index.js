$(function () {
	InitialSearchBox({ 
        openType: 'current' 
    });

    $('li').click(function() {
        if ($(this).data('href')) {
            let url = $(this).data('href');
            
            // Current Tab
            chrome.tabs.getCurrent (function (tab) {
                chrome.tabs.update(tab.id, { url: url });
            });
        }
    });
});