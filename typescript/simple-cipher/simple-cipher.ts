class SimpleCipher {
  private readonly _abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  public key: string;

  constructor(_key?: string) {
    if (_key) {
      this.key = _key;
    } else {
      let key = '';
      for (let i = 0; i < 128; i++) {
        key += this._abc[Math.floor(Math.random() * 1e10) % this._abc.length]
      }
      this.key = key;
    }
  }

  encode(message: string): string {
    let encryptedMessage = '';
    let msg = message.toLowerCase().split('');
    for (let i = 0; i < msg.length; i++) {
      const adjustment = this._abc.indexOf(msg[i]);
      const keyAdjustment = this._abc.indexOf(this.key[i % this.key.length]);
      encryptedMessage += this._abc[(adjustment + keyAdjustment) % this._abc.length];
    }
    return encryptedMessage;
  }

  decode(encryptedMessage: string): string {
    let decryptedMessage = '';
    let msg = encryptedMessage.split('');
    for (let i = 0; i < msg.length; i++) {
      const adjustment = this._abc.indexOf(msg[i]);
      const keyAdjustment = this._abc.indexOf(this.key[i % this.key.length]);
      decryptedMessage += this._abc[((adjustment - keyAdjustment) + this._abc.length) % this._abc.length];
    }
    return decryptedMessage;
  }
}

export default SimpleCipher;
