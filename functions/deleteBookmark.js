const { DELETE_BOOKMARK } = require('./utils/queries');
const { getClient } = require('./utils/client');

exports.handler = async (event, context, callback) => {
  try {
    if (event.httpMethod !== 'DELETE') {
      return {
        statusCode: 405,
        body: JSON.stringify({
          error: 'only DELETE http method is allowed.'
        })
      };
    }
    const { _id: id } = JSON.parse(event.body);
    const variables = { id };
    const client = getClient({ method: 'DELETE' });
    const { data } = await client.mutate({
      mutation: DELETE_BOOKMARK,
      variables
    });
    const result = data.deleteBookmark;

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        'Something went wrong while deleting bookmark. Try again later.'
      )
    };
  }
};
