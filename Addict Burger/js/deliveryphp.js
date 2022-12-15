document.getElementById('btn').onclick = () => {
    let data = {
       
        name: document.getElementById('name').value,
        time: document.getElementById('time').value,
        phone: document.getElementById('phone').value,
        datedelivery:null,
        date: document.getElementById('date').value,
        address: document.getElementById('note').value
        //city:document.getElementById('fcity').value,
      
       
      
    };
      console.log(data)
    fetch('http://localhost:90/testDelivery/inc/delivery.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response1) => response1.json())
        .then((data) => {
          console.log('Success:', data);
          // location.reload();
        })
        .catch((error) => {
         console.error('Error:', error);
        });
    }