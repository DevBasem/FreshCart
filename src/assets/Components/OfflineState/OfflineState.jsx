/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { Detector } from "react-detect-offline";
import { IoWarningOutline } from "react-icons/io5";
import "./OfflineState.css";

export default function OfflineState() {
	return (
		<Detector
			render={({ online }) => (
				<AnimatePresence>
					{!online && (
						<motion.div
							key="offlineToast"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: "0.4",
							}}
						>
							<div className="fixed z-[99999999] offline-state-width flex justify-center items-center gap-1 text-center bottom-4 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full bg-yellow-400 bg-opacity-70 backdrop-blur-sm text-black">
								<IoWarningOutline className="text-xl min-w-6" />

								<p>You're offline. Check your connection.</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		/>
	);
}
