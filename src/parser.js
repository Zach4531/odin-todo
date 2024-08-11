export default class Parser {
  static decodeJSON(data) {
    return JSON.parse(data);
  }
  static encodeJSON(data) {
    return JSON.stringify(data);
  }
}
