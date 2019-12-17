export const submitForm = async data => {
  const res = await fetch(process.env.REACT_APP_ENDPOINT + "/submit", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (res.status !== 200) {
    throw Error(res.data);
  } else {
    return res;
  }
};
