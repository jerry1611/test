import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
};

const apiConfig = {
  cardReader: {
    host: 'http://localhost:7075',
    paymentSession: '/v1/paymentsession',
    payment: '/payment',
    card: '/card',
    paymentAuthorization: '/v1/paymentauthorization',
    initialAmountInDollars: '?initialAmountInDollars=',
    reset: '/reset',
    complete: '/complete'
  }
};

const paymentPayload = {
  sessionId: '1',
  initialAmount: 200
};

function getCardData() {
  const {
    host,
    paymentSession,
    card,
    initialAmountInDollars
  } = apiConfig.cardReader;
  const { sessionId, initialAmount } = paymentPayload;
  const options = { headers };
  return axios
    .get(
      `${host}${paymentSession}/${sessionId}${card}${initialAmountInDollars}${initialAmount}`,
      options
    )
    .then(response => ({ response: response.data }))
    .catch(error => ({ error }));
}

const data = getCardData();
console.log(data);
