import React from 'react';

const Svg = ({
    className,
    icon,
    size,
}) => {
    return (
        <svg
            className={className}
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