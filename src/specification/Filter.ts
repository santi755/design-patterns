import Specification from './Specification';

export default class Filter<T> {
  constructor(private items: T[]) {}

  filter(...specs: Specification<T>[]): T[] {
    return this.items.filter((item) =>
      specs.every((spec) => {
        return spec.isStatisfiedBy(item);
      }),
    );
  }
}
