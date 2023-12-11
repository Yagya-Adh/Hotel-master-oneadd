import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

// import { Doughnut } from 'react-chartjs-2';


const BarChart = () => {

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )

    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9],
                backgroundColor: ['aqua'],
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '333',
                data: [3, 3, 3],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const options = {

    }



    return (
        <div className="m-3 p-3 bg-neutral-900 text-sky-600">
            <Bar data={data}
                option={options}
            />
        </div>
    );
}


export default BarChart;