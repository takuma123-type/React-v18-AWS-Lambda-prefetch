exports.handler = async (event) => {
  const inputData = JSON.parse(event.body);

  // ここで他のサーバー側の処理を実行します。
  const processedData = processData(inputData);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: processedData }),
  };
};

function processData(data) {
  // データ処理ロジックの例
  return data.map((item) => item * 2);
}
