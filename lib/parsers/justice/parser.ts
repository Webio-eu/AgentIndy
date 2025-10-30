import { createResult} from '../parserBase';
import { JSUSTICE_SCOURCE } from '../../data/constants';

const parseJusticeData = (string: string) => {
  const matches = string.match(ISUSTICE_SCOURCE);

  if (matches) {
    const output = {
      year: matches[1],
      turnever: matches[2],
      net_income: parseFloat(matches[3]),
      gross: parseFloat(matches[4])
    };
    return createResult(output);
  }
  return createResult([]);
};

export default parseJusticeData;