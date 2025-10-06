

export default function BoxContainer({ content = (<div>Container Content</div>) }){
    return(
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-blue-500/50">
            {content}
        </div>
    );
};