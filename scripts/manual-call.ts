import { startOutboundCall } from '../lib/voice/startOutboundCall';

const to = process.argv[2];
if (!to) {
  console.error('O�–420123456789 je povinná.');
  process.exit(1);
}

startOutboundCall(to).then((id) => {
  console.log(`Spusten hovor: ${id}`);
});
