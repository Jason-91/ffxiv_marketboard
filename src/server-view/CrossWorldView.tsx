import NormalPricesTable from '../tables/NormalPricesTable';
import HighPricesTable from '../tables/HighPricesTable';
import NormalPurchaseTable from '../tables/NormalPurchaseTable'
import HighPurchaseTable from '../tables/HighPurchaseTable'
import './CrossWorldView.css';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
  );

function CrossWorldView() {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    return(
        <div className='cross-world-view'>
            <div className='summary-of-item'>
                <div>
                    <div><h2>Cheapest HQ</h2></div>
                    <div><h3>1 x 100,000</h3><h6>Server: Goblin- Total: 900,000</h6></div>
                </div>
                <div>
                    <h4> Cheapest NQ</h4>
                    1 x 100,000
                </div>
                <div>
                    <h4>Average Price Per Unit</h4>
                    1 x 100,000 
                </div>
            </div>
            
            <div className='purchase-history-graph'>
                <h1>CROSS-WORLD PURCHASE HISTORY</h1> 
                <div className='dummy-chart'>
                <Chart 
                    redraw={true}
                    type='line'
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'My First dataset',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 5, 2, 20, 30, 45],
                        }, {
                            type: 'bar',
                            label: 'Bar Dataset',
                            data: [10, 20, 30, 40],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)'
                        }]
                    }}
                />
            </div>
            </div>

            <div className='price-purchase-history-table'>
                <div className='normal-quality'>
                    <div>
                        <h1>NQ Prices</h1>
                        <NormalPricesTable></NormalPricesTable>
                    </div>
                    <div>
                        <h1>NQ Purchase History</h1>
                        <NormalPurchaseTable></NormalPurchaseTable>
                    </div>
                </div>
                <div className='high-quality'>
                    <div>
                        <h1>HQ Prices</h1>
                        <HighPricesTable></HighPricesTable>
                    </div>
                    <div>
                        <h1>HQ Purchase History</h1>
                        <HighPurchaseTable></HighPurchaseTable>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CrossWorldView