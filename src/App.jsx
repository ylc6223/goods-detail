import {useState} from 'react'
import MySwiper from "./components/swiper";
import Card from "@components/card";
import Tag from "@components/tag";
import Tabs from "@components/tabs";
import Backtop from "@/components/backtop";
import {Swiper, SwiperSlide} from 'swiper/react';
import beef from "@/assets/imgs/beef.png"
import halal from "@/assets/imgs/halal.png"
import duck from "@/assets/imgs/duck.png"
import meat from "@/assets/imgs/meat.png"
import goodDetail from "@/assets/imgs/goods-detail.png"
import './App.scss'
import 'swiper/css';

const tabs = [
    {label: '推荐加购'},
    {label: '相似商品'},
]

function App() {
    const [tabIndex, setTabIndex] = useState(0)
    const tabChange = ({index}) => {
        setTabIndex(index)
    }
    return (<main className="page">
        {/*头部 banner*/}
        <div className="header-banner w-full">
            <MySwiper/>
        </div>
        <div className="main-content">
            {/*基础信息*/}
            <Card title={{text: "[巴西93厂] 牛腩", size: 18, color: "#000000"}} header={{line: false}}>
                <div className="flex my-2 items-center gap-x-[6px]">
                    <Tag type="light-warning">新品</Tag>
                    <Tag type="light-success">清真</Tag>
                    <Tag type="light-info">易解冻</Tag>
                    <Tag type="light-pink" plain={true}>特价</Tag>
                </div>
                <p className="my-2 text-secondary">猪肉馅包子饺子，点心肠粉半成品</p>
                <div className="flex items-center bg-[#f8f8fa] rounded-[10px] py-3 px-5 overflow-x-auto">
                    <div className="flex flex-[0_0_auto] flex-col">
                        <span className="text-primary">质检报告</span>
                        <span className="text-secondary">
                                查看
                                <i className="iconfont icon-arrowleft rotate-180"></i>
                            </span>
                    </div>
                    <div className="divide-col"></div>
                    <div className="flex flex-[0_0_auto] flex-col">
                        <span className="text-primary">中国</span>
                        <span className="text-secondary">产地</span>
                    </div>
                    <div className="divide-col"></div>
                    <div className="flex flex-[0_0_auto] flex-col">
                        <span className="text-primary">1.6kg</span>
                        <span className="text-secondary">规格</span>
                    </div>
                    <div className="divide-col"></div>
                    <div className="flex flex-[0_0_auto] flex-col">
                        <span className="text-primary">365天</span>
                        <span className="text-secondary">保质期</span>
                    </div>
                    <div className="divide-col"></div>
                    <div className="flex flex-[0_0_auto] flex-col">
                        <span className="text-primary">冷冻</span>
                        <span className="text-secondary">贮存方式</span>
                    </div>
                </div>
            </Card>
            {/*活动/特价抄码*/}
            <Card>
                <div className="flex my-4">
                    <span className="flex items-start text-secondary w-[40px] mr-2">送至</span>
                    <div className="flex flex-col">
                        <span className="text-primary">碗碗香麻辣烫</span>
                        <span className="text-secondary">广州市番禺区汉溪长隆G口5号奈雪的茶一</span>
                    </div>
                </div>
                <div className="flex my-4">
                    <span className="flex items-center text-secondary w-[40px] mr-2 shrink-0">售后<span
                        className="indent-1 text-[#d24f49] align-super">*</span></span>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-primary">非质量问题不支持无理由退换货</span>
                        <span
                            className="flex-[0_0_20px] ml-1 text-[#ccc] iconfont icon-arrowleft rotate-180"></span>
                    </div>
                </div>
                <div className="flex my-4">
                    <span className="flex items-start text-secondary w-[40px] mr-2">活动</span>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex gap-x-[6px] overflow-x-auto">
                                <Tag type="light-pink" plain={true}>
                                    <span className="text-[12px]">
                                        满28.88减2.88
                                    </span>
                                </Tag>
                                <Tag type="light-pink" plain={true}>
                                    <span className="text-[12px]">
                                        满88.88减8.88
                                    </span>
                                </Tag>
                                <Tag type="light-pink" plain={true}>
                                    <span className="text-[12px]">
                                        满288.88减2.88
                                    </span>
                                </Tag>
                            </div>
                            <span
                                className="flex-[0_0_20px] ml-1 text-[#ccc] iconfont icon-arrowleft rotate-180"></span>
                        </div>
                        <div className="flex my-[10px]">
                            <div className="self-start mr-[6px]">
                                <Tag type="light-pink" plain={true}>
                                    <span className="text-[12px]">
                                        满赠
                                    </span>
                                </Tag>
                            </div>
                            <small className="max-w-[221px]">每买满1件送[安井] 黄金蛋饺1件、<br/>[鹰宏亿]
                                年糕小串1件</small>
                        </div>
                    </div>
                </div>
            </Card>
            {/*价格列表*/}
            <Card>
                <div>
                    <div className="flex my-2 items-center justify-between">
                        <div className="flex items-center">
                            <span className="inline-block text-base font-medium mr-[10px]">
                                一件 (10包)
                            </span>
                            <Tag type="gray" plain={true}>
                            <span className="text-[12px] leading-4">
                                ¥6.54/斤
                            </span>
                            </Tag>
                        </div>
                        <div>
                            <button
                                className="w-[30px] h-[30px] box-border rounded-full bg-white border-solid border-[1px] border-[#FCC7B0] text-warning iconfont icon-minus"></button>
                            <small className="w-8 inline-block text-[#333] font-medium leading-6 text-center">3</small>
                            <button
                                className="w-[30px] h-[30px] box-border rounded-full bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white iconfont icon-plus"></button>
                        </div>
                    </div>
                    <div className="flex my-2 items-center">
                        <small className="text-danger text-sm">
                            ¥<span className="text-xl leading-6">133.47</span>
                        </small>
                    </div>
                    <div
                        className="flex my-2 items-center justify-between bg-[#F8F8FA] border-[#EEE] rounded-[10px] p-3">
                        <span className="text-sm leading-5 text-[#666]">
                            每满5包减4.1 (¥40/包)
                        </span>
                        <button
                            className="flex items-center justify-center w-[52px] h-[26px] italic text-white text-2xl text-center font-['Fugaz One'] bg-gradient-to-r from-[#47CF3E] to-[#3BB610] rounded-[15px]">
                            <span className="text-base font-bold">+5</span>
                        </button>
                    </div>
                </div>
                <div className="divide-row"></div>
                {/* =======================   */}
                <div>
                    <div className="flex my-2 items-center justify-between">
                        <div className="flex items-center">
                            <span className="inline-block text-base font-medium mr-[10px]">
                                一件 (10包)
                            </span>
                            <Tag type="gray" plain={true}>
                            <span className="text-[12px] leading-4">
                                ¥6.35/斤
                            </span>
                            </Tag>
                        </div>
                        <div>
                            <button
                                className="w-[30px] h-[30px] box-border rounded-full bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white iconfont icon-plus"></button>
                        </div>
                    </div>
                    <div className="flex my-2 items-center">
                        <small className="text-danger text-sm">
                            ¥<span className="text-xl leading-6">146.72</span>
                            <del className={'text-[#999] text-sm'}>159.67</del>
                        </small>
                    </div>
                    <div className="bg-[#F8F8FA] border-[#EEE] rounded-[10px] p-3">
                        <div
                            className="flex my-2 items-center justify-between">
                        <span className="text-sm leading-5 text-[#666]">
                            每满5包减4.1 (¥40/包)
                        </span>
                            <button
                                className="flex items-center justify-center w-[52px] h-[26px] italic text-white text-2xl text-center font-['Fugaz One'] bg-gradient-to-r from-[#47CF3E] to-[#3BB610] rounded-[15px]">
                                <span className="text-base font-bold">+5</span>
                            </button>
                        </div>
                        <div
                            className="flex my-2 items-center justify-between">
                        <span className="text-sm leading-5 text-[#666]">
                            每满10包减6.1 (¥38/包)
                        </span>
                            <button
                                className="flex items-center justify-center w-[52px] h-[26px] italic text-white text-2xl text-center font-['Fugaz One'] bg-gradient-to-r from-[#47CF3E] to-[#3BB610] rounded-[15px]">
                                <span className="text-base font-bold">+10</span>
                            </button>
                        </div>
                    </div>


                </div>
            </Card>
            {/* 排行榜   */}
            <Card>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-primary italic">榜单</span>
                        <span className="divide-col h-3 mx-[10px] inline-block bg-[#eee]"></span>
                        <span className="text-primary leading-5">
                            晓餐推荐卤味鸭货-鸭腿
                            <span className="ml-1">
                                第<span className="text-danger font-[600]">3</span>名
                            </span>
                        </span>
                    </div>
                </div>
            </Card>
            {/* 推荐加购   */}
            <Card>
                {/*  tab  */}
                <div className="flex flex-col">
                    <div className="mb-5">
                        <Tabs tabs={tabs} width={168} sliderWidth={20} onTabChange={tabChange} padding={0}
                              tabSpacing={20}/>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            className="w-full"
                        >
                            <SwiperSlide className="w-[142px] h-[250px]">
                                <div className="flex flex-col h-full">
                                    <div className="relative w-[142px] h-[142px] flex">
                                        <img
                                            className="absolute object-fill w-full h-full left-0 right-0 top-0 bottom-0 rounded-[6px] overflow-hidden"
                                            src={beef} alt=""/>
                                        <div className="self-start absolute left-1 bottom-1">
                                            <Tag type="warning">
                                                <span className="text-[11px] leading-4">买过</span>
                                            </Tag>
                                        </div>
                                        <div className="self-start absolute right-1 bottom-1">
                                            <Tag type="info">
                                                <span className="text-[11px] leading-4">易解冻</span>
                                            </Tag>
                                        </div>
                                    </div>
                                    <div className="w-full my-[6px]">
                                        <small
                                            className="inline-block h-[40px] text-primary text-ellipsis overflow-ellipsis">
                                            [新西兰星牌] 牛肚片牛肚片
                                        </small>
                                        <div className="flex gap-x-[6px] overflow-x-auto">
                                            <div className="self-start shrink-0">
                                                <Tag type="light-pink" plain={true}>
                                                    <span className="text-[10px]">特价</span>
                                                </Tag>
                                            </div>
                                            <div className="self-start shrink-0">
                                                <Tag type="light-pink" plain={true}>
                                                    <span className="text-[10px]">限时折扣</span>
                                                </Tag>
                                            </div>
                                            <div className="self-start shrink-0">
                                                <Tag type="light-pink" plain={true}>
                                                    <span className="text-[10px]">领38.88红包</span>
                                                </Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <small className="text-danger text-[18px] leading-5">¥2533.97</small>
                                            <span className="text-secondary">/包</span>
                                        </div>
                                        <button
                                            className="iconfont icon-cart w-[26px] flex items-center justify-center h-[26px] rounded-full bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white"></button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="w-[142px] h-[250px]">
                                <div className="flex flex-col h-full">
                                    <div className="relative w-[142px] h-[142px] flex">
                                        <img
                                            className="absolute object-fill w-full h-full left-0 right-0 top-0 bottom-0 rounded-[6px] overflow-hidden"
                                            src={duck} alt=""/>
                                        <div className="self-start absolute right-1 bottom-1">
                                            <Tag type="info">
                                                <span className="text-[11px] leading-4">易解冻</span>
                                            </Tag>
                                        </div>
                                    </div>
                                    <div className="w-full my-[6px]">
                                        <small
                                            className="inline-block h-[40px] text-primary text-ellipsis overflow-ellipsis">
                                            [长江桂柳] 大白条鸭(5.0斤*6只) 15kg15k...
                                        </small>
                                        <div className="flex gap-x-[6px] overflow-x-auto">
                                            <div className="self-start shrink-0">
                                                <Tag type="light-pink" plain={true}>
                                                    <span className="text-[10px]">满赠</span>
                                                </Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <small className="text-danger text-[18px] leading-5">¥71.18</small>
                                            <span className="text-secondary">/斤</span>
                                        </div>
                                        <button
                                            className="iconfont icon-cart w-[26px] flex items-center justify-center h-[26px] rounded-full bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white"></button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="w-[142px] h-[250px]">
                                <div className="flex flex-col h-full">
                                    <div className="relative w-[142px] h-[142px] flex">
                                        <img
                                            className="absolute object-fill w-full h-full left-0 right-0 top-0 bottom-0 rounded-[6px] overflow-hidden"
                                            src={meat} alt=""/>
                                        <div className="self-start absolute right-1 bottom-1">
                                            <Tag type="info">
                                                <span className="text-[11px] leading-4">易解冻</span>
                                            </Tag>
                                        </div>
                                    </div>
                                    <div className="w-full my-[6px]">
                                        <small
                                            className="inline-block h-[40px] text-primary text-ellipsis overflow-ellipsis">
                                            [九帝] 肉排粒/排骨
                                        </small>
                                        <div className="flex gap-x-[6px] overflow-x-auto">
                                            <div className="self-start shrink-0">
                                                <Tag type="light-pink" plain={true}>
                                                    <span className="text-[10px]">满赠</span>
                                                </Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <small className="text-danger text-[18px] leading-5">¥14.45</small>
                                            <span className="text-secondary">/斤</span>
                                        </div>
                                        <button
                                            className="iconfont icon-cart w-[26px] flex items-center justify-center h-[26px] rounded-full bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white"></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Card>
            {/* 商品详情   */}
            <Card title={{text: "商品详情", size: 16, color: "#333"}} header={{line: false}}>
                <div className="mt-4 h-[484px] overflow-hidden">
                    <img className="w-full object-cover" src={goodDetail} alt=""/>
                </div>
            </Card>
            {/* 常见问题   */}
            <Card title={{text: "常见问题", size: 16, color: "#333"}} header={{line: false}}>
                <ul>
                    <li>
                        <div className="mt-3 mb-[14px] flex items-center">
                            <span
                                className="w-[20px] h-[20px] flex items-center text-[#F87036] rounded-full iconfont icon-question-circle-fill"></span>
                            <span className="text-sm text-black leading-5 font-[600]">购买运费如何收取</span>
                        </div>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            自营车队配送范围内单笔订单金额（不含运费）满<span
                            className="text-sm text-[#666] leading-5 font-[600]">199元</span>免配送费
                        </p>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            单笔订单不满<span className="text-sm text-[#666] leading-5 font-[600]">199元</span>，每单收取<span
                            className="text-sm text-[#666] leading-5 font-[600]">9元</span>配送费
                        </p>
                    </li>
                    <li>
                        <div className="mt-3 mb-[14px] flex items-center">
                            <span
                                className="w-[20px] h-[20px] flex items-center text-[#F87036] rounded-full iconfont icon-question-circle-fill"></span>
                            <span className="text-sm text-black leading-5 font-[600]">使用什么物流发货？</span>
                        </div>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            晓餐同城配送车队可覆盖至<span
                            className="text-sm text-[#666] leading-5 font-[600]">广州、佛山、中山、东莞、深圳</span>
                        </p>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            其他周边地市可以走物流，详询在线客服
                        </p>
                    </li>
                    <li>
                        <div className="mt-3 mb-[14px] flex items-center">
                            <span
                                className="w-[20px] h-[20px] flex items-center text-[#F87036] rounded-full iconfont icon-question-circle-fill"></span>如何申请退货？
                        </div>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            请联系<span
                            className="text-sm text-[#666] leading-5 font-[600]">电话客服</span>申请无忧退货，退款原路返还，一般退货次日到账，不同的银行处理时间不同，周日财务休息不处理退款
                        </p>
                    </li>
                    <li>
                        <div className="mt-3 mb-[14px] flex items-center">
                            <span
                                className="w-[20px] h-[20px] flex items-center text-[#F87036] rounded-full iconfont icon-question-circle-fill"></span>
                            <span className="text-sm text-black leading-5 font-[600]">可以指定配送时间吗？</span>
                        </div>
                        <p className="pl-[22px] text-secondary mb-[10px]">
                            为保证配送效率，按最优线路沿途配送，无法指定具体到达时间
                        </p>
                    </li>
                    <li>
                        <div className="mt-3 mb-[14px] flex items-center">
                            <span
                                className="w-[20px] h-[20px] flex items-center text-[#F87036] rounded-full iconfont icon-question-circle-fill"></span>
                            <span className="text-sm text-black leading-5 font-[600]">退换货规则</span>
                        </div>
                        <div className="pl-[22px]">
                            <div className="mb-[10px]">
                                <Tag type="warning">
                                    <span className="text-[12px] leading-4">城配订单</span>
                                </Tag>
                            </div>
                            <p className="text-secondary mb-[10px]">
                                1.质量问题请于收货<span
                                className="text-sm text-[#666] leading-5 font-[600]">72小时内</span>及时联系客服申请售后
                            </p>
                            <p className="text-secondary mb-[10px]">
                                2.非质量问题在收货<span
                                className="text-sm text-[#666] leading-5 font-[600]">48小时内</span>联系客服申请售后，请确保产品未解冻且外包装完好；非质量问题拒收或联系不上导致退货，
                                <span
                                    className="text-sm text-[#666] leading-5 font-[600]">运费只做部分退款</span>
                            </p>
                            <p className="text-secondary mb-[10px]">
                                3.易解冻损耗产品(鸡柳，水饺，汤圆，肥牛羊卷，骨肉相连，奥尔良腿排，水产海鲜等)非质量问题不支持无理由退换
                            </p>
                            <p className="text-secondary mb-[10px]">
                                4.收货时请与配送员当场清点商品数量及开箱验货， <span
                                className="text-sm text-[#666] leading-5 font-[600]">不满意当场退货</span>，过后告知数量不足平台无法处理
                            </p>
                        </div>
                        <div className="pl-[22px]">
                            <div className="mb-[10px]">
                                <Tag type="primary">
                                    <span className="text-[12px] leading-4">物流订单</span>
                                </Tag>
                            </div>
                            <p className="text-secondary mb-[10px]">
                                1.冷冻食品属于特殊商品，物流揽收后不支持修改收货地址和非质量问题退换货
                            </p>
                            <p className="text-secondary mb-[10px]">
                                2.下单后请保持电话畅通，偶有网点将快递放在自提点，需自提，不得以此为由拒收
                            </p>
                            <p className="text-secondary mb-[10px]">
                                3.因买家原因（含电话地址错误、电话无人接听导致的延误签收、商品退回、拒收或存放自提点过久导致的解冻变质）一切损失由客户承担，将拒绝退款和售后
                            </p>
                            <p className="text-secondary mb-[10px]">
                                4.发货采用<span
                                className="text-sm text-[#666] leading-5 font-[600]">泡沫箱加冰袋</span>发货，物流途中包装可能被冰袋划破，属正常情况，不影响商品品质，不予售后
                            </p>
                        </div>
                    </li>
                </ul>
            </Card>
        </div>
        {/*占位容器*/}
        <div className="w-full pt-[60px] bg-[transparent]"></div>
        {/* 底部购物车按钮   */}
        <div
            className="max-w-[375px] mx-auto z-50 fixed left-0 right-0 bottom-0 h-[60px] bg-white flex items-center justify-between">
            <div className="flex h-full items-center">
                <button className="mx-6 w-6 flex flex-col  items-center">
                    <span className="iconfont icon-service font-medium"></span>
                    <span className="shrink-0 text-[12px] leading-4">客服</span>
                </button>
                <button className="mr-[18px] w-6 flex flex-col  items-center">
                    <span className="iconfont icon-favorite font-medium"></span>
                    <span className="shrink-0 text-[12px] leading-4">收藏</span>
                </button>
                <button className="flex flex-col  items-center">
                    <span className="iconfont icon-cart font-medium"></span>
                    <span className="shrink-0 text-[12px] leading-4">购物车</span>
                </button>
            </div>
            <button
                className="w-[191px] h-[40px] mr-4 rounded-[20px] bg-gradient-to-r from-[#FDAF17] to-[#FB561C] text-white">加入购物车
            </button>
        </div>
        <Backtop/>
    </main>)
}

export default App
