import axios from "axios";
import { React } from "react"
import { FormContext } from "../context/FormContext";

const token = "6327859474:AAHeQ5Gi1iJVNis6icAUpZw6ksdiA0bfNMU";
const url = `https://api.telegram.org/bot${token}/sendMessage`;
const chat_id = 1247573660;

const { number } = React.useContext(FormContext);

const TelegramServiceBot = {
  submitOrders: (e) => {
    e.preventDefault();

    const orders = {
      number,
    };

    const newOrderMessage = `Phone: ${orders.number}`;

    axios.post(url, {
      chat_id: chat_id,
      text: newOrderMessage,
    });
  },
};

export default TelegramServiceBot;
