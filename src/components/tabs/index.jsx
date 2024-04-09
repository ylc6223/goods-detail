import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types'
import clsx from "clsx";

const Tab = (props) => {
    const {label, onClick, isActive, itemWidth, tabSpacing} = props
    return (
        <div
            className={clsx('cursor-pointer inline-block pb-2 text-[#333] hover:text-gray-800 text-base text-center', {
                ['font-medium']: isActive,
                ['text-[#000]']: isActive
            })}
            onClick={onClick} style={{width: itemWidth, marginRight: `${tabSpacing}px`}}>
            {label}
        </div>
    );
};

const Tabs = (props) => {
    const {tabs, width, onTabChange, itemWidth, padding, sliderWidth, tabSpacing} = props
    // 下划线偏移量
    const [lineTranslateLeft, setLineTranslateLeft] = useState(0)
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef(null)
    const [tabsWidth, setTabsWidth] = useState(0)
    useEffect(() => {
        if (tabsWidth) return
        setTabsWidth(width)
    }, [])
    useEffect(() => {
        getLineTranslateLeft()
    }, [tabsWidth, activeTab, tabs])
    const handleTabClick = (index) => {
        setActiveTab(index);
        onTabChange && onTabChange({index})
    }
    const getItemWidth = () => {
        let width = 100 / (tabs.length || 4) + '%'
        return itemWidth ? itemWidth : width
    }
    // 计算偏移量
    const getLineTranslateLeft = () => {
        let tabsNum = tabs.length;
        // let padding = padding
        // tabs除去padding后的实际宽度
        let width = tabsWidth - padding * 2;
        // 滑块距离tabs容器左边的距离
        let left = (width / tabsNum - (sliderWidth) - tabSpacing) / 2 + padding
        let scrollLeft = left;
        if (activeTab > 0) {
            scrollLeft = scrollLeft + (width / tabsNum) * activeTab;
        }
        setLineTranslateLeft(scrollLeft)
    }
    return (
        <div className="relative flex flex-row" ref={tabsRef}
             style={{width: `${tabsWidth}px`, padding: `0 ${padding}px`}}>
            {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label} isActive={activeTab === index} padding={15}
                     itemWidth={getItemWidth()}
                     tabSpacing={tabSpacing}
                     onClick={() => handleTabClick(index)}/>
            ))}
            <div
                className="absolute bottom-0 bg-[#F87036] h-1 rounded-[3px] transition-transform duration-300"
                style={{
                    width: `${sliderWidth}px`,
                    transform: `translateX(${lineTranslateLeft}px)`,
                }}
            ></div>
        </div>
    );
}
Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
    })).isRequired,
    onTabChange: PropTypes.func,
    //tabs宽度，不传值则默认0，单位px
    width: PropTypes.number,
    //标签页宽度
    itemWidth: PropTypes.string,
    padding: PropTypes.number,
    // 滑块宽度
    sliderWidth: PropTypes.number,
    tabSpacing: PropTypes.number,
}
export default Tabs