function fetchData(path) {
  return db.ref(path).once('value')
    .then(snapshot => {
      const data = snapshot.val();
      // Check if data exists and is the expected type
      if (data && typeof data === 'string') {
        return data;
      } else {
        console.error('Error: Unexpected data type or missing data.');
        return null; // Or throw an error
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return null;
    });
}

// Example usage:
fetchData('/users/userId/name').then(userName => {
  if (userName) {
    console.log('User Name:', userName);
  }
});