class Controls {
  static move(controls) {
    function mousePressed(e) {

    }

    function mouseDown(e) {
      console.log("mouse down");
      controls.viewPos.isDragging = true;
      controls.viewPos.prevX = e.clientX;
      controls.viewPos.prevY = e.clientY;
    }

    function mouseMove(e){
      const {prevX, prevY, isDragging} = controls.viewPos;
      if (isDragging) {
        const pos = {x: e.clientX, y: e.clientY};
        let dx = pos.x - prevX;
        let dy = pos.y - prevY;
      if(prevX || prevY) {
        controls.view.x += dx;
        controls.view.y += dy;
        controls.viewPos.prevX = pos.x, controls.viewPos.prevY = pos.y;

        console.log(controls.view.x, controls.view.y)

        var deltaX = prevX - e.clientX,
            deltaY = prevY - e.clientY;

         if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
            draging_left();
              //left
          } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
            draging_right();
              //right
          } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
            draging_up();
              //up
          } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
            draging_down();
              //down
          }


      }
      //console.log(controls.view.x, controls.view.y)



      }

    }

    function mouseReleased(e){
      controls.viewPos.isDragging = false;
      console.log(controls.viewPos.isDragging);
    }

    /*function mouseWheel(e){
      if (e.deltaY < 0) {
          console.log('scrolling up');
          zoom_in();
        }
      if (e.deltaY > 0) {
          console.log('scrolling down');
          zoom_out();
        }

    }*///Zoom in and out with the mouse wheel

    return {
      mousePressed,
      mouseMove,
      mouseDown,
      mouseReleased
      //mouseWheel
    }
  }
}
