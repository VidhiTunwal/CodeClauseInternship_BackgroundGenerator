const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientType = document.getElementById('gradientType');
const direction = document.getElementById('direction');
const directionValue = document.getElementById('directionValue');
const preview = document.getElementById('preview');

function setGradient() {
    let gradient;
    const angle = direction.value;
    if (gradientType.value === 'linear') {
        gradient = `linear-gradient(${angle}deg, ${color1.value}, ${color2.value})`;
    } else if (gradientType.value === 'radial') {
        gradient = `radial-gradient(circle, ${color1.value}, ${color2.value})`;
    } else if (gradientType.value === 'conic') {
        gradient = `conic-gradient(from ${angle}deg, ${color1.value}, ${color2.value})`;
    }
    preview.style.background = gradient;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
gradientType.addEventListener('change', setGradient);
direction.addEventListener('input', function() {
    directionValue.textContent = `${direction.value}°`;
    setGradient();
});

setGradient();
