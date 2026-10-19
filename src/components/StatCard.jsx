function StatCard({ value, label }) {
    return (
        <div className="flex w-full max-w-48 flex-col items-center justify-center rounded-lg bg-[#F3E6D5] px-8 py-5 text-center shadow-md">
            <p className="text-4xl font-bold">{value}</p>
            <p className="mt-2 text-lg text-black">{label}</p>
        </div>
    );
}

export default StatCard;