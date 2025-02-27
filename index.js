export default function cssColors(element) {
    const colors = new Set();

    function extractGradientColors(gradient) {
        const gradientColors = gradient.match(/rgba?\([^)]*\)|#[0-9a-fA-F]+/g);
        if (gradientColors) {
            gradientColors.forEach(color => colors.add(color));
        }
    }

    function collectColors(el) {
        const computedStyle = window.getComputedStyle(el);

        // Add text and background colors
        colors.add(computedStyle.color);
        colors.add(computedStyle.backgroundColor);

        // Add all border colors
        colors.add(computedStyle.borderTopColor);
        colors.add(computedStyle.borderRightColor);
        colors.add(computedStyle.borderBottomColor);
        colors.add(computedStyle.borderLeftColor);

        // Extract colors from gradients
        const bgImage = computedStyle.backgroundImage;
        if (bgImage && bgImage.includes('gradient')) {
            extractGradientColors(bgImage);
        }

        // Recursively process children
        el.childNodes.forEach(child => {
            if (child.nodeType === Node.ELEMENT_NODE) collectColors(child);
        });
    }

    collectColors(element);

    return [...colors];
}