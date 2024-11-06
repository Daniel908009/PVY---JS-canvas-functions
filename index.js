document.addEventListener('keydown', function(event) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    const width = canvas.width;
    const height = canvas.height;
    let rand = Math.round(Math.random()*3);
    let y;
    if (event.key === 'l'){
    console.log('L pressed');
    if(rand == 0){
        y = 0;
        while (y < height){
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(width, y);
            ctx.stroke();
            y += 10;
        }
    }
    else if (rand == 1){     
        y = 0;
        while (y < height){
            ctx.beginPath();
            ctx.moveTo(width,height);
            ctx.lineTo(0, y);
            ctx.stroke();
            y += 10;
        }
    }
    else if (rand == 2){
        y = height;
        while (y >= 0){
            ctx.beginPath();
            ctx.moveTo(0,height);
            ctx.lineTo(width, y);
            ctx.stroke();
            y -= 10;
        }    
    }
    else if (rand == 3){
        y = height;
        while (y >= 0){
            ctx.beginPath();
            ctx.moveTo(width,height);
            ctx.lineTo(0, y);
            ctx.stroke();
            y -= 10;
        }     
    }
    }
    else if (event.key == 's'){
        console.log('S pressed');
        let size = canvas.width;
        let i = Math.round(Math.random()*10+3);
        let change = width/i;
        for (let j = 0; j < i; j++){
            let R = Math.round(Math.random()*200+50);
            let G = Math.round(Math.random()*200+50);
            let B = Math.round(Math.random()*200+50);
            let x = width/2 - size/2;
            let y = height/2 - size/2;
            ctx.fillRect(x,y,size,size);
            ctx.fillStyle = `rgb(${R},${G},${B})`;
            x += width/i;
            y += height/i;
            size -= change;
        }
    }
    else if (event.key == 'e'){
            console.log('e pressed');
            //creating elipses in a while loop
            let size = Math.round(Math.random()*50+10);
            let x = 0 + size/2;
            let y = 0 + size/2;
            let direction = "right";
            let runnning ;
            if (runnning){
                runnning = false;
            }else{
                runnning = true;
            }
            while (runnning){
                let R = Math.round(Math.random()*200+50);
                let G = Math.round(Math.random()*200+50);
                let B = Math.round(Math.random()*200+50);
                ctx.strokeStyle = `rgb(${R},${G},${B})`;
                ctx.beginPath();
                ctx.ellipse(x, y, size, size/2, 0, 0, 2 * Math.PI);
                ctx.stroke();
                //moving the ellipse to the right until it reaches the end of the canvas then moving it down and to the left
                if (direction == "right"){
                    x += size/2;
                }
                else if (direction == "left"){
                    x -= size/2;
                }
                if (x > width || x < 0){
                    if (direction == "right"){
                        direction = "left";
                    }else{
                        direction = "right";
                    }
                    y += size/2;
                }
                if(y > height){
                    runnning = false;
                }
            }
        }});