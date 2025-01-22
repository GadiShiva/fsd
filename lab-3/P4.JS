function fetchData(callback) {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            const responseData = {
                id: 20,
                name: 'SHIVA',
                message: 'Data fetched successfully!',
            };
            callback(null, responseData);
        } else {
            const errorMessage = 'Error: Unable to fetch data.';
            callback(errorMessage, null);
        }
    }, 2000);
}

function handleResponse(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log('Received data:', data);
    }
}

fetchData(handleResponse);