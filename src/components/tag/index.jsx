import styles from "./tag.module.scss"
import PropTypes from 'prop-types'
import clsx from "clsx";

function hexToRGB(hex) {
    if (hex.length === 4) {
        let text = hex.substring(1, 4);
        hex = '#' + text + text;
    }
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {};
}

function getClassName(shape, plain) {
    //circle, square
    let className = plain ? 'tag-outline ' : '';
    return className;
}

function getBgColor(type, plain) {
    return plain ? 'transparent' : getColorByType(type)
}

function getColor(type, plain) {
    return getColorByType(type, true, plain)
}

function getTypeClass(type, plain) {
    return plain ? type + '-outline' : type;
}

function getColorByType(type, isText, plain) {
    //primary， white， danger， warning， green， gray，black，light-blue，light-brownish，light-orange，light-green
    let color = ''
    const _primary = hexToRGB('#5f80f2')
    const _blue = hexToRGB('#61acf6')
    const _warning = hexToRGB('#e77846')
    const _danger = hexToRGB('#E34242')
    const _green = hexToRGB('#64b83c')
    const _pink = hexToRGB('#E93E28')
    const colors = {
        'primary': '#5f80f2',
        'info': '#61acf6',
        'danger': '#E34242',
        'warning': '#e77846',
        'success': '#64b83c',
        'pink': '#E93E28',
        'gray': '#ccc',
        'light-primary': `rgba(${_primary.r}, ${_primary.g}, ${_primary.b}, 0.08)`,
        'light-info': `rgba(${_blue.r}, ${_blue.g}, ${_blue.b}, 0.08)`,
        'light-danger': `rgba(${_danger.r}, ${_danger.g}, ${_danger.b}, 0.08)`,
        'light-warning': `rgba(${_warning.r}, ${_warning.g}, ${_warning.b}, 0.08)`,
        'light-success': `rgba(${_green.r}, ${_green.g}, ${_green.b}, 0.08)`,
        'light-pink': `rgba(255, 208, 207, 1)`,
    }
    if (isText) {
        if (type && ~type.indexOf('light-')) {
            const tp = type.replace('light-', '')
            color = colors[tp]
        } else {
            if (plain) {
                color = colors[type]
            } else {
                color = '#fff'
            }
        }
    } else {
        color = colors[type] || colors.primary
    }
    return color;
}

function Tag(props) {
    const {type, shape, plain, size,} = props
    return <div className={clsx(styles['tag'], getClassName(shape, plain), getTypeClass(type, plain), {
        ['overflow-visible']: plain
    })} style={{
        fontSize: size,
        lineHeight: size,
        backgroundColor: getBgColor(type, plain),
        color: getColor(type, plain),
    }}>
        {props.children}
        {<div className={clsx(styles['tag-border'], getClassName(shape, plain))} style={{
            borderColor: getBgColor(type)
        }}></div>}
    </div>
}

Tag.propTypes = {
    type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'pink', 'gray', 'light-primary', 'light-info', 'light-danger', 'light-warning', 'light-success', 'light-pink']),
    pading: PropTypes.string,
    margin: PropTypes.string,
    size: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    plain: PropTypes.bool,
    children: PropTypes.node,
}
export default Tag

