export default class AtbashCipher {
  private readonly _key: {[s: string]: string} = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a',
  }

  public encode(message: string): string {
    const sanitizedMessage = message.toLowerCase().replace(/[^a-z0-9]/g, '');
    let encodedMessage = '';
    for (let i = 0; i < sanitizedMessage.length; i++) {

      encodedMessage += sanitizedMessage[i].match(/[0-9]/)
        ? sanitizedMessage[i]
        : this._key[sanitizedMessage[i]];
      if ((i + 1) % 5 === 0) {
        encodedMessage += ' ';
      }
    }
    if (encodedMessage[encodedMessage.length - 1] === ' ') {
      encodedMessage = encodedMessage.substr(0, encodedMessage.length - 1)
    }
    return encodedMessage;
  }

  public decode(encodedMessage: string): string {
    const sanitizedMessage = encodedMessage.replace(/[^a-z0-9]/g, '');
    let decodedMessage = '';
    for (let i = 0; i < sanitizedMessage.length; i++) {
      decodedMessage += sanitizedMessage[i].match(/[0-9]/)
        ? sanitizedMessage[i]
        : this._key[sanitizedMessage[i]];
    }
    return decodedMessage;
  }
}