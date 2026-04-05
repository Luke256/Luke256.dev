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
    }
]

export type { WorksListItem };