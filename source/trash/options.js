// Saves options to chrome.storage
function save_options() {
    var needJoke=document.getElementById('needJoke').checked;
    var jokeText=document.getElementById('jokeText').value;
    var killIds=document.getElementById('killIds').value;
    chrome.storage.sync.set({
        needJoke:needJoke,
        jokeText:jokeText,
        killIds:killIds
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        needJoke:true,
        jokeText:"✝ 悪・即・斬 ✝",
        killIds:"taw,tvcap,bottomads"
    }, function (items) {
        document.getElementById('needJoke').checked = items.needJoke;
        document.getElementById('jokeText').value = items.jokeText;
        document.getElementById('killIds').value = items.killIds;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);