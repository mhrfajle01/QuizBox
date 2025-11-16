export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export function animateValue(obj, start, end, duration, isDecimal = false) {
    console.log(`animateValue called for ${obj.id}:`, { start, end, duration, isDecimal });
    let startTimestamp = null;
    
    obj.classList.add('popping');

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let value = progress * (end - start) + start;
        if (isDecimal) {
            obj.innerHTML = value.toFixed(1) + 's'; // Append 's' for time
        } else {
            obj.innerHTML = Math.floor(value);
        }
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.classList.remove('popping');
        }
    };
    window.requestAnimationFrame(step);
}
