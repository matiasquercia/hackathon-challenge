
const handleFetchs = (response) => {
    if (response.status === 204) {
      return;
    }
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    }
    if (response.status >= 400 && response.status <= 499) {
      response.json().then((res) => {
        //hacer algo con el error
        // si recibi 401 fue unauthorized, entonces solicitar nuevo token (por ejemplo redicrect al login)
        //console.log(error);
      });
    }
    throw Error(response.statusText);
};

export { handleFetchs };