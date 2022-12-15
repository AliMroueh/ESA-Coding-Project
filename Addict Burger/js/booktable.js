document.getElementById('submit').onclick = () => {
    let data = {
        name: document.getElementById('txt').value,
        nbtable: document.getElementById('txt').value,
        
    };

    fetch('http://localhost:90/testDelivery/takeaway.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response1) => response1.json())
        .then((data) => {
          console.log('Success:', data);
          location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }