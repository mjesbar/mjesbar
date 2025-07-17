
export class Colour {
  // constant colours
  static get white()          { return '#FCFCFC'; }
  static get whiteLow()       { return '#DCDCDC'; }
  static get black()          { return '#101010'; }
  static get blackLow()       { return '#303030'; }
  static get smokyBlack()     { return '#16161D'; }
  static get smokyBlackLow()  { return '#36363D'; }
  static get sage()           { return '#BBBBA0'; }
  static get sageLow()        { return '#9B9B80'; }
  static get persimmon()      { return '#EA580C'; }
  static get persimmonLow()   { return '#CA380C'; }
  static get persimmonDark()  { return '#A0280C'; }
  static get iceBlue()        { return '#9FFCED'; }
  static get iceBlueLow()     { return '#7FDCED'; }
  static get transparent()    { return 'transparent'; }
  static get transparent50()  { return 'rgba(0, 0, 0, 0.5)'; }
  static get transparent80()  { return 'rgba(0, 0, 0, 0.8)'; }

  // grayscale colours
  // 5 range from #BBBBBB to #505050
  static get gray100()        { return '#BBBBBB'; }
  static get gray80()         { return '#A0A0A0'; }
  static get gray60()         { return '#858585'; }
  static get gray40()         { return '#6A6A6A'; }
  static get gray20()         { return '#505050'; }
}
