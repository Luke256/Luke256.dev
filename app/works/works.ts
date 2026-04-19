type WorksListItem = {
    title: string;
    description: string;
    slug: string;
    internal: boolean;
}

export const WorksList = [
    {
        title: "10パズル",
        description: "10パズルを解くためのアルゴリズムを実装したページです。",
        slug: "tenpuzzle",
        internal: true,
    },
    {
        title: "WAV Concatenator",
        description: "二つのWAVファイルからイントロ付きループ用音源に変換するウェブアプリです",
        slug: "https://wav-concat.luke256.dev",
        internal: false,
    },
    {
        title: "Suzume",
        description: "Go言語用のCLIツールのフレームワークです",
        slug: "https://github.com/luke256/suzume",
        internal: false
    },
    {
        title: "Q-Rush",
        description: "とあるゲームジャムで6時間くらいで作ったミニゲームです (音はありません)",
        slug: "q-rush",
        internal: true
    },
    {
        title: "Q-Rush (source)",
        description: "Q-Rushのソースコードです。OpenSiv3Dが必要です",
        slug: "https://github.com/luke256/q-rush",
        internal: false
    }
]

export type { WorksListItem };