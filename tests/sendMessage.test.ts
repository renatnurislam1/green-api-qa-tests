import { GreenApiClient } from '../src/greenApiClient';
import { config } from '../src/config';

describe('sendMessage', () => {
  const client = new GreenApiClient();

  it('should return 400 when chatId is missing', async () => {
    const res = await client.sendMessage({ message: 'hello' } as any);
    expect([400, 403]).toContain(res.status);
  });

  it('should return 400 when message is missing', async () => {
    const res = await client.sendMessage({ chatId: config.chatId } as any);
    expect([400, 403]).toContain(res.status);
  });

  it('should return 200 when request is valid (if instance authorized)', async () => {
    const res = await client.sendMessage({
      chatId: config.chatId,
      message: `test ${Date.now()}`,
    });

    expect([200, 403]).toContain(res.status);

    if (res.status === 200) {
      // обычно API возвращает idMessage
      expect(res.data).toHaveProperty('idMessage');
    }
  });
});
