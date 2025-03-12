document.getElementById('OriginalButton').addEventListener('click', function() {
    var OriginalTNOTCWRI = document.getElementById('OriginalTNOTCWRI');
    var OriginalButton = document.getElementById('OriginalButton');
    var RemasteredButton = document.getElementById('RemasteredButton');
    var BS = document.getElementById('BS')
        OriginalTNOTCWRI.style.display = 'block';
        OriginalButton.style.display = 'none';
        RemasteredButton.style.display = 'none';
        BS.style.display = 'none';
    });
document.getElementById('RemasteredButton').addEventListener('click', function() {
    var RemasteredTNOTCWRI = document.getElementById('RemasteredTNOTCWRI');
    var OriginalButton = document.getElementById('OriginalButton');
    var RemasteredButton = document.getElementById('RemasteredButton');
    var BS = document.getElementById('BS')
        RemasteredTNOTCWRI.style.display = 'block';
        OriginalButton.style.display = 'none';
        RemasteredButton.style.display = 'none';
        BS.style.display = 'none';
    });