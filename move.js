AFRAME.registerComponent("move-box", {
    schema: {
      moveX: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveX = this.data.moveX + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.x = this.data.moveX;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
});
AFRAME.registerComponent("fall-down", {
    schema: {
      moveX: { type: "number", default: 0 },
    },
  
    tick: function () {
  
      console.log('work2')
      window.addEventListener('click',()=>{this.data.moveX = this.data.moveX - 0.0001; console.log('work1')})
  
      var pos = this.el.getAttribute("position");
  
      pos.x = pos.x + this.data.moveX;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });