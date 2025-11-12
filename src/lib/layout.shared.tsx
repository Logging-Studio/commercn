import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<div className="flex items-center gap-2">
					<Image src="/assets/logo.svg" alt="Logo" width={24} height={24} />
					<span>CommerCN</span>
				</div>
			),
		},
		githubUrl: "https://github.com/Logging-Studio/Commercn",
	};
}
