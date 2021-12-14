import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({chartTitle, data, dataKey}) {

    
    return (
        <div className="chart">
            <h3 className="chartTitle">{chartTitle}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKey} stroke="#060b26"/>
                    <Line type="monotone" dataKey="sales" stroke="#3cc3b5" />
                    <Tooltip />
                   
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
