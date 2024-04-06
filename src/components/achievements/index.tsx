import React from "react";
import Table from "../table";

type Props = {
    limit?: number;
}

const AchievementsView: React.FC<Props> = ({ limit = 100 }) => {
    const Items: string[][] = [
        ['2023-05', 'AtCoder Algorithm:1519 / Heuristic:1147'],
        ['2024-03', 'OnlineMathContest 運営'],
        ['2024-04', '東京工業大学情報理工学院入学'],
        ['2023-02', '第22回日本情報オリンピック 本戦ランクB'],
        ['2022-12', '応用情報技術者試験 合格'],
        ['2022-12', 'パソコン甲子園2022 70位'],
        ['2022-05', '第16回 アジア太平洋情報オリンピック 出場'],
        ['2022-04', 'Google Code Jam 2022 Round 2 3112位'],
        ['2022-02', '第21回 日本情報オリンピック 本戦ランクC'],
        ['2021-12', 'パソコン甲子園2021 46位'],
        ['2021-12', '第2回 学力向上アプリコンテスト デザイン優秀賞'],
        ['2020-12', '第20回 日本情報オリンピック ランクB'],
    ]

    return <Table items={Items.slice(0, limit)}></Table>
}

export default AchievementsView