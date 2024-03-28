//Comp Sci 2 course activated :)
//*Cracks Knuckles*

//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event 

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('artCanvas'); // Html code
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; // size of canvas 
    canvas.height = window.innerHeight;

    let circles = [
        { x: 100, y: 100, radius: 30, color: 'Purple', dx: 0, dy: 0 }, //red circle 
        { x: 300, y: 100, radius: 40, color: 'Maroon', dx: 0, dy: 0 },// blue circle 
    ];

    let isDragging = false;
    let draggedCircle = null;

    function drawCircles() {
        circles.forEach(circle => {
            ctx.fillStyle = circle.color;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    //https://stackoverflow.com/questions/72121286/merging-two-different-sized-intersecting-circles-and-finding-the-coordinates-of

    function mergeCircles(circle1, circle2) {
        const newRadius = Math.sqrt(circle1.radius ** 2 + circle2.radius ** 2);
        const newColor = 'green';
        const mergedCircle = {
            x: (circle1.x * circle1.radius + circle2.x * circle2.radius) / (circle1.radius + circle2.radius),
            y: (circle1.y * circle1.radius + circle2.y * circle2.radius) / (circle1.radius + circle2.radius),
            radius: newRadius,
            color: newColor,
            dx: (circle1.dx + circle2.dx) / 2,
            dy: (circle1.dy + circle2.dy) / 2
        };
        const index1 = circles.indexOf(circle1);
        circles.splice(index1, 1);// Remove circle2
        const index2 = circles.indexOf(circle2);
        circles.splice(index2, 1); // Remove circle2
        circles.push(mergedCircle); // Add  new circle
    }

    function checkCollisions() {
        for (let i = 0; i < circles.length; i++) {
            for (let j = i + 1; j < circles.length; j++) {
                const circle1 = circles[i];
                const circle2 = circles[j];
                const dx = circle1.x - circle2.x;
                const dy = circle1.y - circle2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < circle1.radius + circle2.radius) {
                    mergeCircles(circle1, circle2);
                    return true;
                }
            }
        }
        return false;
    }
    //https://stackoverflow.com/questions/20812395/making-a-gravity-effect-inside-html5-canvas
    //https://medium.com/@cmilhench/gravity-javascript-universe-505f9a5e4a85
    //this took some time 

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!checkCollisions()) {
            circles.forEach(circle => {
                if (!isDragging || circle !== draggedCircle) {
                    circle.dy += 0.5;
                    circle.y += circle.dy;
                    circle.x += circle.dx;
                    if (circle.y + circle.radius >= canvas.height) {
                        circle.y = canvas.height - circle.radius;
                        circle.dy *= -0.7;
                    }
                    if (circle.x + circle.radius >= canvas.width || circle.x - circle.radius <= 0) {
                        circle.dx *= -0.7;
                    }
                }
            });
        }
        drawCircles();
        requestAnimationFrame(animate);//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    }

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        circles.forEach(circle => {
            const distance = Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2);
            if (distance < circle.radius) {
                isDragging = true;
                draggedCircle = circle;
                circle.dy = 0;
                circle.dx = 0;
            }
        });
    });
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const rect = canvas.getBoundingClientRect();
            draggedCircle.x = e.clientX - rect.left;
            draggedCircle.y = e.clientY - rect.top;
        }
    });
    //ez
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        draggedCircle = null;
    });
    //ez
    canvas.addEventListener('dblclick', () => {
        circles.forEach(circle => {
            circle.x = Math.random() * canvas.width;
            circle.y = Math.random() * canvas.height;
            circle.dx = 0;
            circle.dy = 0;
        });
    });

    animate();
});

//Finally :(