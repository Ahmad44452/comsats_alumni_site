import axios from "axios";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import * as Styled from "../../Styles/Statistics.styled";
import useLoading from "../../hooks/useLoading";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState(null);
  const setGlobalLoading = useLoading();

  useEffect(() => {
    if (statisticsData === null) {
      setGlobalLoading(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERV}/api/getstatistics`)
        .then((res) => {
          setGlobalLoading(false);
          setStatisticsData(res.data);
        });
    }
  }, []);

  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Heading>Statistics</Styled.Heading>
      </Styled.Header>

      <Styled.GraphsContainer>

        <Styled.Graph>
          <Styled.GraphTitle>
            Employement Rate
          </Styled.GraphTitle>
          {statisticsData && (
            <BarChart
              width={500}
              height={300}
              data={statisticsData.employedStats}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" label={{ position: 'top' }}>
                <Cell key={`cell-0`} fill={'#8884d8'} />
                <Cell key={`cell-1`} fill={'#82ca9d'} />
              </Bar>
            </BarChart>
          )}
        </Styled.Graph>

        <Styled.Graph>
          <Styled.GraphTitle>
            Batch Stats
          </Styled.GraphTitle>
          {
            statisticsData && (
              <PieChart width={400} height={300}>
                <Pie
                  dataKey="value"
                  startAngle={360}
                  endAngle={0}
                  data={statisticsData.batchStats}
                  // cx="50%"
                  // cy="50%"
                  // outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {statisticsData.batchStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            )
          }
        </Styled.Graph>

        <Styled.Graph>
          <Styled.GraphTitle>
            Department Stats
          </Styled.GraphTitle>
          {
            statisticsData && (
              <PieChart width={400} height={300}>
                <Pie
                  dataKey="value"
                  startAngle={360}
                  endAngle={0}
                  data={statisticsData.departmentStats}
                  fill="#8884d8"
                  label
                >
                  {statisticsData.departmentStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            )
          }
        </Styled.Graph>
      </Styled.GraphsContainer>
    </Styled.Section>
  );
};

export default Statistics;
