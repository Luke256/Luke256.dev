
type Career = {
    date: string;
    description: string;
    important?: boolean;
};

const careerList: Career[] = [
    { date: "2020-12", description: "第20回 日本情報オリンピック ランクB" },
    { date: "2021-12", description: "第2回 学力向上アプリコンテスト デザイン優秀賞" },
    { date: "2021-12", description: "パソコン甲子園2021 46位" },
    { date: "2022-02", description: "第21回 日本情報オリンピック 本戦ランクC" },
    { date: "2022-04", description: "Google Code Jam 2022 Round 2 3112位" },
    { date: "2022-05", description: "第16回 アジア太平洋情報オリンピック 出場" },
    { date: "2022-12", description: "パソコン甲子園2022 70位" },
    { date: "2022-12", description: "応用情報技術者試験 合格", important: true },
    { date: "2023-02", description: "第22回日本情報オリンピック 本戦ランクB" },
    { date: "2023-11", description: "パソコン甲子園2023 本選出場" },
    { date: "2024-03", description: "情報科学の達人 4期生 第一段階修了" },
    { date: "2024-03", description: "OnlineMathContest 運営", important: true },
    { date: "2024-04", description: "東京工業大学情報理工学院入学", important: true },
    { date: "2024-12", description: "ISUCON14 全体115位 / 学生10位" },
    { date: "2025-07", description: "ICPC2025 Yokohama 予選75位" },
    { date: "2025-01", description: "SWIMMER OSINT 2025 176位 (Luke256)" },
    { date: "2026-07", description: "ICPC2025 Yokohama 予選30位" },
];

export default careerList;
export type { Career };
