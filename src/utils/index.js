const Validate = require('./validate');
const {Response, commonResponse} = require('./response');


const utils = {}

utils.Validate = Validate;
utils.Response = Response;
utils.commonResponse = commonResponse;

module.exports = utils;