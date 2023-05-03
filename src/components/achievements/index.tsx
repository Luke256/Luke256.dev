import React from "react";
import Table from "../table";

const AchievementsView = () => {
    const Items: object = [
        ['2023-05', 'AtCoder Algorithm:1519 / Heuristic:1147'],
        ['2022-08', 'OnlineMathContest 988'],
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

    return <Table items={Items}></Table>
}

export default AchievementsView