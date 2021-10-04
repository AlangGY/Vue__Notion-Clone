exports.handler = async function () {
  return {
    statusCode : 200,
    body : JSON.stringify({
      name : 'Alang',
      age : 85,
      email : 'alang@abc.com'
    })
  };
};