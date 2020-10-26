class SpaceAge {
  private earthYearSeconds = 31557600;

  private mercuryEarthYears = 0.2408467;
  private venusEarthYears = 0.61519726;
  private marsEarthYears = 1.8808158;
  private jupiterEarthYears = 11.862615;
  private saturnEarthYears = 29.447498;
  private uranusEarthYears = 84.016846;
  private neptuneEarthYears = 164.79132;

  constructor (public seconds: number) {}

  onEarth(): number {
    return Math.round(
      this.seconds * 100 / this.earthYearSeconds) / 100
  }

  onMercury(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.mercuryEarthYears * 100
      ) / 100;
  }
  onVenus(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.venusEarthYears * 100
      ) / 100;
  }
  onMars(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.marsEarthYears * 100
      ) / 100;
  }
  onJupiter(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.jupiterEarthYears * 100
      ) / 100;
  }
  onSaturn(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.saturnEarthYears * 100
      ) / 100;
  }
  onUranus(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.uranusEarthYears * 100
      ) / 100;
  }
  onNeptune(): number {
    return Math.round(
      this.seconds / this.earthYearSeconds / this.neptuneEarthYears * 100
      ) / 100;
  }
}

export default SpaceAge;