const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const path = event.path;
  const tableName = process.env.TABLE_NAME;

  const params = {
    TableName: tableName,
    Key: {
      path: path,
    },
  };

  try {
    const data = await dynamoDB.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
