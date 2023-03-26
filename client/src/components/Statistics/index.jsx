import axios from "axios";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import * as Styled from "../../Styles/Statistics.styled";

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState(null);

  useEffect(() => {
    if (statisticsData === null) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_SERV}/api/getstatistics`)
        .then((res) => {
          console.log(res);
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
          {statisticsData && (
            <BarChart
              width={730}
              height={250}
              data={statisticsData.employedStats}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Legend />
              <Bar dataKey="employed" fill="#8884d8" />
              <Bar dataKey="unemployed" fill="#150cbd" />
            </BarChart>
          )}
        </Styled.Graph>
      </Styled.GraphsContainer>
    </Styled.Section>
  );
};

export default Statistics;
