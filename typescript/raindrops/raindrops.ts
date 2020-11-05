export default class Raindrops {
  public convert(num: number): string {
    let raindrop = '';
    raindrop += num % 3 === 0 ? 'Pling' : '';
    raindrop += num % 5 === 0 ? 'Plang' : '';
    raindrop += num % 7 === 0 ? 'Plong' : '';
    raindrop += raindrop.length === 0 ? num.toString() : '';
    return raindrop;
  }
}
