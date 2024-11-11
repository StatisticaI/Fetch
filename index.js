function myFetch(url, options = {}) {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            reject(`HTTP error: ${response.status}`);
          } else {
            response.json()
              .then(data => resolve(data))
              .catch(error => reject(`Error parsing data: ${error}`));
          }
        })
        .catch(error => {
          reject(`Request error: ${error}`);
        });
    });
  }
  