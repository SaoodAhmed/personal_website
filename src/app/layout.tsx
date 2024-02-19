import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { PersonalData } from "@/page_data/page";
import Sidebar from "./components/sidebar";


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />

			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={PersonalData} />
				<main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}