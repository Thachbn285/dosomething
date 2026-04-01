export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = '/api', defaultHeaders: HeadersInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }

  async get<T>(path: string, options?: RequestInit): Promise<T> {
    return this.request<T>(path, { ...options, method: 'GET' });
  }

  async post<T>(path: string, body: any, options?: RequestInit): Promise<T> {
    return this.request<T>(path, { 
      ...options, 
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  async put<T>(path: string, body: any, options?: RequestInit): Promise<T> {
    return this.request<T>(path, { 
      ...options, 
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  async delete<T>(path: string, options?: RequestInit): Promise<T> {
    return this.request<T>(path, { ...options, method: 'DELETE' });
  }

  private async request<T>(path: string, options: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const fetchOptions: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };

    const response = await fetch(url, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    // Return null or undefined for 204 No Content
    if (response.status === 204) {
      return null as any as T;
    }

    return response.json();
  }
}

// Export a default instance
export const apiClient = new ApiClient();
