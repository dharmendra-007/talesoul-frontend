const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions extends RequestInit {
  auth?: boolean;
}

export async function apiFetch<TResponse>(
  path: string,
  options: RequestOptions = {}
): Promise<TResponse> {
  const { headers, body, ...rest } = options;
  const isFormData = body instanceof FormData;

  const res = await fetch(`${API_BASE_URL}/api${path}`, {
    method: rest.method ?? "GET",
    headers: isFormData
      ? undefined
      : { "Content-Type": "application/json", ...(headers || {}) },
    credentials: "include",
    body,
    ...rest,
  });

  const data: unknown = await res.json().catch(() => ({}));

  if (!res.ok) {
    let message = "Something went wrong";

    if (typeof data === "object" && data !== null) {
      const record = data as Record<string, unknown>;

      if (typeof record.detail === "string") {
        message = record.detail;
      } else if (typeof record.message === "string") {
        message = record.message;
      } else if (typeof record.error === "string") {
        message = record.error;
      }
    }

    const error = new Error(message);
    (error as { response?: unknown }).response = data;
    throw error;
  }

  return data as TResponse;
}