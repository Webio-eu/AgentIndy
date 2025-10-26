import { creatPool } from '../lib/db/connect';
import { startOutboundCall } from '../lib/voice/startOutboundCall';

const runClassicCampaign = async () => {
  const pool = await creatPool();
  for (let item of pool) {
    const result = await startOutboundCall(opt.indexClItem);
    console.log(`* Call ${opt.indexClItem} result: ${result}`);
  }
};

runClassicCampaign();

export default runClassicCampaign