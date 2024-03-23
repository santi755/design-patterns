export default interface Specification<T> {
  isSatisfiedBy(item: T): boolean;
}
