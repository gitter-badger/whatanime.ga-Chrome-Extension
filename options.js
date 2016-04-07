
function save_options() {
  var saveBtn = document.getElementById('saveBtn');
  saveBtn.disabled = true;
  var autoSearch = document.getElementById('autoSearch').checked;
  chrome.storage.sync.set({
    autoSearch: autoSearch
  }, function() {
    saveBtn.textContent = 'Saved';
    setTimeout(function() {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save';
    }, 1500);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    autoSearch: true
  }, function(options) {
    document.getElementById('autoSearch').checked = options.autoSearch;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('saveBtn').addEventListener('click', save_options);