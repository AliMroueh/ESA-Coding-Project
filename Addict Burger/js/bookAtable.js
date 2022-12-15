document.getElementById('btn').onclick = () => {
    let data = {
        name: document.getElementById('fname').value,
        nbtable: document.getElementById('ftable').value,
        phone: document.getElementById('fphone').value,
        date: document.getElementById('fdate').value,
        time: document.getElementById('ftime').value,
        people: document.getElementById('fpeople').value
        
        
    };
    console.log(data)

    fetch('http://localhost:90/testDelivery/inc/bookAtable.php', {
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