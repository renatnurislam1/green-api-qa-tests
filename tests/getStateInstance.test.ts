import { GreenApiClient } from '../src/greenApiClient';

describe('getStateInstance', () => {
  const client = new GreenApiClient();

  it('should return state or authorization error depending on instance state', async () => {
    const res = await client.getStateInstance();

    // API может вернуть 200 или 403 — оба варианта валидны
    expect([200, 403]).toContain(res.status);

    if (res.status === 200) {
      expect(res.data).toHaveProperty('stateInstance');
    }
  });
});
