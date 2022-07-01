import NormalPricesTable from '../tables/NormalPricesTable';
import HighPricesTable from '../tables/HighPricesTable';
import NormalPurchaseTable from '../tables/NormalPurchaseTable'
import HighPurchaseTable from '../tables/HighPurchaseTable'
import './IndividualWorldView.css';
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

function IndividualWorldView () {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];

    return (
        <div className='other-server-view'>
            <div className='summary-of-item'>
                <div>
                    <h4>Cheapest HQ</h4>
                    1 x 100,000
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
                <h1>SERVER NAME PURCHASE HISTORY</h1> 
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

export default IndividualWorldView