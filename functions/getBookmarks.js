const { GET_BOOKMARKS } = require('./utils/queries');
const { getClient } = require('./utils/client');

exports.handler = async (event, context, callback) => {
  try {
    const client = getClient();
    let { data } = await client.query({
      query: GET_BOOKMARKS
    });
    const result = data.bookmarks.data;
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        'Something went wrong while fetching bookmarks. Try again later.'
      )
    };
  }
};
