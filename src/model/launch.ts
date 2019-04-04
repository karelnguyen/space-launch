export default class Launch {
  constructor(
    public id: number,
    public name: string,
    public windowStart: string,
    public windowEnd: string,
    public locationName: string,
    public locationCountryCode: string
  ) {
    this.id = id;
    this.name = name;
    this.windowStart = windowStart;
    this.windowEnd = windowEnd;
    this.locationName = locationName;
    this.locationCountryCode = locationCountryCode;
  }
}
