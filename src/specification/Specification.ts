export default interface Specification<T> {
  isStatisfiedBy(item: T): boolean;
}
