document.getElementById('btn').onclick = () => {
    let data = {
        name: document.getElementById('name').value,
        time: document.getElementById('time').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        massage:document.getElementById('massage').value,
      
    };

    fetch('http://localhost:90/testDelivery/inc/takeaway.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response1) => response1.json())
        .then((data) => {
          console.log('Success:', data);
          //location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }