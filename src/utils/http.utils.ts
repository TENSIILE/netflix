import config from '@/config.json';

type MethodType = 'GET' | 'POST';

export const request = async <T>(
  url: string,
  method: MethodType = 'GET',
  body: string | null = null,
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`${config.SERVER_API}${url}`, {method, body, headers});

    if (!response.ok) {
      throw new Error('Произошла ошибка в запросе!');
    }

    return await response.json();
  } catch (e) {
    throw e;
  }
};
