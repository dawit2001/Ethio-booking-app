const axios = require("axios");
const options = {
  method: "POST",
  url: "https://api.chapa.co/v1/transaction/initialize",
  headers: {
    Authorization: "Bearer CHAPUBK_TEST-jyJ7DKFnnLQyBIXqYn4ePTDEcyu4OwTv",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: "100",
    currency: "ETB",
    email: "dawitgem@gmail.com",
    first_name: "Abebe",
    last_name: "Wondwosen",
    phone_number: "0913176534",
    tx_ref: "chewatatest-6669",
    callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    return_url: "http://localhost:3000/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments",
  }),
};

const InitializePayment = async () => {
  const response = await axios
    .post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        headers: {
          Authorization: "Bearer CHAPUBK_TEST-jyJ7DKFnnLQyBIXqYn4ePTDEcyu4OwTv",
          "Content-Type": "application/json",
        },
      },
      {
        body: JSON.stringify({
          amount: "100",
          currency: "ETB",
          email: "dawitgem@gmail.com",
          first_name: "Abebe",
          last_name: "Wondwosen",
          phone_number: "0913176534",
          tx_ref: "chewatatest-6669",
          callback_url:
            "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
          return_url: "http://localhost:3000/",
          "customization[title]": "Payment for my favourite merchant",
          "customization[description]": "I love online payments",
        }),
      }
    )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

module.exports = InitializePayment;
