export default class Parser {
  decodeJSON(data) {
    return JSON.parse(data);
  }
  encodeJSON(data) {
    return JSON.stringify(data);
  }
}
