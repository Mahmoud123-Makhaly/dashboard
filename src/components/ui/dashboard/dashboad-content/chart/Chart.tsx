import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTranslate } from "@app/hooks";
import { data } from "./data";

const Chart = () => {
  const t = useTranslate("COMP_CHART");
  return (
    <div
      style={{ width: "100%" }}
      className="table-responsive bg-secondary p-3  rounded mb-3 mb-lg-0"
    >
      <h5 className="mb-3 text-info">{t("WEEKLY_RECAP")}</h5>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
