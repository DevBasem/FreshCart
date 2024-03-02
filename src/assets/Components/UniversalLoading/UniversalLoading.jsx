import "./UniversalLoading.css";

export default function UniversalLoading() {
	return (
		<>
			<div className="flex justify-center items-center h-[90vh]">
				<div className="relative inline-flex">
					<div className="w-8 h-8 bg-slate-500 rounded-full" />
					<div className="w-8 h-8 bg-slate-500 rounded-full absolute top-0 left-0 animate-ping" />
					<div className="w-8 h-8 bg-slate-500 rounded-full absolute top-0 left-0 animate-pulse" />
				</div>
			</div>
		</>
	);
}
