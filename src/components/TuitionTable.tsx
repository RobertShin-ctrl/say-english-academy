import { TUITION_TABLE } from "@/lib/data";

export default function TuitionTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
      <table className="w-full text-sm min-w-[560px]" aria-label="수강료 안내">
        <thead>
          <tr className="bg-[#102A43] text-white">
            <th
              scope="col"
              className="text-left px-5 py-4 font-semibold rounded-tl-2xl"
            >
              대상
            </th>
            <th scope="col" className="text-left px-5 py-4 font-semibold">
              수업 횟수
            </th>
            <th scope="col" className="text-left px-5 py-4 font-semibold">
              과정
            </th>
            <th
              scope="col"
              className="text-right px-5 py-4 font-semibold rounded-tr-2xl"
            >
              수강료
            </th>
          </tr>
        </thead>
        <tbody>
          {TUITION_TABLE.map((row, i) => (
            <tr
              key={row.grade}
              className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
            >
              <td className="px-5 py-4 font-medium text-[#102A43]">
                {row.grade}
              </td>
              <td className="px-5 py-4 text-[#374151]">{row.daysPerWeek}</td>
              <td className="px-5 py-4 text-[#374151]">{row.course}</td>
              <td className="px-5 py-4 text-right">
                <span className="font-bold text-[#2563EB] text-base">
                  {row.fee}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-[#FFF7ED] px-5 py-3 rounded-b-2xl text-xs text-[#6B7280]">
        * 수강료는 변경될 수 있습니다. 정확한 금액은 상담을 통해 확인해 주세요.
      </div>
    </div>
  );
}
