const { ADD_BOOKMARK } = require('./utils/queries');
const { getClient } = require('./utils/client');

exports.handler = async (event, context, callback) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({
          error: 'only POST http method is allowed.'
        })
      };
    }

    const { title, url, tag } = JSON.parse(event.body);
    const variables = { title, url, tag };
    const client = getClient();
    const { data } = await client.mutate({
      mutation: ADD_BOOKMARK,
      variables
    });
    const result = data.createBookmark;

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Something went wrong. Try again later!')
    };
  }
};
