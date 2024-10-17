// cursor.js
const cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: null,
    $outline: null,
  
    init: function () {
      this.$dot = document.querySelector(".cursor-dot");
      this.$outline = document.querySelector(".cursor-dot-outline");
  
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;
  
      this.setupEventListeners();
      this.animateDotOutline();
    },
  
    setupEventListeners: function () {
      const self = this;
  
      document.querySelectorAll("a").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });
  
      document.addEventListener("mousedown", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener("mouseup", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
  
      document.addEventListener("mousemove", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
  
        const dotSize = self.$dot.offsetWidth;

        self.endX = Math.min(Math.max(e.pageX, 0), window.innerWidth - dotSize);
        self.endY = Math.min(Math.max(e.pageY, 0), window.innerHeight - dotSize);

        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
      });
  
      document.addEventListener("mouseenter", function () {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });
  
      document.addEventListener("mouseleave", function () {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
    },
  
    animateDotOutline: function () {
      const self = this;
  
        self._x = Math.min(Math.max(self._x + (self.endX - self._x) / self.delay, 0), window.innerWidth - self.outlineSize);
        self._y = Math.min(Math.max(self._y + (self.endY - self._y) / self.delay, 0), window.innerHeight - self.outlineSize);

        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
  
    toggleCursorSize: function () {
      const self = this;
  
      if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else {
        self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
      }
    },
  
    toggleCursorVisibility: function () {
      const self = this;
  
      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      }
    },
  };
  
  export default cursor;
  