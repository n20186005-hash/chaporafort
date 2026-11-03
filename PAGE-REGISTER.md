# 页面执行记录（Page execution register）

本文件对应《Chapora Fort SEO 扩展方案》第五节"执行与效果追踪"要求：为每个新增页面保留一条执行记录。

- 记录生成日期：2026-11-03
- 内容核实日期：2026-10-31（页面底部统一显示 `Last verified / निमाणें तपासलें`）
- 底层资料来源核查日期：2026-10-25（见 [SOURCES.md](./SOURCES.md)）
- 语言版本：康卡尼语（根路径 `/`）+ 英文（`/en/`），共 42 页 × 2 = 84 个页面
- 本地构建：`pnpm check`（0 error）与 `pnpm build` 通过，`scripts/verify-dist.mjs` 门禁全绿（96 页）

## 字段说明

| 字段 | 含义 |
| --- | --- |
| URL | 英文页 `/en/<slug>/`；康卡尼语页为根路径 `/<slug>/` |
| 状态 | 内容与路由均已生成并通过构建校验 |
| 资料来源 | `GOV`=果阿邦政府；`GTDC`=果阿旅游发展公司；`MAPS`=Google 地图地点快照；`AREA`=区域/场馆公开资料（含 Olive、Antares 官网）；`SYN`=以上资料的编辑综合 |
| 内链 | 每个详情页均含：返回核心首页入口、同类相关内链、相关行程内链；另有 `/guides/` 枢纽与首页分类入口 |
| 索引 | 尚未部署，故未提交 GSC；部署后按"GSC 验收"清单核对 |

所有页面均遵守统一编辑规则：声明独立非官方立场、历史优先引用 GOV/GTDC、费用与营业时间不写死并标注核实日期、不编造精确价格/距离/开放时间、canonical 与 hreflang（en / kok-Deva / x-default）与 Breadcrumb 正确、已进入 Sitemap。

## 记录表

| # | URL | 类别 | 优先级 | 目标搜索意图 | 状态 | 资料来源 | 核实日期 | 内链 | 索引 |
| -- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `/en/history/` | history | P0 | 堡垒历史时间线（1617–1892） | 已发布 | GOV, GTDC, MAPS | 2026-10-31 | 完整 | 待提交 |
| 2 | `/en/portuguese-maratha-conflicts/` | history | P2 | 1684/1717/1739 关键事件与政权更替 | 已发布 | GOV, GTDC | 2026-10-31 | 完整 | 待提交 |
| 3 | `/en/architecture/` | history | P1 | 红土石、城墙与防御布局 | 已发布 | GOV, GTDC | 2026-10-31 | 完整 | 待提交 |
| 4 | `/en/ruins-and-tunnels/` | history | P1 | 现存遗迹、隧道历史与安全参观 | 已发布 | GTDC, GOV | 2026-10-31 | 完整 | 待提交 |
| 5 | `/en/chapora-river-strategic-location/` | history | P1 | 河口地形与边境防御的关系 | 已发布 | GOV, GTDC | 2026-10-31 | 完整 | 待提交 |
| 6 | `/en/dil-chahta-hai-fort/` | history | P0 | 2001 年电影取景背景与影迷指南 | 已发布 | GTDC, MAPS | 2026-10-31 | 完整 | 待提交 |
| 7 | `/en/chapora-vs-aguada-fort/` | history | P2 | 两堡垒的历史、规模、交通取舍 | 已发布 | GOV, GTDC, MAPS | 2026-10-31 | 完整 | 待提交 |
| 8 | `/en/tickets-and-timings/` | visit | P0 | 门票、开放时段与最后入场 | 已发布 | GOV, GTDC, MAPS | 2026-10-31 | 完整 | 待提交 |
| 9 | `/en/trail-and-climb/` | visit | P0 | 登山入口、坡度、路面、体力和安全 | 已发布 | MAPS, GOV | 2026-10-31 | 完整 | 待提交 |
| 10 | `/en/parking/` | visit | P0 | 停车位置与停车后步行路线 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 11 | `/en/how-to-get-from-mapusa/` | visit | P0 | 公交、出租车、下车后步行 | 已发布 | MAPS, GTDC | 2026-10-31 | 完整 | 待提交 |
| 12 | `/en/how-to-get-from-panaji/` | visit | P1 | 公交换乘与驾车方案 | 已发布 | MAPS, GTDC | 2026-10-31 | 完整 | 待提交 |
| 13 | `/en/from-mopa-airport/` | visit | P1 | GOX 机场至堡垒的交通选择 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 14 | `/en/from-dabolim-airport/` | visit | P1 | GOI 机场至堡垒的交通选择 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 15 | `/en/from-thivim-station/` | visit | P1 | 火车站接驳与时间预算 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 16 | `/en/how-long-to-visit/` | visit | P0 | 45 / 90 / 120 分钟参观预算 | 已发布 | GOV, MAPS | 2026-10-31 | 完整 | 待提交 |
| 17 | `/en/best-time-and-sunset/` | visit | P0 | 季节、日照、拍摄时段与人流 | 已发布 | MAPS, GOV | 2026-10-31 | 完整 | 待提交 |
| 18 | `/en/visiting-during-monsoon/` | visit | P1 | 雨季湿滑、天气判断与取消条件 | 已发布 | GOV, MAPS | 2026-10-31 | 完整 | 待提交 |
| 19 | `/en/with-kids/` | visit | P1 | 亲子体力、安全风险与休息安排 | 已发布 | GOV, MAPS | 2026-10-31 | 完整 | 待提交 |
| 20 | `/en/accessibility-and-seniors/` | visit | P1 | 行动不便者与长者的适合程度 | 已发布 | GOV, MAPS | 2026-10-31 | 完整 | 待提交 |
| 21 | `/en/facilities-and-packing/` | visit | P0 | 饮水、遮阳、厕所、鞋子与随身物品 | 已发布 | GOV, MAPS | 2026-10-31 | 完整 | 待提交 |
| 22 | `/en/fort-to-vagator-beach/` | nearby | P0 | 堡垒至 Vagator 海滩的路线与安排 | 已发布 | MAPS, GTDC | 2026-10-31 | 完整 | 待提交 |
| 23 | `/en/fort-to-ozran-beach/` | nearby | P1 | 前往 Little Vagator 的道路与坡道 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 24 | `/en/fort-to-anjuna-beach/` | nearby | P1 | 交通方式、距离与沿途用餐 | 已发布 | MAPS, GTDC | 2026-10-31 | 完整 | 待提交 |
| 25 | `/en/anjuna-flea-market-nearby/` | nearby | P1 | 周三市场、购物与堡垒组合 | 已发布 | GTDC, MAPS | 2026-10-31 | 完整 | 待提交 |
| 26 | `/en/chapora-village-walk/` | nearby | P2 | Chapora 村落、河畔文化与步行路径 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 27 | `/en/chapora-fish-market/` | nearby | P2 | 当地渔业文化、市场位置与礼仪 | 已发布 | AREA | 2026-10-31 | 完整 | 待提交 |
| 28 | `/en/fort-to-morjim-beach/` | nearby | P2 | 驾车延伸、河口地理与海滩生态 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 29 | `/en/nearby-places-on-foot/` | nearby | P1 | 以步行可达性筛选附近景点 | 已发布 | MAPS | 2026-10-31 | 完整 | 待提交 |
| 30 | `/en/restaurants-near-chapora-fort/` | food | P0 | 餐厅总览（按距离、类型、用餐时段） | 已发布 | AREA, MAPS | 2026-10-31 | 完整 | 待提交 |
| 31 | `/en/cafes-and-quick-drinks/` | food | P1 | 登堡前后咖啡、饮料与短暂停留 | 已发布 | AREA, MAPS | 2026-10-31 | 完整 | 待提交 |
| 32 | `/en/goan-food-and-seafood/` | food | P1 | 果阿菜、海鲜与当地午餐 | 已发布 | AREA | 2026-10-31 | 完整 | 待提交 |
| 33 | `/en/breakfast-before-visit/` | food | P1 | 清晨出发、早餐时间与上山安排 | 已发布 | AREA, MAPS | 2026-10-31 | 完整 | 待提交 |
| 34 | `/en/sunset-dinner-vagator/` | food | P1 | 日落后餐厅、预订与晚间返程 | 已发布 | AREA, MAPS | 2026-10-31 | 完整 | 待提交 |
| 35 | `/en/90-minute-itinerary/` | itinerary | P0 | 时间有限者的上山、参观与下山安排 | 已发布 | SYN | 2026-10-31 | 完整 | 待提交 |
| 36 | `/en/fort-vagator-half-day/` | itinerary | P0 | 堡垒、海滩与午餐的半日动线 | 已发布 | SYN | 2026-10-31 | 完整 | 待提交 |
| 37 | `/en/fort-ozran-half-day/` | itinerary | P2 | 堡垒、海景咖啡与 Ozran 路线 | 已发布 | SYN | 2026-10-31 | 完整 | 待提交 |
| 38 | `/en/wednesday-anjuna-market-itinerary/` | itinerary | P1 | 周三市场与堡垒的一日组合 | 已发布 | GTDC, SYN | 2026-10-31 | 完整 | 待提交 |
| 39 | `/en/north-goa-forts-day-trip/` | itinerary | P2 | Chapora 与 Aguada 的历史文化路线 | 已发布 | GOV, SYN | 2026-10-31 | 完整 | 待提交 |
| 40 | `/en/chapora-without-a-car/` | itinerary | P1 | 公交出游、餐饮衔接与返程 | 已发布 | MAPS, SYN | 2026-10-31 | 完整 | 待提交 |
| 41 | `/en/family-morning-itinerary/` | itinerary | P2 | 亲子上午行程与提前结束方案 | 已发布 | SYN | 2026-10-31 | 完整 | 待提交 |
| 42 | `/en/rainy-day-alternatives/` | itinerary | P2 | 遇雨后的室内文化替代安排 | 已发布 | AREA, SYN | 2026-10-31 | 完整 | 待提交 |

> 说明：第 42 页提到 Museum of Goa 作为搭车延伸的室内备选，并明确说明其不在堡垒步行范围内、需核实交通与开放时间。

## P2 独立性复核（方案第三节要求）

对 9 个 P2 页面逐一核对内容独立性（渲染后 `<h2>` 章节数与 FAQ 条目数），全部形成独立价值，无需合并：

| P2 页面 | 章节数 | FAQ 条目 | 结论 |
| --- | --- | --- | --- |
| portuguese-maratha-conflicts | 8 | 2 | 保留（独立战役时间线） |
| chapora-vs-aguada-fort | 7 | 2 | 保留（双堡垒对比） |
| chapora-village-walk | 6 | 2 | 保留（村落步行） |
| chapora-fish-market | 6 | 2 | 保留（渔业文化） |
| fort-to-morjim-beach | 6 | 2 | 保留（驾车延伸） |
| fort-ozran-half-day | 6 | 1 | 保留（Ozran 专属动线） |
| north-goa-forts-day-trip | 6 | 1 | 保留（跨堡垒路线） |
| family-morning-itinerary | 5 | 2 | 保留（亲子专属） |
| rainy-day-alternatives | 5 | 2 | 保留（雨天替代，室内） |

## GSC 验收清单（部署后执行）

1. 提交 `sitemap-index.xml`，确认 42 页 × 2 语言全部被发现。
2. 检查索引覆盖：确认无"已发现但未编入索引"或重复 canonical。
3. 按页面核对曝光、目标查询与平均排名；优先加强排名 5–20 且已有曝光的页面（如 `chapora fort`、`chapora fort trail`、`chapora to vagator goa`）。
4. 观察 CTR：首页与门票/路线页的标题与描述表现。
5. 记录 P0（13 页）与 P1（20 页）两批的索引时间差，据结果决定 P2 的推广力度。

## 待办（超出已确认范围）

- 方案诊断提到 `chapora fort information in hindi` 与 `... in marathi` 的搜索需求；当前已确认范围为英文 + 康卡尼语。若后续扩展，可新增印地语 / 马拉地语入口。
