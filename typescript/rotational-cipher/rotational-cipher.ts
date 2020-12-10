export default class RotationalCipher {
  private static _abc = 'abcdefghijklmnopqrstuvwxyz'
  private static _ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  public static rotate(message: string, key: number): string {
    let encrypted = ''
    for (const letter of message) {
      if (this._abc.indexOf(letter) >= 0) {
        encrypted += this._abc[(this._abc.indexOf(letter) + key) % this._abc.length]
        continue
      }
      if (this._ABC.indexOf(letter) >= 0) {
        encrypted += this._ABC[(this._ABC.indexOf(letter) + key) % this._ABC.length]
        continue
      }
      encrypted += letter
    }
    return encrypted
  }
}
