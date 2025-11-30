import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	title: "", // 页面标题，如果留空则使用 i18n 中的翻译
	description: "", // 页面描述文本，如果留空则使用 i18n 中的翻译
	usage:
		"您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。", // 赞助用途说明
	// 是否显示赞助者列表
	showSponsorsList: true,
	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "Github",
			icon: "fa6-brands:github",
			qrCode: "",
			link: "https://github.com/Wtada233/",
			description: "给我的项目点个Star就是最大的支持",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
	],
};
