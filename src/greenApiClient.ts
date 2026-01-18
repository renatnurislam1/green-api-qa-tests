import axios from 'axios';
import { config } from './config';

const api = axios.create({
  baseURL: config.baseUrl,
  validateStatus: () => true,
});

export class GreenApiClient {
  private buildUrl(path: string) {
    return `/waInstance${config.idInstance}${path}/${config.apiToken}`;
  }

  getStateInstance() {
    return api.get(this.buildUrl('/getStateInstance'));
  }

  sendMessage(body: { chatId?: string; message?: string }) {
    return api.post(this.buildUrl('/sendMessage'), body);
  }

  getChatHistory(body: { chatId?: string; count?: number }) {
    return api.post(this.buildUrl('/getChatHistory'), body);
  }
}
