export default class Prime {
  private isPrime(n: number): boolean {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  public nth(n: number): number {
    if (n < 1) { throw 'Prime is not possible' }
    const primes: number[] = []
    for (let i = 2; primes.length < n; i++) {
      if (this.isPrime(i)) {
        primes.push(i)
      }
    }
    return primes.pop() || 0
  }
}
