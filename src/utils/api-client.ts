type ApiClientConstructor = {
  baseURL: string;
  authToken: string | null;
};

class APIClient {
  baseURL: string;
  authToken: string | null;

  constructor({ baseURL, authToken }: ApiClientConstructor) {
    this.baseURL = baseURL;
    this.authToken = null;
  }

  addAuthToken(token: string) {
    this.authToken = token;
  }

  async request<T>(url: string, options: RequestInit) {
    const response = await fetch(`${this.baseURL}${url}`, options);
    if (!response.ok) {
      const error = new Error('HTTP Error', {
        cause: response.statusText,
      });

      throw error;
    }
    return response.json() as Promise<T>;
  }

  get<T>(url: string, signal: AbortSignal | null = null) {
    return this.request<T>(url, {
      method: 'GET',
      signal: signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  post<T, B>(url: string, data: B, signal: AbortSignal | null = null) {
    return this.request<T>(url, {
      method: 'POST',
      signal: signal,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  put<T, B>(url: string, data: B, signal: AbortSignal | null = null) {
    return this.request<T>(url, {
      method: 'PUT',
      signal: signal,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  delete<T>(url: string, signal: AbortSignal | null = null) {
    return this.request<T>(url, {
      method: 'DELETE',
      signal: signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export const apiClient = new APIClient({
  baseURL: '',
  authToken: null,
});
