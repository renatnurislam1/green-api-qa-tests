import 'dotenv/config';

export const config = {
  baseUrl: process.env.GREEN_API_URL ?? 'https://api.green-api.com',
  idInstance: process.env.ID_INSTANCE ?? '',
  apiToken: process.env.API_TOKEN_INSTANCE ?? '',
  chatId: process.env.TEST_CHAT_ID ?? '',
};
