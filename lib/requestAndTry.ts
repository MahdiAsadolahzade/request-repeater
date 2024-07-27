// lib/requestAndTry.ts
import { request } from "./request";

export async function requestAndTry(
  url: string,
  retry: number
): Promise<{
  try: number;
  status: boolean;
  timeSpent: number;
  statusCode?: number;
}> {
  let totalResponseTime = 0;
  let tryNumber = 0;
  let finalStatus = false;
  let statusCode;

  for (let i = 1; i <= retry; i++) {
    tryNumber = i;
    try {
      const result = await request(url);
      totalResponseTime += result.responseTime;
      finalStatus = true;
      break;
    } catch (failed: any) {
      totalResponseTime += failed.responseTime;
      finalStatus = false;
      statusCode = failed.statusCode;
    }
  }

  return {
    try: tryNumber,
    status: finalStatus,
    timeSpent: totalResponseTime,
    statusCode,
  };
}
