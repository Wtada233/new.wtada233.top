import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 基础功能开关
	enable: true, // 启用音乐播放器功能

	// 使用方式：'meting' 或 'local'
	mode: "local", // "meting" 使用 Meting API，"local" 使用本地音乐列表

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",

		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",

		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",

		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237", // 网易云音乐歌单ID示例

		// 认证 token（可选）
		auth: "",

		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],

		// MetingJS 脚本路径
		// 默认使用 CDN：https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js
		// 备用CDN：https://unpkg.com/meting@2/dist/Meting.min.js
		// 也可配置为本地路径
		jsPath: "https://unpkg.com/meting@2/dist/Meting.min.js",
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local: {
		playlist: [
                                {
                                        name: "Lemon",
                                        artist: "米津玄師",
                                        url: "/assets/music/lemon/lemon.mp3",
                                        cover:
                                                "/assets/music/lemon/lemon.jpg",
                                        lrc: "[00:00.000]Lemon - 米津玄師 (よねづ けんし)[00:00.530]词：米津玄師[00:01.060]曲：米津玄師",
                                },
                                {
                                        name: "让风告诉你",
                                        artist: "花玲,喵☆酱,宴宁,kinsen",
                                        url: "/assets/music/demo/demo.mp3",
                                        cover:
                                                "/assets/music/demo/demo.jpg",
                                        lrc: "[00:00.000] 作词 : ChiliChill[00:00.281] 作曲 : ChiliChill[00:00.562] 编曲 : ChiliChill[00:00.843] 制作人 : ChiliChill[00:01.124]当你的天空突然下起了大雨[00:05.341]那是我在为你炸乌云[00:09.191]当你的发丝微乱有阵风吹过[00:13.341]那是我在远处想念你[00:33.808]你还在忙吗[00:34.375]还是在摸鱼[00:35.643]我看看 哇 好大一条[00:38.358]那个 摸完能不能借我炸一下[00:41.308]嘿嘿嘿[00:41.958]看起来你怎么不开心[00:44.075]虽然不知道发生了什么[00:46.108]吃饱了再去想吧[00:48.124]（这东西 能吃吗）[00:50.124]烦恼都走开 烦恼都走开[00:52.095]加班都走开 加班都走开[00:54.061]倒霉都走开 倒霉都走开[00:58.061]坏人都走开 坏人都走开[01:00.162]尴尬都走开 尴尬都走开[01:02.094]史莱姆走开 史莱姆走开[01:05.043]当你的天空突然下起了大雨[01:09.311]那是我在为你炸乌云[01:13.162]当你的发丝微乱有阵风吹过[01:17.345]那是我在远处想念你[01:38.476]你在忙吗[01:40.059]还是在摸鱼[01:41.992]我看看 哇 好大一条[01:46.425]那个 摸完能不能借她炸一下[01:50.709]嘿嘿嘿  哎 唱不完了……[01:54.700]不见万家灯火[01:56.849]尽斩世间妖魔[01:58.666]如此一切只为苍生不要想太多[02:02.649]平凡的起起落落[02:04.665]漂浮的因果对错[02:06.616]都可以向风诉说[02:09.182]当前面太多阻碍看不到对岸[02:13.068]请替我保密我为你炸平[02:17.083]虽然我讨厌热热乎乎的东西[02:21.510]我却想要拥抱你可以吗[02:26.211]（吟唱~）[02:39.657]如果你迷恋岁月舍不得向前[02:44.139]我就默默记录这诗篇[02:47.990]如果你厌倦引力想要去飞行[02:52.090]我就让全世界的风吹向你[02:57.056]当你的天空突然下起了大雨[03:01.257]那是我在为你炸乌云[03:05.006]当你的发丝微乱有阵风吹过[03:09.241]那是我在远处想念你[03:13.139]啦啦啦~[03:15.246] 演唱：[03:17.353] 可莉——花玲[03:19.460] 温迪——喵☆酱[03:21.567] 七七——宴宁[03:23.674] 魈——kinsen[03:25.781] [03:27.888] 编曲：ChiliChill[03:29.995] 贝斯：冯子明、山口进也[03:32.102] 长笛：Salit Lahav[03:34.209] 弦乐编写：胡静成[03:36.316] 小提琴：庞阔 / 张浩[03:38.423] 中提琴：毕芳[03:40.530] 大提琴：郎莹[03:42.637] 弦乐录音：李昕达@九紫天诚[03:44.744] 人声录音棚：YIHE Studio[03:46.851] 混音、母带：ChiliChill",
                                },
		],
	},

	// APlayer 配置选项
	player: {
		// 是否自动播放  浏览器可能会阻止，需用户交互一次网页后才自动播放
		autoplay: true,

		// 主题色
		theme: "var(--btn-regular-bg)",

		// 循环模式：'all'=列表循环, 'one'=单曲循环, 'none'=不循环
		loop: "one",

		// 播放顺序：'list'=列表顺序, 'random'=随机播放
		order: "list",

		// 预加载：'none'=不预加载, 'metadata'=预加载元数据, 'auto'=自动
		preload: "auto",

		// 默认音量 (0-1)
		volume: 0.7,

		// 是否互斥播放（同时只能播放一个播放器）
		mutex: true,

		// local歌词类型：0=不显示, 1=显示（需要提供 lrc 字段）, 2=显示（从 HTML 内容读取）
		lrcType: 1,

		// 歌词是否默认隐藏（当 lrcType 不为 0 时，可以通过此选项控制初始显示状态）
		// true=默认隐藏（用户可以通过歌词按钮手动显示）, false=默认显示
		lrcHidden: true,

		// 播放列表是否默认折叠
		listFolded: false,

		// 播放列表最大高度
		listMaxHeight: "340px",

		// localStorage 存储键名
		storageName: "aplayer-setting",
	},

	// 响应式配置
	responsive: {
		// 移动端配置
		mobile: {
			// 在移动端是否隐藏
			hide: false,

			// 移动端断点（小于此宽度时应用移动端配置）
			breakpoint: 768,
		},
	},
};
