
// Komponenta pro vykreslení grafu leadů podle data
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface Props {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

export default function LeadsChart({ data, options }: Props) {
  return <Line data={data} options={options} />;
}
