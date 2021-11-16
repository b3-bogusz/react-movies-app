import React from 'react';

const Svg = ({
    svgClassName,
    icon,
    size,
}) => {
    return (
        <svg
            className={svgClassName}
            dangerouslySetInnerHTML={{
                __html: icon.markup,
            }}
            style={{
                minWidth: `${size}rem`,
                maxWidth: `${size}rem`,
                width: `${size}rem`,
                minHeight: `${size}rem`,
                maxHeight: `${size}rem`,
                height: `${size}rem`,
            }}
            viewBox={icon.viewBox}
        />
    );
}

export default Svg;