const getFetch = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("error @ react-app/src/services/getFetch.js");
    return response.status;
  }
};

export default getFetch;
