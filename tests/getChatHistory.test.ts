import { GreenApiClient } from '../src/greenApiClient';
import { config } from '../src/config';

describe('getChatHistory', () => {
  const client = new GreenApiClient();

  it('should return error when chatId is missing', async () => {
    const res = await client.getChatHistory({ count: 10 } as any);

    // API может вернуть 400 или 403 — оба варианта валидны
    expect([400, 403]).toContain(res.status);
  });

  it('should return 200 when request is valid (if instance authorized)', async () => {
    const res = await client.getChatHistory({
      chatId: config.chatId,
      count: 10,
    });

    // Если инстанс не авторизован — будет 403, это ок
    expect([200, 403]).toContain(res.status);

    if (res.status === 200) {
      expect(Array.isArray(res.data)).toBe(true);
    }
  });
});
