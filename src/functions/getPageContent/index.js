import * as R from 'ramda';

const fn = ({ joinBy = '\n' }) =>
  R.pipe(
    R.prop('block'),
    R.values,
    R.filter(R.pathEq(['value', 'type'], 'text')),
    R.map(R.path(['value', 'properties', 'title', 0, 0])),
    R.join(joinBy),
  );

export default fn;
