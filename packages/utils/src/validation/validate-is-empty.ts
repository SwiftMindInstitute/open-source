import validateIsEqual from './validate-is-equal'

const validateIsEmpty = <A extends string>(a: A) => validateIsEqual(a, '')

export default validateIsEmpty
