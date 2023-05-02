const dataCache = {};

export function cacheData(href, data) {
  dataCache[href] = data;
}

export function getCachedData(href) {
  return dataCache[href];
}

export async function fetchData(href) {
  try {
    const response = await fetch(`https://your-aws-lambda-endpoint.com${href}`);
    const data = await response.json();

    // データをキャッシュに保存
    cacheData(href, data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
