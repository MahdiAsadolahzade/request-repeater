// lib/request.ts
export async function request(
  url: string
): Promise<{ status: string; responseTime: number }> {
  const startTime = Date.now();

  try {
    const response = await fetch(url);
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    if (response.ok) {
      return { status: "ok", responseTime };
    } else {
      throw { status: "failed", responseTime, statusCode: response.status };
    }
  } catch (error: any) {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    throw {
      status: "failed",
      responseTime,
      statusCode: error.statusCode || 500,
    };
  }
}
