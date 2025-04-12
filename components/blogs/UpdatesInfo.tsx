
type Props = {
    createdAt: string;
    updatedAt: string;
}

const UpdatesInfo = ({ createdAt, updatedAt }: Props) => {
    return (
        <div className="text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-2">
                <span>作成日: {createdAt}</span>
                <span>更新日: {updatedAt}</span>
            </div>
        </div>
    );
};

export default UpdatesInfo;