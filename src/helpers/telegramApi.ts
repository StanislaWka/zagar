import axios from "axios";

const TOKEN = "5961678143:AAGhfQFqw83IP-XOMdpV_5juDLDG1DrAy50";
const CHAT_ID = "-887352776";

const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

interface IMessage {
  name: string;
  address: string;
  phoneNumber: string;
  extraRequirements: string;
}

export const sendMessage = ({
  name,
  address,
  phoneNumber,
  extraRequirements,
}: IMessage) => {
  let message = `<b>Заявка с сайта Zagar Minsk</b>\n`;
  message += `<b>Имя:</b> ${name}\n`;
  message += `<b>Адрес:</b> ${address}\n`;
  message += `<b>Контак для связи:</b> ${phoneNumber}\n`;
  message += `<b>Дополнительные услуги:</b> ${extraRequirements || 'Без дополнительных услуг'}\n`;

  axios.post(API_URL, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
};
